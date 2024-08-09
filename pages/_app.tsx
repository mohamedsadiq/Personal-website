import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { AppProps } from 'next/app';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  return (
    <div className={inter.className} lang="en">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
