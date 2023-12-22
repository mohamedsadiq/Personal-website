import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";


import { HydrationOverlay } from "@builder.io/react-hydration-overlay";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <HydrationOverlay>
    <Layout>
      <div class="style_scrollbar__4T6N2" >
        <div class="style_thumb__noCcq"></div>
      </div>
      <Component {...pageProps} />
    </Layout>
    </HydrationOverlay>
  );
}

export default MyApp;
