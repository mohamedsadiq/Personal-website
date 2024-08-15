import Head from "next/head";
import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Image = dynamic(() => import("next/image"), { ssr: false });

const images: { default: StaticImageData }[] = [
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
  require("../img/Original Portfolio.png"),
];

interface HomeProps {
  mode: string;
}

const Home: React.FC<HomeProps> = ({ mode }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const memoizedImages = useMemo(() => images, []);
  const [viewMode, setViewMode] = useState<'circle' | 'grid'>('circle');

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'circle' ? 'grid' : 'circle');
  };

  const renderCircleView = () => (
    <motion.div
      className="relative w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <PhotoProvider>
        {memoizedImages.map((image, index) => {
          const isInnerCircle = index < memoizedImages.length / 2;
          const circleImages = isInnerCircle ? memoizedImages.length / 2 : memoizedImages.length;
          const startIndex = isInnerCircle ? 0 : memoizedImages.length / 2;
          const circleIndex = index - startIndex;
          
          const angle = (circleIndex / circleImages) * 2 * Math.PI;
          const radius = isInnerCircle ? 30 : 55;
          const x = 46 + radius * Math.cos(angle);
          const y = 46 + radius * Math.sin(angle);

          return (
            <PhotoView key={index} src={image.default.src}>
              <motion.div
                className="absolute w-14 h-14 cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(0)'
                }}
                whileHover={{ scale: 1.8, zIndex: 10 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 13,
                }}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-opacity-50 rounded flex items-center justify-center"
                    >
                      <p className="text-white text-xs">View</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Image
                  className="rounded-lg object-cover"
                  src={image.default}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={image.default.blurDataURL}
                />
              </motion.div>
            </PhotoView>
          );
        })}
      </PhotoProvider>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h3 className="text-xl font-bold text-black sm:text-2xl hidden sm:block">Years of Curated Works</h3>
      </div>
    </motion.div>
  );

  const renderGridView = () => (
    <motion.div
      className="flex flex-wrap justify-center gap-4 p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <PhotoProvider>
        {memoizedImages.map((image, index) => (
          <PhotoView key={index} src={image.default.src}>
            <motion.div
              className="relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 13,
              }}
            >
              <Image
                className="rounded-lg object-cover"
                src={image.default}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.default.blurDataURL}
              />
            </motion.div>
          </PhotoView>
        ))}
      </PhotoProvider>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Additional Works - Mohamed Sadiq</title>
        <meta
          name="description"
          content="A product designer who can code, focusing on Web 3, Open source products @DeveloperDAO, member of @Bulidspace and @Anti"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, product design, web3, nft"
        />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="A product designer" />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png"
        />
      </Head>

      <button
        onClick={toggleViewMode}
        className="mb-4 px-4 py-2 bg-white text-stone-950 rounded-full hover:bg-zinc-100 transition-colors duration-300 border-zinc-100 border border-solid shadow-lg"
      >
        Switch to {viewMode === 'circle' ? 'Grid' : 'Circle'} View
      </button>

      <AnimatePresence mode="wait">
        {viewMode === 'circle' ? renderCircleView() : renderGridView()}
      </AnimatePresence>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-2">Additional Works</h2>
        <p className="text-lg">A collection of my design projects</p>
      </div>
    </div>
  );
};

export default Home;