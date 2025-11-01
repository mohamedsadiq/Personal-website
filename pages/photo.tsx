import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariant = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
};

const Photo: React.FC = () => {
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

  return (
    <>
      <Head>
        <title>Photos</title>
        <meta name="description" content="A collection of beautiful photographs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className='inner_container'>
            <PhotoProvider>
              <motion.div 
                className='mItv1'
                variants={container}
                initial="hidden"
                animate="show"
                style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                {[0, 1].map((columnIndex) => (
                  <div key={columnIndex} className='ripi6'>
                    {imageData
                      .filter((_, index) => index % 2 === columnIndex)
                      .map((item, itemIndex) => (
                      <motion.div
                        key={item.key}
                        variants={itemVariant}
                        whileHover={{ 
                          scale: 1.01,
                          transition: { duration: 0.2 }
                        }}
                        className="relative"
                      >
                        <PhotoView src={item.img.src}>
                          <div className="relative w-full aspect-square">
                            <Image
                              src={item.img}
                              alt={`Photo ${item.key}`}
                              fill
                              sizes="(max-width: 768px) 50vw, 33vw"
                              className="border_radius object-cover"
                              quality={75}
                              placeholder={item.img.blurDataURL ? 'blur' : 'empty'}
                              blurDataURL={item.img.blurDataURL}
                            />
                          </div>
                        </PhotoView>
                        <motion.button
                          className="absolute bottom-2 right-2 bg-white bg-opacity-70 p-2 rounded-full"
                          onClick={() => handleDownload(item.img.src, item.key)}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </PhotoProvider>
          </div>
        </div>
      </main>
    </>
  )
}

export default Photo
