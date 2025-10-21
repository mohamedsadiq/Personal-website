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
          className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
          {...motionProps}
         >
          <div className="text-zinc-400">
            <h1 className="text-base leading-relaxed">Latest Activity</h1>
          </div>
          <div>
            <div className="hover_project latest_activity_project">
              <a href="https://x.com/colderoshay/status/1824092686405820431" target="_blink">
               <Image
                  src="/lightupper.jpeg"
                  width={400}
                  height={400}
               ></Image>
               
                <h1 className="h_m text-[#000] text-base leading-relaxed mt-4"> Staff-picked projects of the day </h1>
                <span className="text-[#8c8c8c] text-base leading-relaxed">A way to display my work.</span>
              </a>
            </div>
          </div>
        </motion.div>
    )
}

export default Section5
