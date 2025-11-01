import { motion, Variants } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Prevent URL duplication during transitions
  useEffect(() => {
    // Clean up any duplicate segments in the URL
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    // Manual deduplication without using Set
    const uniqueSegments: string[] = [];
    for (let i = 0; i < segments.length; i++) {
      if (uniqueSegments.indexOf(segments[i]) === -1) {
        uniqueSegments.push(segments[i]);
      }
    }
    
    // If there are duplicate segments, replace the URL without reloading
    if (segments.length !== uniqueSegments.length) {
      const cleanPath = '/' + uniqueSegments.join('/');
      window.history.replaceState({}, '', cleanPath);
    }
  }, [router.asPath]);

  // Optimized animation variants
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
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.4,
      }
    }
  };

  // Add will-change for better performance
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: pageVariants,
    className: "min-h-screen will-change-transform",
    // Add hardware acceleration
    style: { 
      transform: 'translateZ(0)' as const,
      backfaceVisibility: 'hidden' as const,
      perspective: 1000
    }
  } as const;

  return (
    <motion.div key={router.asPath} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
