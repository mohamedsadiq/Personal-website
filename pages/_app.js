import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
