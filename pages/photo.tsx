import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { motion } from "framer-motion";

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

interface ImageData {
  key: string;
  img: StaticImageData;
  link: string;
}

const Photo: React.FC = () => {
  const imageData: ImageData[] = [
    { key: "1", img: img1, link: "https://unsplash.com/photos/ypBIeIxfiOo" },
    { key: "2", img: img2, link: "https://unsplash.com/photos/FAgF3eTbZ_4" },
    { key: "3", img: img3, link: "https://unsplash.com/photos/SYYn1v0WkNI" },
    { key: "4", img: img8, link: "https://unsplash.com/photos/EXhpMHDc-Sg" },
    { key: "5", img: img4, link: "https://unsplash.com/photos/wredO5b0nY8" },
    { key: "6", img: img5, link: "https://unsplash.com/photos/xeOF6Xy4z8U" },
    { key: "7", img: img6, link: "https://unsplash.com/photos/YnzWKAQ6pSg" },
    { key: "8", img: img7, link: "https://unsplash.com/photos/-yyYxR9bZRg" },
    { key: "9", img: img9, link: "https://unsplash.com/photos/-lNTFZ9SzAc" }
  ];

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
            <div className='mItv1'>
              {[0, 1].map((columnIndex) => (
                <div key={columnIndex} className='ripi6'>
                  {imageData.filter((_, index) => index % 2 === columnIndex).map((item) => (
                    <motion.a
                      key={item.key}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        className='border_radius'
                        src={item.img}
                        alt={`Photo ${item.key}`}
                        quality={75}
                        placeholder="blur"
                        layout="responsive"
                      />
                    </motion.a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Photo
