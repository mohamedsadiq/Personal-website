import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Img from "../../img/trustwallet.png";
import Img2 from "../../img/web3cons.png";
import Img3 from "../../img/Cards design.png";
import Img4 from "../../img/watchcrypto.png";

const Section7 = ({ MohamedSadiq, motionCtl, order }) => {

    const hoverState = {
        stack: {
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 50 
            },
            rotate: 0,
            x: 0,
            y: 0
        },
        normal: {
            
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 50 
            },
            x: 0,
            y: 0,
            rotate: 0
        }
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
        transition: { delay: 0.7 },
      };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
            {...motionProps}
        >
            <div className="text-zinc-400">
                <h1 className="text-sm leading-6 text-zinc-500 dark:text-[#b2b2b2]">Years of Curated Works</h1>
            </div>
            <div id="links_home">
                <Link href="/additionalWorks" aria-label="Additional Works" className="flex">
                    <motion.div
                        className="flex gap-x-2.5 w-80 padding-0 relative sm:w-30"
                        whileHover="stack"
                        initial="normal"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                        }}
                    >
                        <motion.div
                            initial={{
                                x: 30,
                                rotate: -10
                            }}
                            variants={hoverState}
                        >
                            <Image quality={100}
                                placeholder="blur" className="rounded-lg" width={100} height={100} alt="" src={Img2} />
                        </motion.div>
                        <motion.div initial={{
                            y: -10,
                            zIndex: 11,
                        }} variants={hoverState}>
                            <Image quality={100}
                                placeholder="blur" className="rounded-lg" width={115} height={100} alt="" src={Img3} />
                        </motion.div>
                        <motion.div
                            initial={{
                                x: -30,
                                rotate: 10
                            }}
                            variants={hoverState}>
                            <Image quality={100}
                                placeholder="blur" className="rounded-lg" width={100} height={100} alt="" src={Img4} />
                        </motion.div>
                     
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Section7;
