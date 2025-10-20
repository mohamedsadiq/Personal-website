import { motion } from "framer-motion";
import Image from "next/image";


const Section5 = ({MohamedSadiq, motionCtl, order}) => {
 
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
        transition: { delay: 0.6},
      };

    return (
        <motion.div
          className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
          {...motionProps}
         >
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1 className="text-zinc-400">Latest Activity</h1>
          </div>
          <div className="mainContent ">
            <div className="hover_project latest_activity_project">
              <a href="https://x.com/colderoshay/status/1824092686405820431" target="_blink">
               <Image
                  src="/lightupper.jpeg"
                  width={400}
                  height={400}
               ></Image>
               
                <h1 className="h_m text-[#000]"> Staff-picked projects of the day </h1>
                <span className="text-[#8c8c8c]">A way to display my work.</span>
              </a>
            </div>
          </div>
        </motion.div>
    )
}

export default Section5
