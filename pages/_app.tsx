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

    // Add navigation debugging
    const DEBUG_NAV = true; // Set to true to enable navigation debugging
    
    // Create a visible debug element if needed
    if (DEBUG_NAV && typeof document !== 'undefined') {
      // Add debug styles
      const style = document.createElement('style');
      style.innerHTML = `
        #nav-debug {
          position: fixed;
          bottom: 10px;
          right: 10px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 10px;
          border-radius: 5px;
          font-family: monospace;
          font-size: 12px;
          z-index: 9999;
          max-width: 300px;
          max-height: 200px;
          overflow: auto;
        }
      `;
      document.head.appendChild(style);
      
      // Create debug element if it doesn't exist
      if (!document.getElementById('nav-debug')) {
        const debugEl = document.createElement('div');
        debugEl.id = 'nav-debug';
        debugEl.innerHTML = 'Navigation Debug';
        document.body.appendChild(debugEl);
      }
    }
    
    // Helper to log navigation events
    const logNav = (event: string, data: any) => {
      if (!DEBUG_NAV) return;
      
      console.log(`[NAV-DEBUG][${event}]`, data);
      
      // Update visual debug element
      if (typeof document !== 'undefined') {
        const debugEl = document.getElementById('nav-debug');
        if (debugEl) {
          const time = new Date().toLocaleTimeString();
          debugEl.innerHTML = `<div><strong>${time} - ${event}</strong><br>${JSON.stringify(data)}</div>` + debugEl.innerHTML;
          
          // Keep only last 5 events
          const events = debugEl.getElementsByTagName('div');
          if (events.length > 5) {
            for (let i = 5; i < events.length; i++) {
              events[i].remove();
            }
          }
        }
      }
    };

    // Scroll to top on route change
    const handleRouteChange = (url: string) => {
      logNav('routeChangeComplete', { 
        url, 
        pathname: window.location.pathname,
        asPath: router.asPath
      });
      window.scrollTo(0, 0);
      document.body.focus();
    };

    // Enhanced route change error handler for production
    const handleRouteChangeError = (err: Error & { cancelled?: boolean }, url: string) => {
      // If the error was a cancelled navigation, we can safely ignore it
      if (err.cancelled) return;
      
      // Log the error with detailed information
      logNav('routeChangeError', { 
        error: err.message, 
        url,
        currentPath: window.location.pathname,
        stack: err.stack
      });
      
      try {
        // Get current URL components
        const path = window.location.pathname;
        const query = window.location.search;
        const hash = window.location.hash;
        const segments = path.split('/').filter(Boolean);
        
        // Log the segments for debugging
        logNav('urlSegments', { 
          segments, 
          path,
          fullUrl: window.location.href
        });
        
        // Check for various duplication patterns
        let needsFixing = false;
        const uniqueSegments: string[] = [];
        const seenSegments = new Set<string>();
        
        // Check for simple duplicates
        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i];
          if (seenSegments.has(segment)) {
            needsFixing = true;
            logNav('duplicateSegmentFound', { segment, position: i });
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
            logNav('patternDuplication', { 
              firstHalf, 
              secondHalf,
              fullPath: path
            });
          }
        }
        
        // Fix URL if needed
        if (needsFixing) {
          const cleanPath = '/' + uniqueSegments.join('/');
          logNav('fixingUrl', {
            from: path,
            to: cleanPath,
            segments: segments,
            uniqueSegments: uniqueSegments
          });
          
          // Replace state without triggering a page reload
          window.history.replaceState(
            window.history.state,
            document.title,
            cleanPath + query + hash
          );
          
          // If we're on a 404 page, try to navigate to the fixed URL
          if (document.title.includes('404') || document.body.textContent?.includes('404')) {
            logNav('redirectingFrom404', { to: cleanPath + query + hash });
            router.replace(cleanPath + query + hash);
          }
        }
      } catch (fixError) {
        logNav('errorFixingUrl', { error: fixError });
      }
    };

    // Handle initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Track route change start
    const handleRouteChangeStart = (url: string) => {
      logNav('routeChangeStart', { 
        url, 
        currentPath: window.location.pathname,
        href: window.location.href,
        asPath: router.asPath
      });
    };
    
    // Listen for all route changes
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChangeError);
    
    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
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
