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

    // Handle route change errors
    const handleRouteChangeError = (err: Error & { cancelled?: boolean }, url: string) => {
      // If the error was a cancelled navigation, we can safely ignore it
      if (err.cancelled) return;
      
      // Otherwise, log the error and try to recover
      console.error('Navigation error:', err);
      
      // Clean up any duplicate segments in the URL
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      
      // Manual deduplication
      const uniqueSegments = [];
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
    <div className="app-container">
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <AnimatedPage key={router.asPath}>
            <Component {...pageProps} />
          </AnimatedPage>
        </AnimatePresence>
      </Layout>
    </div>
  );
}
