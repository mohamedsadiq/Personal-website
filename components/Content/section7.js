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
        // stack: {
        //     zIndex: 1,
        //     scale: 0.97,
        //     y: -0,
        //     transition: {
        //         type: "spring",
        //         stiffness: 300
        //     }
        // },
        // normal: {
        //     zIndex: 0,
        //     scale: 1,
        //     y: 0,
        //     transition: {
        //         type: "spring",
        //         stiffness: 300
        //     }
        // }
    };

    return (
        <motion.div
            className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
            initial={MohamedSadiq.initial}
            animate={MohamedSadiq.animate}
            transition={{ delay: 0.6 }}
        >
            <div className="mainContent flex h-auto w-full md:w-auto flex-none">
                <h1 className="">Additional Works</h1>
            </div>
            <div className="mainContent" id="links_home">
                <Link href="/additionalWorks" target="_blank" aria-label="Additional Works" className="flex ml-6">
                    <motion.div
                        className="flex gap-x-2.5 overflow-x-hidden overflow-y-hidden w-80"
                        whileHover="stack"
                        initial="normal"
                    >   
                        <motion.div variants={hoverState}>
                            <Image quality={100}
                                placeholder="blur" className="rounded-lg" width={100} height={100} alt="" src={Img2} />
                        </motion.div>
                        <motion.div variants={hoverState}>
                            <Image quality={100}
                                placeholder="blur" className="rounded-lg" width={115} height={100} alt="" src={Img3} />
                        </motion.div>
                        <motion.div variants={hoverState}>
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
