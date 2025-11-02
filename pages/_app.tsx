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

    // Handle initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    }
  }, []);

  // Use a stable key for the main content to prevent full remounts
  // Only use pathname for the key to prevent remounts on query param changes
  const pathKey = router.pathname === '/_error' ? 'error' : router.pathname;

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
