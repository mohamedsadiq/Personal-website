import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import useSound from 'use-sound';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

// images
import developerDao from "../img/Instagram story - 1.png"
import developerDaoFm from "../img/daofm.png"
import nftweb3 from "../img/nftweb3.png"
import daos from "../img/daosspot1.png"

import budget1 from "../img/ph11.png"

interface ProjectData {
  name: string;
  img: string | StaticImageData;
  description: string;
  tags: string;
  target: string;
  link: string;
  productHunt?: string | StaticImageData;
}

const Projects: React.FC = () => {
  // Sound hook
  const [play] = useSound("/sound.mp3");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My project gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            {data.map((item, index) => (
              <div key={item.name} className="w-full max-w-[32rem] mb-8 relative">
                <motion.div   
                  className="bg-white rounded-3xl shadow-xl overflow-hidden transform"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Link href={item.link} passHref>
                    <div className="relative h-[36rem]">
                      <Image
                        src={item.img}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.name}</h2>
                        <p className="text-xs sm:text-sm mb-4">{item.description}</p>
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          {item.tags}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
                {index < data.length - 1 && (
                  <div className="w-1 h-16 bg-gray-300 absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
                )}
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
    name: "DAOs Spot - 2023",
    img: daos,
    description: "Your gateway to decentralized communities.", 
    tags: "Product Design, Web3",
    target: "_blink",
    link: "projects/daosspot",
    productHunt: budget1
  },
  {
    name: "DeveloperDAO Website - Aug  2022",
    img: developerDao,
    description: "DeveloperDAO's website", 
    tags: "Product Design, Web3",
    target: "_blink",
    link: "https://www.developerdao.com/",
    productHunt: ""
  },
  {
    name: "DeveloperDAO FM - Jul 2022",
    img: developerDaoFm,
    description: "A place where you listin to muisc ...", 
    tags: "Product Design, JS, Web3",
    target: "_blink",
    link: "projects/developerdaofm",
    productHunt: ""
  },
  { 
    name: "Web 3 Lover Boy - Jan 2022",
    img: nftweb3,
    description: "CWB is a project inspired by Dever..",  
    tags: "Product Design, Solidity, Web3",
    target: "_blink",
    link: "/projects/certifiedWeb3Boy",
    productHunt: ""
  },
];

export default Projects;
