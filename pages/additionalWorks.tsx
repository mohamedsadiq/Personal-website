import Head from 'next/head'
import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Image = dynamic(() => import('next/image'), { ssr: false });

const images: StaticImageData[] = [
  require("../img/adw/Aston Martin Dark Mode.png"),
  require("../img/adw/Certified Web3 Boy NFT.png"),
  require("../img/adw/Certified Web3 Boy NFTs Loading.png"),
  require("../img/adw/Connected by Mohamed Sadiq.png"),
  require("../img/adw/Crypto app by Mohamed Sadiq.png"),
  require("../img/adw/DAOs Spot by Mohamed Sadiq.png"),
  require("../img/adw/DAOs Spot Tools Cards.png"),
  require("../img/adw/DAOs Spot website.png"),
  require("../img/adw/Minting flow Apple Watch.png"),
  require("../img/adw/Simple Watch Face 3.png"),
  require("../img/adw/Simple Watch Face.png"),
  require("../img/adw/Trust Wallet Redesign.png"),
  require("../img/adw/Trust Wallet Redesign (1).png"),
  require("../img/adw/Trust Wallet Redesign.jpg"),
  require("../img/adw/Weather App design.jpg"),
  require("../img/adw/Weather App by Mohamed Sadiq.jpg"),
  require("../img/adw/Weather App by Mohamed Sadiq.png"),
  require("../img/adw/Zenon Trading App.png"),
  require("../img/adw/OVO Redesign.png"),
  require("../img/adw/OVO Redesign (1).png"),
  require("../img/44.png"),
  require("../img/adw/AI project by Mohamed Sadiq.png"),
  require("../img/adw/Disliked by Mohamed Sadiq.png"),
  require("../img/libyatells.png"),
  require("../img/lastwebsite.jpg"),
  require("../img/Instagram post - 4.png"),
  require("../img/fdsvedf.png"),
  require("../img/daos.png"),
  require("../img/Cards design.png"),
  require("../img/4343.png"),
  require("../img/23323.png"),
  require("../img/ffa.png"),
  require("../img/Crypto watch app.jpg"),
  require("../img/038c22142533193.png"),
  require("../img/5f36bf142533193 62689c440c045.png"),
  require("../img/adw/new/Dribbble Image 1600x1200.jpg"),
  require("../img/adw/new/Original 9b4df9a6.png"),
  require("../img/adw/new/Mohamed Sadiq media (1).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media (4).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media (3).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media (2).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (1).jpeg"),
  require("../img/adw/new/0f9c180f4a50cf64b63ccb2a9cc93ff5 1600x1200.png"),
  require("../img/adw/new/C42243af411ab0ea37212c684cd7fcfd (1).png"),
  require("../img/adw/new/Mohamed Sadiq media post (2).jpeg"),
  require("../img/adw/new/Dribbble Image.png"),
  require("../img/adw/new/Dribbble Image 1600x1200.png"),
  require("../img/adw/new/Mohamed Sadiq media post (4).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media (7).jpeg"),
  require("../img/adw/new/Mohamed Sadiq Twitter.jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (5).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (6).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (7).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (8).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post (9).jpeg"),
  require("../img/adw/new/Mohamed Sadiq media post.jpeg"),
  require("../img/adw/new/Mohamed Sadiq media.jpeg"),
  require("../img/adw/new/Mohamed Sadiq Twitter Media.jpeg"),
  require("../img/adw/new/Original 1200x1200.png"),
  require("../img/42f3.png"),
  require("../img/image_processing20220304-7042-19o4z5c.png"),
  require("../img/developerdaofmfolder/Instagram post - 14.png"),
  require("../img/developerdaofmfolder/Instagram post - 17.png"),
  require("../img/developerdaofmfolder/Instagram post - 11.png"),
  require("../img/developerdaofolder/fasdfasd.jpeg"),
  require("../img/web3boy/1ff132134169935.png"),
  require("../img/web3boy/6cd4ee134169935 61d5ee3a8bf65.png"),
  require("../img/web3boy/Behance Image 1920x1440.png"),
  require("../img/DAOs Spot/1.png"),
  require("../img/DAOs Spot/4.png"),
  require("../img/DAOs Spot/3.png"),
  require("../img/DAOs Spot/2.png"),
  require("../img/Original Portfolio.png")
];

interface HomeProps {
  mode: string;
}

const Home: React.FC<HomeProps> = ({ mode }) => {
  const [isGridView, setIsGridView] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const memoizedImages = useMemo(() => images, []);

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
          <div className={`pt-5 mt-10 flex ${isGridView ? 'gap-x-9 justify-center flex-wrap gap-y-9' : 'flex-col items-center'} overflow-x-hidden overflow-y-hidden`}>
            {memoizedImages.map((image, index) => (
              <PhotoView key={index} src={image.default.src}>
                <motion.div
                  className={`w-60 h-60 relative cursor-pointer mb-4 transition-transform transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-20' : ''}`} style={{ borderRadius: "10px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={image}
                    alt={`Image ${index + 1}`}
                    quality={100}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Home;
