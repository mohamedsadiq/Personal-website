import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from "../components/Layout";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle scroll restoration and route changes
  useEffect(() => {
    // This prevents the default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top on route change
    const handleRouteChange = (url: string) => {
      window.scrollTo(0, 0);
      document.body.focus();
    };

    // Enhanced route change error handler for production
    const handleRouteChangeError = (err: Error & { cancelled?: boolean }, url: string) => {
      // If the error was a cancelled navigation, we can safely ignore it
      if (err.cancelled) return;
      
      // Log the error for debugging
      console.error('Navigation error:', err);
      
      try {
        // Get current URL components
        const path = window.location.pathname;
        const query = window.location.search;
        const hash = window.location.hash;
        const segments = path.split('/').filter(Boolean);
        
        // Check for various duplication patterns
        let needsFixing = false;
        const uniqueSegments: string[] = [];
        const seenSegments = new Set<string>();
        
        // Check for simple duplicates
        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i];
          if (seenSegments.has(segment)) {
            needsFixing = true;
          } else {
            seenSegments.add(segment);
            uniqueSegments.push(segment);
          }
        }
        
        // Check for pattern duplication (e.g., /blogs/article/blogs/article)
        if (segments.length >= 4) {
          const halfPoint = Math.floor(segments.length / 2);
          const firstHalf = segments.slice(0, halfPoint).join('/');
          const secondHalf = segments.slice(halfPoint).join('/');
          
          if (firstHalf === secondHalf) {
            needsFixing = true;
          }
        }
        
        // Fix URL if needed
        if (needsFixing) {
          const cleanPath = '/' + uniqueSegments.join('/');
          console.log('Fixing URL after navigation error:', path, '→', cleanPath);
          
          // Replace state without triggering a page reload
          window.history.replaceState(
            window.history.state,
            document.title,
            cleanPath + query + hash
          );
          
          // If we're on a 404 page, try to navigate to the fixed URL
          if (document.title.includes('404') || document.body.textContent?.includes('404')) {
            router.replace(cleanPath + query + hash);
          }
        }
      } catch (fixError) {
        console.error('Error while trying to fix URL:', fixError);
      }
    };

    // Handle initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChangeError);
    
    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <AnimatedPage key={router.asPath}>
          <Component {...pageProps} />
        </AnimatedPage>
      </AnimatePresence>
    </Layout>
  );
}
