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

  return (
    <div className="content pt-16">
      <motion.div
        className="flex flex-row flex-wrap gap-y-12"
      >
        <Section1 MohamedSadiq={MohamedSadiq}/>
        <Section6 MohamedSadiq={MohamedSadiq}/>
        <Section4 MohamedSadiq={MohamedSadiq}/>

        <Section3 MohamedSadiq={MohamedSadiq}/>
        <Section2 MohamedSadiq={MohamedSadiq}/>
        <Section9 MohamedSadiq={MohamedSadiq}/>
        <Section5 MohamedSadiq={MohamedSadiq}/>
        <Section7 MohamedSadiq={MohamedSadiq}/>
        <Section8 MohamedSadiq={MohamedSadiq}/>
   
      </motion.div>
    </div>
  );
};

const Content = () => {
  return (
    <div className={"p-0 md:mx-12 sm:mx-10"}>
      <MyComponent />
    </div>
  );
};

export default Content;