import { motion } from "framer-motion";


const Section6 = ({ MohamedSadiq, motionCtl, order }) => {
    
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
        transition: { delay: 0.9},
      };

    return (
        <motion.div 
        className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
        {...motionProps}
        >
          <div className="mainContent  flex h-auto w-full md:w-auto flex-none">
            <h1 className="text-zinc-400">Available from Jun to Aug </h1>
          </div>
          <div className="mainContent " id="links_home">
            <a className="calltoation" href="mailto:hey@mosadiq.com">
              <button className="workbutton"> <span id="workbuttongreen"></span>Reach out via mail</button>
            </a>
          </div>
        </motion.div>
    )
}

export default Section6
