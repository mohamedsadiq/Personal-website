import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Inter, K2D } from "next/font/google";
import { AppProps } from 'next/app';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const k2d = K2D({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
