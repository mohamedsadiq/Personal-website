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
        className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
        {...motionProps}
        >
          <div className="text-zinc-400">
            <h1 className="text-base leading-relaxed">Mentions</h1>
          </div>
          <div id="links_home">
           <ul>
             <li className="text-black block text-base leading-relaxed">Today in Design<span className="arrowspan text-zinc-400"> - Newsletter </span></li>
             <li className="text-black block text-base leading-relaxed">Product Hunt<span className="arrowspan text-zinc-400"> - Newsletter</span></li>
             <li className="text-black block text-base leading-relaxed">DeveloperDAO<span className="arrowspan text-zinc-400"> - Newsletter</span></li>
             <li className="text-black block text-base leading-relaxed">DSS<span className="arrowspan text-zinc-400"> -  Dead Simple Sites </span></li>
           </ul>
          </div>
        </motion.div>
    )
}

export default Section8
