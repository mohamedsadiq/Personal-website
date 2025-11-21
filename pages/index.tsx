import Head from 'next/head';
import Content from '../components/Content';
import Info from "../components/info";

interface HomeProps {
}

export default function Home({}: HomeProps) {
  return (
    // class_body
    <div className="min-h-screen transition-colors duration-200">
      <Head>
        <title>Home - Mohamed Sadiq</title>
        <meta name="description" content="A product designer who can code, focusing on Web 3, Open source products @DeveloperDAO, member of @Bulidspace and @Anti" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="A product designer" />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />  
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <Info />
        <Content />
      </div>
    </div>
  )
}
