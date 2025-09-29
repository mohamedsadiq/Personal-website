import { motion } from "framer-motion";

import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"
import Section8 from "./section8"
import Section9 from "./section9"

const MyComponent = () => {
  const MohamedSadiq = {
    initial: {
      opacity: 0,
      top: "20px",
      position: "relative",
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      top: "0",
      position: "relative",
      filter: "blur(0px)",
    }
  }

  // High-level motion controller: centralize variants and transition rules
  const motionCtl = {
    variants: {
      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    getTransition: (order = 0) => ({
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.6,
      delay: 0.1 + order * 0.1,
    }),
  }

  return (
    <div className="content pt-16">
      <motion.div
        className="flex flex-row flex-wrap gap-y-12"
      >
        <Section1 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={0}/>
        <Section4 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={1}/>
        <Section3 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={2}/>
        <Section2 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={3}/>
        <Section9 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={4}/>
        <Section5 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={5}/>
        <Section7 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={6}/>
        <Section8 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={7}/>
        <Section6 MohamedSadiq={MohamedSadiq} motionCtl={motionCtl} order={8}/>
      </motion.div>
    </div>
  );
};

const Content = () => {
  return (
    <div className={"p-0 md:mx-12 sm:mx-10 text-base"}>
      <MyComponent />
    </div>
  );
};

export default Content;