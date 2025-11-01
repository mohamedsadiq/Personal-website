import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useEffect, useState } from 'react';

// Import images
import img1 from "../img/photos/1.jpg"
import img2 from "../img/photos/2.jpg"
import img3 from "../img/photos/3.jpg"
import img4 from "../img/photos/4.jpg"
import img5 from "../img/photos/5.jpg"
import img6 from "../img/photos/6.jpg"
import img7 from "../img/photos/7.jpg"
import img8 from "../img/photos/8.jpg"
import img9 from "../img/photos/9.jpg"
import img10 from "../img/photos/10.jpg"
import img11 from "../img/photos/11.jpg"  // Add this line
import img12 from "../img/photos/12.jpg"  // Add this line

interface ImageData {
  key: string;
  img: StaticImageData;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
};

const itemVariant = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
} as const;

const Photo: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const imageData: ImageData[] = [
    { key: "1", img: img1 },
    { key: "2", img: img2 },
    { key: "3", img: img3 },
    { key: "4", img: img8 },
    { key: "5", img: img4 },
    { key: "6", img: img5 },
    { key: "7", img: img6 },
    { key: "8", img: img7 },
    { key: "9", img: img9 },
    { key: "10", img: img10 },
    { key: "11", img: img11 },
    { key: "12", img: img12 } 
  ];

  const handleDownload = (src: string, key: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `photo_${key}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>Photos</title>
          <meta name="description" content="A collection of beautiful photographs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className="min-h-screen py-8 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto mb-20">
            <motion.h1 
              className="text-base  mb-8 text-left text-[#616161]"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Photo Gallery
            </motion.h1>
            
            <PhotoProvider>
              <motion.div 
                className="columns-1 sm:columns-2 lg:columns-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {imageData.map((item) => (
                  <motion.div
                    key={item.key}
                    className="relative group overflow-hidden rounded-2xl shadow-lg mb-6 break-inside-avoid"
                    variants={itemVariant}
                    whileHover="hover"
                    layoutId={`photo-${item.key}`}
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    <PhotoView src={item.img.src}>
                      <div className="relative w-full cursor-zoom-in" style={{ paddingBottom: '100%' }}>
                        <Image
                          src={item.img}
                          alt={`Photo ${item.key}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          quality={85}
                          placeholder={item.img.blurDataURL ? 'blur' : 'empty'}
                          blurDataURL={item.img.blurDataURL}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      </div>
                    </PhotoView>
                    
                    <motion.div 
                      className="absolute bottom-4 right-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full text-sm font-medium text-[#737373] hover:text-black transition-colors duration-200 group-hover:gap-3 border border-white/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(item.img.src, item.key);
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          backgroundColor: "rgba(255, 255, 255, 0.8)"
                        }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 400,
                          damping: 17
                        }}
                        aria-label="Download image"
                      >
                        {/* <span className="font-medium">Download</span> */}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 transform group-hover:translate-y-0.5 transition-transform" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </PhotoProvider>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

export default Photo
