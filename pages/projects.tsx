import Image from 'next/image'
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import SEO from '../components/SEO';
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

  useEffect(() => {
    const preloadedVideos = data
      .filter((item) => item.video)
      .reduce<Record<string, boolean>>((acc, item) => {
        acc[item.name] = true;
        return acc;
      }, {});

    setLoadedMedia((prev) => ({ ...preloadedVideos, ...prev }));
  }, []);

  const handleMediaLoaded = (name: string) => {
    setLoadedMedia((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
  };

  const getCardLayoutClasses = (index: number): string => {
    if (index === 0) {
      return 'col-span-1 md:col-span-12';
    }

    if (index === 1) {
      return 'col-span-1 md:col-span-7';
    }

    if (index === 2) {
      return 'col-span-1 md:col-span-5';
    }

    return index % 2 === 1
      ? 'col-span-1 md:col-span-7'
      : 'col-span-1 md:col-span-5';
  };

  return (
    <>
      <SEO
        title="Projects"
        description="Explore my design and engineering projects including LightUp, DAOs Spot, and DeveloperDAO. Web3, AI, and product design work."
        path="/projects"
      />
      <main className="min-h-screen p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
              className="text-base  mb-8 text-left text-[#616161] dark:text-[#fff]"
              {...headingMotionProps}
            >
              Projects
            </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {data.map((item, index) => (
              <div key={item.name} className={getCardLayoutClasses(index)}>
                <AnimatedSection 
                  className="w-full relative"
                  delay={Math.floor(index/2) * 0.2}
                  order={index}
                >
                {(() => {
                  const isLoaded = loadedMedia[item.name];
                  const tagList = item.tags.split(',').map((tag) => tag.trim()).filter(Boolean);

                  return (
                    <div className="border border-[#e5e5e5] rounded-[24px] bg-white shadow-xl overflow-hidden transform h-full flex flex-col dark:border-[#2b2b2b] dark:bg-[#111111] dark:shadow-none">
                      <Link href={item.link} passHref>
                        <div className="relative h-[20rem] md:h-[24rem] lg:h-[28rem]">
                          {item.video ? (
                            <video 
                              className="w-full h-full object-cover"
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              onLoadedMetadata={() => handleMediaLoaded(item.name)}
                              onCanPlay={() => handleMediaLoaded(item.name)}
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
                          {!item.video && (
                            <motion.div
                              className="absolute inset-0 z-10 rounded-[24px] overflow-hidden"
                              initial={{ opacity: 1 }}
                              animate={{ opacity: isLoaded ? 0 : 1 }}
                              transition={{ duration: 0.3 }}
                              style={{ pointerEvents: 'none' }}
                            >
                              <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-[#1c1c1c]" />
                            </motion.div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-20 pointer-events-none" />
                          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 z-30">
                            <div className="rounded-2xl bg-white/15 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-3 sm:p-4 space-y-2">
                              <h2 className="text-base sm:text-xl font-semibold text-white">{item.name}</h2>
                              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                                {item.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {tagList.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[0.7rem] sm:text-xs px-2 py-1 rounded-full bg-white/20 text-white border border-white/10"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })()}
                </AnimatedSection>
              </div>
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
    video: "/bulitVidoes/daosspot.mp4",
    img: daos,
    description: "Your gateway to decentralized communities.", 
    tags: "Product Design, Web3",
    target: "_blink",
    link: "/projects/daosspot",
    productHunt: budget1
  },
  {
    name: "DeveloperDAO FM - Jul 2022",
    video: "/bulitVidoes/devfm.mp4",
    img: developerDaoFm,
    description: "A place to listni to music and increass awwearnce about the DAO", 
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
  { 
    name: "Web3 Lover Boy - Jan 2022",
    video: "/web3loverboy.mp4",
    img: nftweb3,
    description: "Certified Web3 Boy NFT project inspired by web3 culture.",  
    tags: "Product Design, Solidity, Web3",
    target: "_blink",
    link: "/projects/web3boy",
    productHunt: ""
  },
];

export default Projects;