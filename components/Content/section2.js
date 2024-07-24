import { motion } from "framer-motion";
import Link from "next/link";

const Section2 = ({MohamedSadiq}) => {
 
    
    return (
        <motion.div 
        className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
        initial={MohamedSadiq.initial}
        animate={MohamedSadiq.animate}
        transition={{ delay: 0.3 }}
      >
        <div className="mainContent flex h-auto w-full md:w-auto flex-none">
          <h1>An Engineering Snippets</h1>
        </div>
        <div className="mainContent main_projects">
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-0" href="sparks/widget" passHref>
              <h1 className="daos_spot_home flex gap-x-1.5 justify-center items-center">
               <span> A Dynamic Widget </span> <span className="h-px w-16 bg-stone-300 block"></span><span className="arrowspan text-zinc-400">Jun 2024  </span>
              </h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/button" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center">
                
                <span>Button</span>
                <span className="h-px w-16 bg-stone-300 block"></span>
               
                <span className="arrowspan text-zinc-400">Jun 2024  </span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/scroll" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center"> <span>Scrolling</span><span className="h-px w-16 bg-stone-300 block"></span><span className="arrowspan text-zinc-400">Jun 2024</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/TheMartian" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center"> <span>The Martian</span><span className="h-px w-16 bg-stone-300 block"></span> <span className="arrowspan text-zinc-400"> Jul 2024 </span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/onhover" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center"> <span>On Hover</span><span className="h-px w-16 bg-stone-300 block"></span> <span className="arrowspan text-zinc-400 "> Jul 2024 </span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/gameui" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center"><span>3D Smooth transitions</span ><span className="h-px w-11 bg-stone-300 block"></span> <span className="arrowspan text-zinc-400"> Jul 2024  </span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/line" passHref>
              <h1 className="flex gap-x-1.5 justify-center items-center"><span>Temporal Flow</span><span className="h-px w-16 bg-stone-300 block"></span> <span className="arrowspan text-zinc-400">Jul 2024 </span></h1>
            </Link>
          </div>
        </div>
      </motion.div>
    )
}

export default Section2
