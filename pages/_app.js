import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <div class="style_scrollbar__4T6N2" >
        <div class="style_thumb__noCcq"></div>
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
