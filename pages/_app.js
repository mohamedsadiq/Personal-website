import '../styles/globals.scss'
import Layout from "../components/Layout"
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout >
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
