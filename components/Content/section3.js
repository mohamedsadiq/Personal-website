import { motion } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";
import peerlist from "../../public/staff-pick-light.png";
import productHunt5 from "../../public/Optimized SVG 1.svg";
import sasshub from "../../public/Saashub Logo.png";

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
            <motion.div className="group hover_project">
                <Link className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-0 mb-8 mt-[-8px]" href="/projects/lightup" rel="noopener noreferrer">
                    <div>
                        <h1 className="text-[#000] text-sm leading-6 underline decoration-dotted decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current inline-flex items-center">
                            LightUp
                            <span className="flex items-center gap-1 ml-2">
                                <span className="w-[40px] inline-block">
                                    <Image src={peerlist} alt="" />
                                </span>
                                <span className="w-[25px] inline-block">
                                    <Image src={sasshub} alt="" />
                                </span>
                            </span>
                        </h1>
                    </div>
                    <p className="text-[#484848] text-sm leading-6 m-0">AI Chrome extension - Peerlist Staff Pick, Top 9 AI Annotation Tool on SassHub.</p>
                </Link>
            </motion.div>

                <motion.div className="group hover_project">
                    <Link className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-0 mb-8" href="/projects/daosspot">
                        <div>
                            <div className="flex items-center">
                                <h1 className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current">
                                    DAOs Spot
                                </h1>
                                <span className="ml-2">
                                    <Image src={productOfTheWeek} alt="" className="w-[68px]" />
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-6 text-[#484848] m-0">A DAO discovery platform, Product Hunt #4 Product of the Week.</p>
                    </Link>
                </motion.div>
                <motion.div className="group hover_project">
                    <Link className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-2 mb-8" href="/projects/developerdaofm">
                        <div>
                            <div className="flex items-center">
                                <h1 className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current">
                                    DeveloperDAO FM
                                </h1>
                                <span className="ml-2">
                                    <Image src={productHunt5} alt="" className="w-[68px]" />
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-6 text-[#484848] m-0">A community tool featured as a top product on Product Hunt, reaching an audience of 700,000+.</p>
                    </Link>
                </motion.div>
                
                <motion.div className="group hover_project">
                    <Link className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-2 mb-8" href="/projects/developerdao">
                        <div>
                            <h1 className="text-sm leading-6 text-[#000] decoration-dotted underline decoration-[var(--underline-color)] underline-offset-2 transition-colors duration-200 group-hover:decoration-current inline-flex items-center">
                                DeveloperDAO Official Website
                            </h1>
                        </div>
                        <p className="text-sm leading-6 text-[#484848] m-0">Accelerating the education and impact of a new wave of web3 builders.</p>
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
