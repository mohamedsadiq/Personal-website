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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container container_work">
          <div className="inner_container"> 
            <h1>Projects</h1>
            <p>Projects I designed and built using Figma, React, Solidity, and more.</p>
            <div className="">
              {data.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="blocks"
                  initial={{ opacity: 0, top: "20px", position: "relative" }}
                  animate={{ opacity: 1, top: "0", position: "relative" }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Link href={item.link} passHref>
                    <Image
                      src={item.img}
                      alt={item.name}
                      objectFit='cover'
                      layout='fill'
                      objectPosition="center"
                      quality={100}
                      placeholder="blur"
                    />
                    <div className="overlay"> 
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      {/* <span>{item.tags}</span> */}
                    </div>  
                  </Link>       
                </motion.div>      
              ))}
            </div>
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
