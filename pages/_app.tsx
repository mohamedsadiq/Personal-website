import "../styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const k2d = {
  className: 'font-k2d',
};

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const router = useRouter();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Function to save scroll position
    const saveScrollPosition = (url: string) => {
      const scrollPos = window.scrollY;
      sessionStorage.setItem(`scrollPos:${url}`, scrollPos.toString());
    };

    // Save scroll position on route change start
    const handleRouteChangeStart = (url: string) => {
      saveScrollPosition(router.asPath);
    };

    // Restore scroll position after route change complete
    const handleRouteChangeComplete = (url: string) => {
      // Wait for the page to be fully rendered
      setTimeout(() => {
        const savedScrollPos = sessionStorage.getItem(`scrollPos:${url}`);
        if (savedScrollPos !== null) {
          window.scrollTo(0, parseInt(savedScrollPos, 10));
          sessionStorage.removeItem(`scrollPos:${url}`);
        } else {
          window.scrollTo(0, 0);
        }
      }, 0);
    };

    // Set up event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    // Clean up event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div className={`${k2d.className}`} lang="en">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
