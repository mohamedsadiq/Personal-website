import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from "../components/Layout";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFirstRender = useRef(true);

  // Handle scroll restoration and route changes
  useEffect(() => {
    // Enable proper scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top on route change
    const handleRouteChange = (url: string) => {
      // Only scroll to top if it's not the initial render
      if (!isFirstRender.current) {
        window.scrollTo(0, 0);
      }
      isFirstRender.current = false;
      document.body.focus();
    };

    // Handle route change errors
    const handleRouteChangeError = (err: Error & { cancelled?: boolean }, url: string) => {
      if (err.cancelled) return;
      console.error('Route change error:', err);
      
      // Simple URL normalization to prevent duplicate segments
      try {
        const { pathname, search, hash } = new URL(url, window.location.origin);
        const segments = pathname.split('/').filter(Boolean);
        const uniqueSegments = Array.from(new Set(segments));
        
        if (segments.length !== uniqueSegments.length) {
          const cleanPath = '/' + uniqueSegments.join('/');
          const newUrl = cleanPath + search + hash;
          
          window.history.replaceState(
            { ...window.history.state, as: newUrl, url: newUrl },
            '',
            newUrl
          );
        }
      } catch (e) {
        console.error('Error normalizing URL:', e);
      }
    };

    // Handle initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Track route changes for better debugging
    const handleRouteChangeStart = (url: string) => {
      console.log('Route changing to:', url);
    };
    
    // Set up event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChangeError);
    
    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  // Use router.asPath as the key for AnimatedPage to ensure proper re-renders
  return (
    <Layout>
      <AnimatePresence 
        mode="wait" 
        initial={false} 
        onExitComplete={() => {
          window.scrollTo(0, 0);
          // Ensure any pending styles are flushed
          if (process.env.NODE_ENV !== 'production') {
            const styles = document.querySelectorAll('style[data-n-href]');
            const style = document.createElement('style');
            style.innerHTML = 'html{scroll-behavior:smooth}';
            document.head.appendChild(style);
            requestAnimationFrame(() => {
              document.head.removeChild(style);
            });
          }
        }}
      >
        <AnimatedPage key={router.asPath.split('?')[0]}>
          <Component {...pageProps} />
        </AnimatedPage>
      </AnimatePresence>
    </Layout>
  );
}
