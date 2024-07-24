import { motion } from "framer-motion";
import Link from "next/link";

const Section2 = () => {
    const MohamedSadiq = {
        initial: {
          opacity: 0,
          top: "20px",
          position:"relative"
        },
        animate:{
          opacity: 1,
          top: "0",
          position:"relative"
        }
      }
    
    return (
        <motion.div 
        className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
        initial={MohamedSadiq.initial}
        animate={MohamedSadiq.animate}
        transition={{ delay: 0.1 }}
      >
        <div className="mainContent flex h-auto w-full md:w-auto flex-none">
          <h1>An Engineering Snippets</h1>
        </div>
        <div className="mainContent main_projects">
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-0" href="sparks/widget" passHref>
              <h1 className="daos_spot_home">
                A Dynamic Widget <span className="arrowspan"> <span className="req">Jun 2024 </span> ↗</span>
              </h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/button" passHref>
              <h1 className=""> Button<span className="arrowspan"> <span className="req">Jun 2024 </span>↗</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/scroll" passHref>
              <h1 className=""> Scrolling<span className="arrowspan"> <span className="req">Jun 2024 </span>↗</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/TheMartian" passHref>
              <h1 className=""> The Martian<span className="arrowspan"> <span className="req">Jul 2024 </span>↗</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/onhover" passHref>
              <h1 className=""> On Hover<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/gameui" passHref>
              <h1 className="">3D Smooth transitions<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
            </Link>
          </div>
          <div className="hover_project padding-0">
            <Link className="sparkLinks mt-2" href="sparks/line" passHref>
              <h1 className="">Temporal Flow<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
            </Link>
          </div>
        </div>
      </motion.div>
    )
}

export default Section2
