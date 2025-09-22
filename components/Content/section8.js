import { motion } from "framer-motion";


const Section8 = ({ MohamedSadiq, motionCtl, order }) => {
    
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
        transition: { delay: 0.8},
      };

    return (
        <motion.div 
        className="flex flex-col md:flex-row gap-x-36 gap-y-6 md:gap-y-0"
        {...motionProps}
        >
          <div className="mainContent  flex h-auto w-full md:w-auto flex-none">
            <h1 className="text-zinc-400">Mentions</h1>
          </div>
          <div className="mainContent " id="links_home">
           <ul>
             <li className="text-black block">Today in Design<span className="arrowspan text-zinc-400"> - Newsletter </span></li>
             <li className="text-black block">Product Hunt<span className="arrowspan text-zinc-400"> - Newsletter</span></li>
             <li className="text-black block">DeveloperDAO<span className="arrowspan text-zinc-400"> - Newsletter</span></li>
             <li className="text-black block">DSS<span className="arrowspan text-zinc-400"> -  Dead Simple Sites </span></li>
           </ul>
          </div>
        </motion.div>
    )
}

export default Section8
