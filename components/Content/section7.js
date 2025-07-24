import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Img from "../../img/trustwallet.png";
import Img2 from "../../img/web3cons.png";
import Img3 from "../../img/Cards design.png";
import Img4 from "../../img/watchcrypto.png";

const Section7 = () => {
    const MohamedSadiq = {
        initial: {
            opacity: 0,
            top: "20px",
            position: "relative"
        },
        animate: {
            opacity: 1,
            top: "0",
            position: "relative"
        }
    };

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

    return (
        <motion.div
            className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
            initial={MohamedSadiq.initial}
            animate={MohamedSadiq.animate}
            transition={{ delay: 0.7 }}
        >
            <div className="mainContent flex h-auto w-full md:w-auto flex-none">
                <h1 className="text-zinc-400">Years of Curated Works</h1>
            </div>
            <div className="mainContent" id="links_home">
                <Link href="/additionalWorks" aria-label="Additional Works" className="flex">
                    <motion.div
                        className="flex gap-x-2.5 w-80 padding-0 relative"
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
                        <motion.div
                            className="absolute pointer-events-none text-white text-sm"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                left: 'var(--mouse-x)',
                                top: 'var(--mouse-y)',
                                transform: 'translate(-50%, -50%)',
                                color: 'black'
                            }}
                        >
                            Explore
                        </motion.div>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Section7;
