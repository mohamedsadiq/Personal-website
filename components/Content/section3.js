import { motion } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";

const Section3 = ({ MohamedSadiq, motionCtl, order }) => {
    // Removed hoverEffect object as we'll use CSS hover states instead

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
                <h1 className="text-sm leading-relaxed">Things I’ve built</h1>
            </div>
            <div className="main_projects [--underline-color:rgba(208,208,208,0.53)]">
            <motion.div className="group hover_project text-sm leading-relaxed">
                    <a  
                    className="mt-0 mb-8" href="projects/lightup"  rel="noopener noreferrer" >                  
                        <h1 
                            className="text-[#000] underline decoration-dotted decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current"
                        >
                            LightUp
                            <span className="arrowspan">
                            </span>
                        </h1>  
                        <p className="mt-0 text-[#484848] text-sm leading-6 ">AI Chrome extension - Peerlist Staff Pick, Top 9 AI Annotation Tool on SassHub.</p>             
                    </a>
                    {/* <span className="text-black float-right">arrow</span> */}
                </motion.div>
                <motion.div className="group hover_project text-base leading-relaxed">
                    <Link  
                    className="mt-0 mb-8" href="projects/daosspot" >                  
                        <h1 
                            className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current"
                        >
                            DAOs Spot
                            <span className="arrowspan">
                                <span className="relative w-[68px] top-1 inline-block">
                                    <Image src={productOfTheWeek} alt="" />
                                </span>  
                            </span>
                        </h1>       
                          <p className="text-sm leading-6 mt-0 text-[#484848]">A DAO discovery platform, Product Hunt #4 Product of the Week.</p>              
                    </Link>
                    {/* <span className="text-black float-right">arrow</span> */}
                </motion.div>
                <motion.div className="group hover_project text-base leading-relaxed">
                    <Link className="mt-2 mb-8" href="projects/developerdaofm" >
                        <h1 
                            className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current"
                        >
                            DeeveloperDAO FM
                            <span className="arrowspan">
                            </span>
                        </h1>
                         <p className="text-sm leading-6 mt-0 text-[#484848]"> A community tool featured as a top product on Product Hunt, reaching an audience of 700,000+.</p>             
                    </Link>
                </motion.div>
                <motion.div className="group hover_project text-base leading-relaxed">
                    <Link className="mt-2" href="/projects/web3boy" >
                        <h1 
                            className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current"
                        >
                            Web3 lover boy 
                            <span className="arrowspan">
                            </span>
                        </h1>
                          <p className="text-sm leading-6 mt-0 text-[#484848]">21 NTFs inspired by the web3 culture. </p>             
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Section3;
