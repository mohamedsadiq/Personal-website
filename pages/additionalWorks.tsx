import Head from 'next/head'
import { useEffect, useRef } from "react";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

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



import img36 from "../img/adw/new/Dribbble Image 1600x1200.jpg"
import img37 from "../img/adw/new/Original 9b4df9a6.png"

import img38 from "../img/adw/new/Mohamed Sadiq media (1).jpeg"
import img39 from "../img/adw/new/Mohamed Sadiq media (4).jpeg"

import img40 from "../img/adw/new/Mohamed Sadiq media (3).jpeg"
import img41 from "../img/adw/new/Mohamed Sadiq media (2).jpeg"

import img42 from "../img/adw/new/Mohamed Sadiq media post (1).jpeg"
import img43 from "../img/adw/new/0f9c180f4a50cf64b63ccb2a9cc93ff5 1600x1200.png"

import img44 from "../img/adw/new/C42243af411ab0ea37212c684cd7fcfd (1).png"
import img45 from "../img/adw/new/Mohamed Sadiq media post (2).jpeg"

import img46 from "../img/adw/new/Dribbble Image.png"
import img47 from "../img/adw/new/Dribbble Image 1600x1200.png"

import img48 from "../img/adw/new/Mohamed Sadiq media post (4).jpeg"
import img49 from "../img/adw/new/Mohamed Sadiq media (7).jpeg"

import img50 from "../img/adw/new/Mohamed Sadiq Twitter.jpeg"
import img51 from "../img/adw/new/Mohamed Sadiq media post (5).jpeg"

import img52 from "../img/adw/new/Mohamed Sadiq media post (6).jpeg"
import img53 from "../img/adw/new/Mohamed Sadiq media post (7).jpeg"

import img54 from "../img/adw/new/Mohamed Sadiq media post (8).jpeg"
import img55 from "../img/adw/new/Mohamed Sadiq media post (9).jpeg"

import img56 from "../img/adw/new/Mohamed Sadiq media post.jpeg"
import img57 from "../img/adw/new/Mohamed Sadiq media.jpeg"

import img58 from "../img/adw/new/Mohamed Sadiq Twitter Media.jpeg"
import img59 from "../img/adw/new/Original 1200x1200.png"

// import img60 from "../img/adw/new/dsdsa.mp4"
// import video1 from "../videos/example_video.mp4"
// import img61 from "../img/new/Original.png"


interface HomeProps {
  mode: string;
}

const Home: React.FC<HomeProps> = ({ mode }) => {
  const images: StaticImageData[] = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img30, img31, img32, img34, img35, img29, img33,
    img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59
  ];

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      parentRef.current.style.height = `${childRef.current.offsetHeight}px`;
    }
  }, []);

  return (
    <div className="">
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

      <div className="adwork inline">
        <PhotoProvider>
          <div className="mt-10 flex gap-x-9 justify-center flex-wrap gap-y-9 overflow-x-hidden overflow-y-hidden">
            {images.map((image, index) => (
              <PhotoView key={index} src={image.src}>
                <div className="w-60 h-60 relative cursor-pointer">
                  <Image
                    className="rounded-lg object-cover"
                    src={image}
                    alt={`Image ${index + 1}`}
                    quality={100}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Home;
