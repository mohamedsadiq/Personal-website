import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { getSharedMotionProps } from '../utils/motionConfig';

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
  const headingMotionProps = getSharedMotionProps(0);
  const [loadedMedia, setLoadedMedia] = useState<Record<string, boolean>>({});

  const handleMediaLoaded = (name: string) => {
    setLoadedMedia((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
  };

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
              className="text-base  mb-8 text-left text-[#616161] dark:text-[#fff]"
              {...headingMotionProps}
            >
              Projects
            </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {data.map((item, index) => (
              <AnimatedSection 
                key={item.name} 
                className="w-full relative"
                delay={Math.floor(index/2) * 0.2}
                order={index}
              >
                {(() => {
                  const isLoaded = loadedMedia[item.name];
                  return (
                <div className="border border-[#e5e5e5] rounded-[24px] bg-white shadow-xl overflow-hidden transform h-full flex flex-col dark:border-[#2b2b2b] dark:bg-[#111111] dark:shadow-none">
                  <Link href={item.link} passHref>
                    <div className="relative h-[28rem] md:h-[32rem] lg:h-[40rem]">
                      {item.video ? (
                        <video 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          onLoadedData={() => handleMediaLoaded(item.name)}
                        >
                          <source src={item.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : item.img && (
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          loading="lazy"
                          placeholder="blur"
                          className="object-cover transition-transform duration-300"
                          onLoadingComplete={() => handleMediaLoaded(item.name)}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 z-10 rounded-[24px] overflow-hidden"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isLoaded ? 0 : 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ pointerEvents: 'none' }}
                      >
                        <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-[#1c1c1c]" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-20 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white z-30">
                        <h2 className="text-base sm:text-2xl  mb-2 text-[#fff]">{item.name}</h2>
                        <p className="text-xs sm:text-sm mb-4">{item.description}</p>
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          {item.tags}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                  );
                })()}
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