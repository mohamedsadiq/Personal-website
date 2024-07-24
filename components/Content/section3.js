import { motion } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";
const Section3 = () => {
    const MohamedSadiq = {
        initial: {
          opacity: 0,
          top: "20px",
          position:"relative"
        },
        animate:{
          opacity: 1,
          top: "0",
          position:"relative"
        }
      }
    
    return (
        <motion.div
          className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
          initial={MohamedSadiq.initial}
          animate={MohamedSadiq.animate}
          transition={{ delay: 0.2 }}
         >
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1>Things I’ve built</h1>
          </div>
          <div className="mainContent main_projects">
            <div className="hover_project padding-0">
              <Link className="mt-0" href="projects/daosspot" passHref>
                <h1 className="daos_spot_home"> DAOs Spot  <span className="arrowspan"> <span className="relative w-[68px] top-1 inline-block"><Image src={productOfTheWeek} alt="" /></span> ↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="mt-2" href="projects/developerdaofm" passHref>
                <h1 className=""> DeeveloperDAO FM<span className="arrowspan"> <span className="req">Top product PH </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <a className="mt-2" href="https://www.behance.net/gallery/134169935/Certified-Web3-Boy-NFTs" passHref>
                <h1 className=""> Web3 lover boy NFTs<span className="arrowspan"> <span className="req">NFTs collection </span>↗</span></h1>
              </a>
            </div>
          </div>
        </motion.div >
    )
}

export default Section3
