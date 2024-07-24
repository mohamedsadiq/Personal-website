import { motion } from "framer-motion";
import Link from "next/link";

import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";

import boi from "../../public/boi.png"
import dao from "../../public/daosspot.png"



import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
// import section1dao from "../../public/daosspot.png"

const MyComponent = (mode) => {
  const [svgColor, setSvgColor] = useState("#000");
  // const valueOfMood = mode.mode.valueOfMode;

  const svgColorsFun = () => {
    if (valueOfMood === "dark") {
      setSvgColor("#fff");
    } else if (valueOfMood === "light") {
      setSvgColor("#000");
    }
  };

  // const [divTop, setDivTop] = useState("68vh"); // Default value for smaller heights

  // const updateDivPosition = () => {
  //   const screenHeight = window.innerHeight;
  //   let newDivTop;

  //   if (screenHeight > 1200) {
  //     newDivTop = "18vh";
  //   } else if (screenHeight <= 795) {
  //     newDivTop = "18vh";
  //   } else {
  //     newDivTop = "18vh";
  //   }

  //   setDivTop(newDivTop);
  // };

  // useEffect(() => {
  //   svgColorsFun();
  //   updateDivPosition();
  //   window.addEventListener("resize", updateDivPosition);

  //   return () => {
  //     window.removeEventListener("resize", updateDivPosition);
  //   };
  // }, [valueOfMood]);

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
    <div className="content pt-36">
      <motion.div
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="flex flex-row flex-wrap gap-y-12"
      >
       <Section1 />
       <Section4 />
       <Section2 />
       <Section3 />
       <Section5 />
       <Section6 />

      </motion.div>
    </div>
  );
};

const Content = (valueOfMode) => {
  const theValueOFMode = valueOfMode;
  return (
    <div className={`p-0 md:p-8 ${theValueOFMode === "dark" ? "dark-mode" : "light-mode"} md:mx-12 sm:mx-10`}>
      <MyComponent mode={valueOfMode} />
    </div>
  );
};


export default Content;
