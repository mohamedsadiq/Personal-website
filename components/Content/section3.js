import { motion } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";

const Section3 = ({ MohamedSadiq, motionCtl, order }) => {
    const hoverEffect = {
     
    };

    const IconAnimation = {
        initial: {
          scale: 0.8,
          transformOrigin: "50% 50%",
          filter: "blur(40px)",
        },
        animate: {
          scale: 1,
          transformOrigin: "50% 50%",
          filter: "blur(0px)",
        },
        hover: {
          x:2,
          scale: 1.2,
          transformOrigin: "50% 50%",
        },
      };

    const motionProps = motionCtl
    ? {
        variants: motionCtl.variants,
        initial: "hidden",
        animate: "visible",
        transition: motionCtl.getTransition(order),
      }
    : {
        initial: MohamedSadiq.initial,
        animate: MohamedSadiq.animate,
        transition: { delay: 0.4 },
      };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
            {...motionProps}
        >
            <div className="text-zinc-400">
                <h1>Things I’ve built</h1>
            </div>
            <div className="main_projects">
            <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <a  
                    className="mt-0 mb-4" href="projects/lightup"  rel="noopener noreferrer" >                  
                        <h1 className="daos_spot_home text-[#000] underline">
                            LightUp
                            <span className="arrowspan">
                            </span>
                        </h1>  
                        <p className=" text-[#484848]">AI Chrome extension - Peerlist Staff Pick, Top 9 AI Annotation Tool on SassHub.</p>             
                    </a>
                    {/* <span className="text-black float-right">arrow</span> */}
                </motion.div>
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link  
                    className="mt-0 mb-4" href="projects/daosspot" >                  
                        <h1 className="daos_spot_home text-[#000] underline">
                            DAOs Spot
                            <span className="arrowspan">
                                <span className="relative w-[68px] top-1 inline-block">
                                    <Image src={productOfTheWeek} alt="" />
                                </span>  
                            </span>
                        </h1>       
                          <p>A DAO discovery platform, Product Hunt #4 Product of the Week.</p>              
                    </Link>
                    {/* <span className="text-black float-right">arrow</span> */}
                </motion.div>
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link className="mt-2 mb-4" href="projects/developerdaofm" >
                        <h1 className="text-[#000] underline">
                            DeeveloperDAO FM
                            <span className="arrowspan">
                            </span>
                        </h1>
                         <p> A community tool featured as a top product on Product Hunt, reaching an audience of 700,000+.</p>             
                    </Link>
                </motion.div>
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link className="mt-2" href="/projects/web3boy" >
                        <h1 className="text-[#000] underline">
                            Web3 lover boy 
                            <span className="arrowspan">
                            </span>
                        </h1>
                          <p>21 NTFs inspired by the web3 culture. </p>             
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Section3;
