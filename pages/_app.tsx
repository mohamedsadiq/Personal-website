import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { defaultSEOConfig } from '../lib/seo.config';
import Layout from "../components/Layout";
import { GA_MEASUREMENT_ID, pageview } from "../lib/analytics/ga";
import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";
import "../components/Gallery/css.css";

// Extend the PerformanceEntry interface to include the type property
interface PerformanceNavigationTiming extends PerformanceEntry {
  type: string;
  // Add other properties you need from PerformanceNavigationTiming
}

// Debugging utility (disabled in production to avoid runtime overhead)
const debug = (message: string, data?: any) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const style = 'background: #222; color: #bada55; padding: 2px 4px; border-radius: 3px;';
  console.log(`%c[ROUTER_DEBUG] ${message}`, style, data || '');
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFirstRender = useRef(true);
  const routeTimingRef = useRef({ start: 0 });
  const [navigationState, setNavigationState] = useState({
    currentPath: '',
    previousPath: '',
    navigationType: 'initial',
    timestamp: new Date().toISOString(),
    routeChangeStart: 0,
    routeChangeComplete: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const rootElement = document.documentElement;
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initial check
    if (prefersDarkQuery.matches) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }

    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
      }
    };

    prefersDarkQuery.addEventListener('change', handlePreferenceChange);

    return () => {
      prefersDarkQuery.removeEventListener('change', handlePreferenceChange);
    };
  }, []);

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
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      debug('Initial scroll to top');
      isFirstRender.current = false;
    }

    const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const navigationType = navEntries.length > 0 ? navEntries[0].type : 'navigate';
      routeTimingRef.current.start = performance.now();
      
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
        routeChangeStart: routeTimingRef.current.start,
      }));
    };

    const handleRouteChangeComplete = (url: string, { shallow }: { shallow: boolean }) => {
      const loadTime = routeTimingRef.current.start ? performance.now() - routeTimingRef.current.start : 0;
      
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

      if (GA_MEASUREMENT_ID) {
        pageview(url);
      }

      window.scrollTo(0, 0);
      debug('Scroll to top after route complete');
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

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);
    window.addEventListener('beforeunload', handleBeforeUnload);

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

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router.events]);

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

  useEffect(() => {
    if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
      return;
    }

    pageview(window.location.pathname);
  }, []);

  // Preserved URL deduplication from AnimatedPage (runs on pathname change)
  useEffect(() => {
    if (typeof window === 'undefined') return;  // Early return for SSR

    const fixUrl = () => {
      try {
        const path = window.location.pathname;
        const query = window.location.search;
        const hash = window.location.hash;
        
        const pathSegments = path.split('/').filter(Boolean);
        
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
        
        const halfLength = Math.floor(pathSegments.length / 2);
        let isDuplicatedPattern = false;
        
        if (pathSegments.length >= 2 && halfLength >= 1) {
          const firstHalf = pathSegments.slice(0, halfLength).join('/');
          const secondHalf = pathSegments.slice(halfLength).join('/');
          isDuplicatedPattern = firstHalf === secondHalf;
        }
        
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
    
    fixUrl();
    const timeoutId = setTimeout(fixUrl, 100);
    
    return () => clearTimeout(timeoutId);
  }, [router.pathname]);

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} key={pathKey} /> 
      </Layout>
    </>
  );
}