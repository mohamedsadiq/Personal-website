import { motion, Variants } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Handle body overflow to hide scroll jumps during transitions
  useEffect(() => {
    const handleTransitionStart = () => {
      document.body.style.overflow = 'hidden';  // Hide overflow during anim
    };

    const handleTransitionEnd = () => {
      document.body.style.overflow = '';  // Restore after
      window.scrollTo(0, 0);  // Scroll here (invisible, post-enter)
    };

    router.events.on('routeChangeStart', handleTransitionStart);
    router.events.on('routeChangeComplete', handleTransitionEnd);

    return () => {
      router.events.off('routeChangeStart', handleTransitionStart);
      router.events.off('routeChangeComplete', handleTransitionEnd);
      document.body.style.overflow = '';  // Cleanup
    };
  }, [router.events]);

  // Enhanced URL deduplication that works in both development and production
  useEffect(() => {
    if (typeof window === 'undefined') return;  // Early return for SSR

    // Wait for DOM to be fully ready
    const fixUrl = () => {
      try {
        // Get current path and query
        const path = window.location.pathname;
        const query = window.location.search;
        const hash = window.location.hash;
        
        // Check for common patterns of duplication
        const pathSegments = path.split('/').filter(Boolean);
        
        // Check for exact duplicates (e.g., /blogs/blogs)
        let hasDuplicates = false;
        const uniqueSegments: string[] = [];
        const seen = new Set<string>();
        
        for (let i = 0; i < pathSegments.length; i++) {
          const segment = pathSegments[i];
          if (seen.has(segment)) {
            hasDuplicates = true;
          } else {
            seen.add(segment);
            uniqueSegments.push(segment);
          }
        }
        
        // Check for nested duplicates (e.g., /projects/project-name/projects/project-name)
        const pathStr = pathSegments.join('/');
        const halfLength = Math.floor(pathSegments.length / 2);
        let isDuplicatedPattern = false;
        
        if (pathSegments.length >= 2 && halfLength >= 1) {
          const firstHalf = pathSegments.slice(0, halfLength).join('/');
          const secondHalf = pathSegments.slice(halfLength).join('/');
          isDuplicatedPattern = firstHalf === secondHalf;
        }
        
        // Fix the URL if needed
        if (hasDuplicates || isDuplicatedPattern) {
          const cleanPath = '/' + uniqueSegments.join('/');
          console.log(`[URL_FIX_DEBUG] Fixed duplicated URL: ${path} → ${cleanPath}`);
          window.history.replaceState(
            window.history.state, 
            document.title, 
            cleanPath + query + hash
          );
        }
      } catch (error) {
        console.error('[URL_FIX_DEBUG] Error fixing URL:', error);
      }
    };
    
    // Fix immediately and also after a short delay to catch post-animation issues
    fixUrl();
    const timeoutId = setTimeout(fixUrl, 100);
    
    return () => clearTimeout(timeoutId);
  }, [router.pathname]);  // Use pathname for stability (no query triggers)

  // Optimized animation variants (shorter for production routing)
  const pageVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      // Using simpler transition for better performance
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(5px)",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.25,
      }
    }
  };

  // Add will-change for better performance
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: pageVariants,
    key: router.pathname,  // Stable key (no query/hash remounts)
    className: "min-h-screen will-change-transform",
    // Add hardware acceleration
    style: { 
      transform: 'translateZ(0)' as const,
      backfaceVisibility: 'hidden' as const,
      perspective: 1000
    }
  } as const;

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;