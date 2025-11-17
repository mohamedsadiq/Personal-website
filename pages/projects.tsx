import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

// images
import developerDao from "../img/Instagram story - 1.png"
import developerDaoFm from "../img/daofm.png"
import nftweb3 from "../img/nftweb3.png"
import daos from "../img/daosspot1.png"
import budget1 from "../img/ph11.png"

interface ProjectData {
  name: string;
  img?: string | StaticImageData;
  video?: string;
  description: string;
  tags: string;
  target: string;
  link: string;
  productHunt?: string | StaticImageData;
}

const Projects: React.FC = () => {
  // Sound hook
  

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My project gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
              className="text-base  mb-8 text-left text-[#616161]"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {data.map((item, index) => (
              <AnimatedSection 
                key={item.name} 
                className="w-full relative"
                delay={Math.floor(index/2) * 0.2}
              >
                <div className="border rounded-[24px] bg-white shadow-xl overflow-hidden transform h-full flex flex-col">
                  <Link href={item.link} passHref>
                    <div className="relative h-[28rem] md:h-[32rem] lg:h-[40rem]">
                      {item.video ? (
                        <video 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        >
                          <source src={item.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : item.img && (
                        <Image
                          src={item.img}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                          placeholder="blur"
                          className="transition-opacity duration-200 opacity-0"
                          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                        <h2 className="text-base sm:text-2xl  mb-2 text-[#fff]">{item.name}</h2>
                        <p className="text-xs sm:text-sm mb-4">{item.description}</p>
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          {item.tags}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

const data: ProjectData[] = [
  {
    name: "LightUp - 2024",
    video: "/lightup.mp4",
    description: "AI-Powered Annotations", 
    tags: "Product Design, AI",
    target: "_blink",
    link: "/projects/lightup",
    productHunt: budget1
  },
  {
    name: "DAOs Spot - 2023",
    img: daos,
    description: "Your gateway to decentralized communities.", 
    tags: "Product Design, Web3",
    target: "_blink",
    link: "/projects/daosspot",
    productHunt: budget1
  },
  {
    name: "DeveloperDAO FM - Jul 2022",
    img: developerDaoFm,
    description: "A place where you listin to muisc ...", 
    tags: "Product Design, JS, Web3",
    target: "_blink",
    link: "/projects/developerdaofm",
    productHunt: ""
  },
  {
    name: "DeveloperDAO - Jul 2022",
    img: developerDao,
    description: "In a mission to accelerate the education and impact of a new wave of web3 builders.", 
    tags: "Product Design, Web3",
    target: "_blink",
    link: "/projects/developerdao",
    productHunt: ""
  },
  // { 
  //   name: "Web 3 Lover Boy - Jan 2022",
  //   img: nftweb3,
  //   description: "CWB is a project inspired by Dever..",  
  //   tags: "Product Design, Solidity, Web3",
  //   target: "_blink",
  //   link: "/projects/web3boy",
  //   productHunt: ""
  // },
];

export default Projects;