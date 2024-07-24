import { motion } from "framer-motion";


const Section5 = () => {
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
          transition={{ delay: 0.4}}
         >
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1>Latest Activity</h1>
          </div>
          <div className="mainContent ">
            <div className="hover_project latest_activity_project">
              <a href="https://x.com/sadiq_moo/status/1811148917783875695" target="_blink">
                <video width="100%" height="100%" autoPlay loop muted playsInline>
                  <source src="/July 10 Screen Recording.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h1 className="h_m"> 3D demo</h1>
                <span>Threejs Interactive demo.</span>
              </a>
            </div>
          </div>
        </motion.div>
    )
}

export default Section5
