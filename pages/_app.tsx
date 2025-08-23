import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// K2D font will be applied via CSS import in globals.css
const k2d = {
  className: 'font-k2d',
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  return (
    <div className={`${k2d.className}`} lang="en">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
