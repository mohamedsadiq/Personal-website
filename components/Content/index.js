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
    <div className="content" style={{ top: divTop }}>
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
            Driven Product Designer, dedicated to turning ideas into
            well-crafted products. specializing in interaction design and
            creating seamless interfaces that blend style with functionality.
            Focused on{" "}
            <span className="web3">
              web3.<span id="animation_web3"></span>
            </span>
          </p>

          {/* <p> A product designer, Founder of <a target="_blank" href="https://www.daosspot.xyz/">DAOs Spot</a> Focusing on <span className="web3">
                web3
                span id="animation_web3"></span>
                <</span>, Open source products <a href="https://twitter.com/developer_dao"  className="links" target="_blank" rel="noreferrer">@DeveloperDAO</a>, member of <a href="https://twitter.com/Anticollective_" className="links" target="_blank" rel="noreferrer">@Anti.</a> you can find me on  <a href="https://x.com/sadiq_moo">X.</a> </p> */}
          <Link className="aboutme" href={"/about"}>
            Read more
            {/* <svg
             className="morearrow"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z"
                // fill="black"
              />
              <path
                d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z"
                // fill="black"
              />
            </svg> */}
          </Link>
        </div>
        {/* ... */}
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
