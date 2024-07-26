import Head from 'next/head'
import { useEffect,useRef } from "react";
import Content from '../components/Content'
import Info from "../components/info"

export default function Home(props) {
  const modeOfThePc = props.mode;
// console.log(modeOfThePc);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      parentRef.current.style.height = `${childRef.current.offsetHeight}px`;
    }
  }, []);
  return (
    // class_body
     <div className="" >
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
      
      <div className="container">
      <Info />
         <Content valueOfMode={props.mode} />
      </div>
     
    
      </div>
  )
}
