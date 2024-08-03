
import { useEffect, useRef } from "react";
import Head from "next/head";
import BackButton from "../../../components/backButton";

export default function SwapUI() {

    return(
        <>
      <Head>
        <title>SwapUI</title>
        <meta name="description" content="SwapUI" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mosadiq.com" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="Product designer & Engineer." />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />  
      </Head>
    
        <div className="container inner_container_sparks">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
          <h2 className="mt-10">SwapUI</h2>
            <p>
              It's a scroll, but with a twist. Instead of the typical scroll
              bar, I integrated circular indicators to signify the moving
              content, elevating the overall user experience.
            </p>
            <div className="exp"  style={{ height:"400px"}} >
          
            </div>
            
          </div>
        </div>
    
   
    </>
    )
}