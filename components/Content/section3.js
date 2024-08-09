import { motion } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";

const Section3 = ({ MohamedSadiq }) => {
    const hoverEffect = {
     
    };

    return (
        <motion.div
            className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
            initial={MohamedSadiq.initial}
            animate={MohamedSadiq.animate}
            transition={{ delay: 0.3 }}
        >
            <div className="mainContent flex h-auto w-full md:w-44 flex-none">
                <h1 className="text-[#000]">Things I’ve built</h1>
            </div>
            <div className="mainContent main_projects">
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link className="mt-0" href="projects/daosspot" >
                        <h1 className="daos_spot_home text-[#000]">
                            DAOs Spot
                            <span className="arrowspan">
                                <span className="relative w-[68px] top-1 inline-block">
                                    <Image src={productOfTheWeek} alt="" />
                                </span>
                               
                            </span>
                        </h1>
                    </Link>
                </motion.div>
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link className="mt-2" href="projects/developerdaofm" >
                        <h1 className="text-[#000]">
                            DeeveloperDAO FM
                            <span className="arrowspan">
                                <span className="req text-zinc-500">Top product PH </span>
                               
                            </span>
                        </h1>
                    </Link>
                </motion.div>
                <motion.div className="hover_project padding-0" whileHover={hoverEffect}>
                    <Link className="mt-2" href="/projects/certifiedWeb3Boy" >
                        <h1 className="text-[#000]">
                            Web3 lover boy 
                            <span className="arrowspan">
                                <span className="req text-zinc-500">NFTs collection </span>
                            </span>
                        </h1>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Section3;
