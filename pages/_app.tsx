import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle scroll restoration
  useEffect(() => {
    // This prevents the default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
      document.body.focus();
    };

    // Handle initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="app-container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
