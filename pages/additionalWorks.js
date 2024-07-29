import Head from 'next/head'
import Script from 'next/script'
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from "../img/adw/Aston Martin Dark Mode.png"
import img2 from "../img/adw/Certified Web3 Boy NFT.png"
import img3 from "../img/adw/Certified Web3 Boy NFTs Loading.png"
import img4 from "../img/adw/Connected by Mohamed Sadiq.png"
import img5 from "../img/adw/Crypto app by Mohamed Sadiq.png"
import img6 from "../img/adw/DAOs Spot by Mohamed Sadiq.png"
import img7 from "../img/adw/DAOs Spot Tools Cards.png"
import img8 from "../img/adw/DAOs Spot website.png"
import img9 from "../img/adw/Minting flow Apple Watch.png"
import img10 from "../img/adw/Simple Watch Face 3.png"
import img11 from "../img/adw/Simple Watch Face.png"
import img12 from "../img/adw/Trust Wallet Redesign.png"
import img13 from "../img/adw/Trust Wallet Redesign (1).png"
import img14 from "../img/adw/Trust Wallet Redesign.jpg"
import img15 from "../img/adw/Weather App design.jpg"
import img16 from "../img/adw/Weather App by Mohamed Sadiq.jpg"
import img17 from "../img/adw/Weather App by Mohamed Sadiq.png"
import img18 from "../img/adw/Zenon Trading App.png"
import img19 from "../img/adw/OVO Redesign.png"
import img20 from "../img/adw/OVO Redesign (1).png"
import img21 from "../img/44.png"
import img22 from "../img/adw/AI project by Mohamed Sadiq.png"
import img23 from "../img/adw/Disliked by Mohamed Sadiq.png"
import img24 from "../img/libyatells.png"
import img25 from "../img/lastwebsite.jpg"
import img26 from "../img/Instagram post - 4.png"
import img27 from "../img/fdsvedf.png"

import img28 from "../img/daos.png"
import img29 from "../img/Cards design.png"
import img30 from "../img/4343.png"
import img31 from "../img/23323.png"
import img32 from "../img/ffa.png"
import img33 from "../img/Crypto watch app.jpg"

import img34 from "../img/038c22142533193.png"
import img35 from "../img/5f36bf142533193 62689c440c045.png"


export default function Home(props) {

  const imgs = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img30, img31,img32,img34,img35 ,img29, img33
  ]
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
        <title>Additional Works - Mohamed Sadiq</title>
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

      <div className="adwork">
      

      {/* <PhotoProvider > */}
        <div className="mt-10 flex gap-x-9 justify-center flex-wrap gap-y-9 overflow-x-hidden overflow-y-hidden">
         {imgs.map((i, index) => {
            return (
              <div key={index} className="w-60" src={i}>
                 <Image cover className="rounded-lg"  src={i} alt="" quality={80} placeholder="blur"/>
              </div>
            )
          })}
          </div>
      {/* </PhotoProvider> */}

      </div>

      
    </div>
  )
}
