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
        className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
        {...motionProps}
        >
          <div className="text-zinc-400">
            <h1 className="text-base leading-relaxed">Available from Jun to Aug </h1>
          </div>
          <div id="links_home">
            <a className="calltoation" href="mailto:hey@mosadiq.com">
              <button className="workbutton leading-relaxed"> <span id="workbuttongreen"></span>Reach out via mail</button>
            </a>
          </div>
        </motion.div>
    )
}

export default Section6
