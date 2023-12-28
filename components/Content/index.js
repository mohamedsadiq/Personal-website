import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";
const MyComponent = () => {
  const [divTop, setDivTop] = useState("68vh"); // Default value for smaller heights

  const updateDivPosition = () => {
    const screenHeight = window.innerHeight;
    let newDivTop;

    if (screenHeight > 1200) {
      newDivTop = "68vh";
    } else if (screenHeight <= 795) {
      newDivTop = "73vh";
    } else {
      newDivTop = "68vh";
    }

    setDivTop(newDivTop);
  };

  useEffect(() => {
    updateDivPosition();
    window.addEventListener("resize", updateDivPosition);

    return () => {
      window.removeEventListener("resize", updateDivPosition);
    };
  }, []);

  return (
    <div
      className="content"
      style={{top:divTop}}>
      <motion.div
        className="content_animete"
        animate={{ opacity: 1, top: 73 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeOut",
        }}
      >
        <div id="name">Mohamed Sadiq</div>
        <div>
          <p>
            A Product Designer & engineer, Dedicated to turning ideas into
            well-crafted products. Founder of{" "} 
            <a href={"/projects/daosspot"} target="_blink">
              DAOs Spot
            </a>
            OSS contributor at {""}
            <a href="https://www.developerdao.com/" target="_blink">
               Developer DAO
            </a>
            , Creator of {" "}
            <a href="https://www.boimagination.com/" target="_blink">
              
              BOI
            </a>
            , Focused on {" "}
            <span className="web3">
              web3<span id="animation_web3"></span>
            </span>
          </p>
          <p className="callToAction">
            <Link className="aboutme" href={"/projects"}>
              Inspect my work
            </Link>
            {" "} or {" "}
            <Link className="aboutme" href={"/blogs"}>
              My thoughts
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      {/* ... */}
      <MyComponent />
    </div>
  );
};

export default Content;
