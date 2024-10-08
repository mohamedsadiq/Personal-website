import { motion } from "framer-motion";


const Section5 = ({MohamedSadiq}) => {
 
    return (
        <motion.div
          className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
          initial={MohamedSadiq.initial}
          animate={MohamedSadiq.animate}
          transition={{ delay: 0.5}}
         >
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1 className="text-zinc-400">Latest Activity</h1>
          </div>
          <div className="mainContent ">
            <div className="hover_project latest_activity_project">
              <a href="https://x.com/sadiq_moo/status/1811148917783875695" target="_blink">
                <video width="100%" height="100%" autoPlay loop muted playsInline>
                  <source src="/ssssad.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h1 className="h_m text-[#000]"> Circle</h1>
                <span className="text-[#8c8c8c]">A way to display my work.</span>
              </a>
            </div>
          </div>
        </motion.div>
    )
}

export default Section5
