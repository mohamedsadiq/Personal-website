import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from "../components/Layout";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";

// Extend the PerformanceEntry interface to include the type property
interface PerformanceNavigationTiming extends PerformanceEntry {
  type: string;
  // Add other properties you need from PerformanceNavigationTiming
}

// Debugging utility
const debug = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'production') {
    const style = 'background: #222; color: #bada55; padding: 2px 4px; border-radius: 3px;';
    console.log(`%c[ROUTER_DEBUG] ${message}`, style, data || '');
  }
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFirstRender = useRef(true);
  const [navigationState, setNavigationState] = useState({
    currentPath: '',
    previousPath: '',
    navigationType: 'initial',
    timestamp: new Date().toISOString(),
    routeChangeStart: 0,
    routeChangeComplete: 0,
  });

  // Debug router object on mount
  useEffect(() => {
    debug('Router object:', {
      pathname: router.pathname,
      asPath: router.asPath,
      query: router.query,
      basePath: router.basePath,
      isReady: router.isReady,
      isPreview: router.isPreview,
      isFallback: router.isFallback,
    });
  }, []);

  // Handle scroll restoration and route changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Enable proper scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Handle initial load
    window.scrollTo(0, 0);
    isFirstRender.current = false;

    // Enhanced route change handlers
    const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
      // Get navigation type with proper TypeScript type
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const navigationType = navEntries.length > 0 ? navEntries[0].type : 'navigate';
      
      debug('Route change starting', { 
        url, 
        shallow,
        currentPath: window.location.pathname,
        navigationType,
        timestamp: new Date().toISOString(),
        performance: {
          timing: performance.timing,
          memory: (performance as any).memory,
        },
      });
      
      setNavigationState(prev => ({
        ...prev,
        currentPath: url,
        previousPath: window.location.pathname,
        navigationType: 'routeChangeStart',
        timestamp: new Date().toISOString(),
        routeChangeStart: performance.now(),
      }));
    };

    const handleRouteChangeComplete = (url: string, { shallow }: { shallow: boolean }) => {
      const loadTime = performance.now() - navigationState.routeChangeStart;
      
      debug('Route change complete', { 
        url, 
        shallow,
        loadTime: `${loadTime.toFixed(2)}ms`,
        currentPath: window.location.pathname,
        timestamp: new Date().toISOString(),
        resources: performance.getEntriesByType('resource')
          .filter((r: any) => r.initiatorType === 'script' || r.initiatorType === 'link')
          .map((r: any) => ({
            name: r.name,
            type: r.initiatorType,
            duration: r.duration,
            transferSize: r.transferSize,
          })),
      });
      
      setNavigationState(prev => ({
        ...prev,
        navigationType: 'routeChangeComplete',
        timestamp: new Date().toISOString(),
        routeChangeComplete: performance.now(),
      }));
    };

    const handleRouteChangeError = (err: Error & { cancelled?: boolean }, url: string) => {
      if (err.cancelled) {
        debug('Route change cancelled', { url, error: err });
        return;
      }
      
      debug('Route change error', { 
        url, 
        error: {
          message: err.message,
          stack: err.stack,
          name: err.name,
        },
        currentUrl: window.location.href,
        timestamp: new Date().toISOString(),
      });
    };

    const handleBeforeUnload = () => {
      debug('Before unload', {
        currentPath: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
    };

    // Add event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial debug log
    debug('Initial page load', {
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      performance: {
        timing: performance.timing,
        memory: (performance as any).memory,
      },
      nextData: (window as any).__NEXT_DATA__,
    });

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigationState.routeChangeStart]);

  // Use a stable key for the main content to prevent full remounts
  // Only use pathname for the key to prevent remounts on query param changes
  const pathKey = router.pathname === '/_error' ? 'error' : router.pathname;
  
  // Debug render
  useEffect(() => {
    debug('App render', {
      pathKey,
      router: {
        pathname: router.pathname,
        asPath: router.asPath,
        query: router.query,
      },
      navigationState,
      timestamp: new Date().toISOString(),
    });
  }, [pathKey, router.pathname, router.asPath]);

  return (
    <Layout>
      <AnimatePresence 
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if ('scrollRestoration' in window.history) {
            window.scrollTo(0, 0);
          }
        }}
      >
        <AnimatedPage key={pathKey}>
          <Component {...pageProps} />
        </AnimatedPage>
      </AnimatePresence>
    </Layout>
  );
}
