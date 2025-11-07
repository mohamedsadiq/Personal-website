import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";
import peerlist from "../../public/staff-pick-light.png";
import productHunt5 from "../../public/Optimized SVG 1.svg";
import sasshub from "../../public/Saashub Logo.png";
import { useState } from "react";

const Section3 = ({ MohamedSadiq, motionCtl, order }) => {
    const [hoveredId, setHoveredId] = useState(null);

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
            <motion.div 
                className="group hover_project relative"
                onMouseEnter={() => setHoveredId('lightup')}
                onMouseLeave={() => setHoveredId(null)}
            >
                <AnimatePresence>
                    {hoveredId === 'lightup' && (
                        <motion.div 
                            className="absolute inset-0 bg-white/5 rounded-md -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>
                <Link 
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-0 mb-8 mt-[-8px]" 
                    href="/projects/lightup" 
                    rel="noopener noreferrer"
                >
                    <div>
                        <motion.h1 
    className="text-[#000] text-sm leading-6 underline decoration-dotted decoration-[var(--underline-color)] underline-offset-2 inline-flex items-center"
    animate={{
        textDecorationColor: hoveredId === 'lightup' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)',
        filter: hoveredId && hoveredId !== 'lightup' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    LightUp
    <motion.span 
        className="flex items-center gap-1 ml-2"
        animate={{
            filter: hoveredId && hoveredId !== 'lightup' ? 'blur(2px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.2 }}
    >
        <span className="w-[40px] inline-block">
            <Image src={peerlist} alt="" />
        </span>
        <span className="w-[25px] inline-block">
            <Image src={sasshub} alt="" />
        </span>
    </motion.span>
</motion.h1>
                    </div>
                    <motion.p 
    className="text-[#484848] text-sm leading-6 m-0"
    animate={{
        filter: hoveredId && hoveredId !== 'lightup' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    AI Chrome extension - Peerlist Staff Pick, Top 9 AI Annotation Tool on SassHub.
</motion.p>
                </Link>
            </motion.div>

                <motion.div 
                    className="group hover_project relative"
                    onMouseEnter={() => setHoveredId('daosspot')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <AnimatePresence>
                        {hoveredId === 'daosspot' && (
                            <motion.div 
                                className="absolute inset-0 bg-white/5 rounded-md -z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                    <Link 
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-0 mb-8" 
                        href="/projects/daosspot"
                    >
                        <div>
                            <div className="flex items-center">
                                <motion.h1 
    className="text-sm leading-6 text-[#000] decoration-dotted underline underline-offset-2"
    animate={{
        textDecorationColor: hoveredId === 'daosspot' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)',
        filter: hoveredId && hoveredId !== 'daosspot' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    DAOs Spot
</motion.h1>
                                <span className="ml-2">
                                    <Image src={productOfTheWeek} alt="" className="w-[68px]" />
                                </span>
                            </div>
                        </div>
                        <motion.p 
    className="text-sm leading-6 text-[#484848] m-0"
    animate={{
        filter: hoveredId && hoveredId !== 'daosspot' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    A DAO discovery platform, Product Hunt #4 Product of the Week.
</motion.p>
                    </Link>
                </motion.div>
                <motion.div 
                    className="group hover_project relative"
                    onMouseEnter={() => setHoveredId('developerdaofm')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <AnimatePresence>
                        {hoveredId === 'developerdaofm' && (
                            <motion.div 
                                className="absolute inset-0 bg-white/5 rounded-md -z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                    <Link 
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-2 mb-8" 
                        href="/projects/developerdaofm"
                    >
                        <div>
                            <div className="flex items-center">
                                <motion.h1 
    className="text-sm leading-6 text-[#000] decoration-dotted underline underline-offset-2"
    animate={{
        textDecorationColor: hoveredId === 'developerdaofm' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)',
        filter: hoveredId && hoveredId !== 'developerdaofm' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    DeveloperDAO FM
</motion.h1>
                                <span className="ml-2">
                                    <Image src={productHunt5} alt="" className="w-[68px]" />
                                </span>
                            </div>
                        </div>
                        <motion.p 
    className="text-sm leading-6 text-[#484848] m-0"
    animate={{
        filter: hoveredId && hoveredId !== 'developerdaofm' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    A community tool featured as a top product on Product Hunt, reaching an audience of 700,000+.
</motion.p>
                    </Link>
                </motion.div>
                
                <motion.div 
                    className="group hover_project relative"
                    onMouseEnter={() => setHoveredId('developerdao')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <AnimatePresence>
                        {hoveredId === 'developerdao' && (
                            <motion.div 
                                className="absolute inset-0 bg-white/5 rounded-md -z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                    <Link 
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start mt-2 mb-8" 
                        href="/projects/developerdao"
                    >
                        <div>
                            <motion.h1 
    className="text-sm leading-6 text-[#000] decoration-dotted underline underline-offset-2 inline-flex items-center"
    animate={{
        textDecorationColor: hoveredId === 'developerdao' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)',
        filter: hoveredId && hoveredId !== 'developerdao' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    DeveloperDAO Official Website
</motion.h1>
                        </div>
                        <motion.p 
    className="text-sm leading-6 text-[#484848] m-0"
    animate={{
        filter: hoveredId && hoveredId !== 'developerdao' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    Accelerating the education and impact of a new wave of web3 builders.
</motion.p>
                    </Link>
                </motion.div>
                
                <motion.div 
                    className="group hover_project text-base leading-relaxed relative"
                    onMouseEnter={() => setHoveredId('web3boy')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <AnimatePresence>
                        {hoveredId === 'web3boy' && (
                            <motion.div 
                                className="absolute inset-0 bg-white/5 rounded-md -z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                    <Link 
                        className="mt-2 block" 
                        href="/projects/web3boy"
                    >
                        <motion.h1 
    className="text-sm leading-6 text-[#000] decoration-dotted underline underline-offset-2"
    animate={{
        textDecorationColor: hoveredId === 'web3boy' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)',
        filter: hoveredId && hoveredId !== 'web3boy' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    Web3 lover boy 
    <span className="arrowspan">
    </span>
</motion.h1>
<motion.p 
    className="text-sm leading-6 mt-0 text-[#484848]"
    animate={{
        filter: hoveredId && hoveredId !== 'web3boy' ? 'blur(2px)' : 'blur(0px)'
    }}
    transition={{ duration: 0.2 }}
>
    21 NTFs inspired by the web3 culture.
</motion.p>             
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Section3;
