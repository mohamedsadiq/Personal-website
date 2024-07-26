import { motion } from "framer-motion";
import Image from "next/image";

import Img from "../../img/trustwallet.png"
import Img2 from "../../img/web3cons.png"
import Img3 from "../../img/Cards design.png"
import Img4 from "../../img/watchcrypto.png"



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
    }

    return (

        <motion.div
            className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
            initial={MohamedSadiq.initial}
            animate={MohamedSadiq.animate}
            transition={{ delay: 0.6 }}
        >
            <div className="mainContent  flex h-auto w-full md:w-auto flex-none">
                <h1 className="">Additional Works</h1>
            </div>
            <div className="mainContent " id="links_home">
                <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink">
                    <div className="flex gap-x-2.5 overflow-x-hidden overflow-y-hidden w-80">
                        <div className=""> <Image className="rounded-lg" width={100} height={100} alt="" src={Img} /></div>
                        <div className=""> <Image className="rounded-lg" width={100} height={100} alt="" src={Img2} /></div>
                        <div className=""> <Image className="rounded-lg" width={115} height={100} alt="" src={Img3} /></div>
                        <div className=""> <Image className="rounded-lg" width={100} height={100} alt="" src={Img4} /></div>
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Section7
