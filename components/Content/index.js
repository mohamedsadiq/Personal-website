import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";


import work1 from '../../img/nftweb3.png'
import work2 from '../../img/nftweb3.png'
import work3 from '../../img/nftweb3.png'

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
        <div className="mainContent">
        <h1>Latest Activity</h1>
       </div>
       <div className="mainContent">
     
      <div className="hover_project">
        <a href="">
        <h1 className="h_m"> Disliked (An AI project) </h1>
        <video muted={true} autoPlay={true} loop src={"/aiProject.mp4"} style={{ width: "367px", height: "366px" }} />
        </a>
      </div>
        <h1 className="h_home"> Family Wallet Transactions</h1>
      <video muted={true} autoPlay={true} loop src={"/familyanimation.mov"} style={{ width: "371px", height: "auto" }} />
      {/* <h1> Customized (An AI project)</h1>
      <video muted={true} autoPlay={true} loop src={"/aiproject2.mp4"} style={{ width: "200px", height: "auto" }} /> */}
       
        <div>
          
        </div>
       </div>
       {/* <div className="mainContent">
        <h1>Future Project</h1>
       </div> */}

<div className="mainContent">
        <h1>Future Project</h1>
       </div>
       <div className="mainContent main_projects">
     
      <div className="hover_project">
        <a href="">
        <h1 className="h_m">Building On Imagination<span className="arrowspan">↗</span></h1>
        {/* <video muted={true} autoPlay={true} loop src={"/aiProject.mp4"} style={{ width: "367px", height: "366px" }} /> */}
        </a>
      </div>
        <h1 className=""> DAOs Spot <span className="arrowspan">↗</span></h1>
        <h1 className=""> DeeveloperDAO FM <span className="arrowspan">↗</span></h1>
        <h1 className=""> Certifed Web3 Boy <span className="arrowspan">↗</span></h1>
      {/* <video muted={true} autoPlay={true} loop src={"/familyanimation.mov"} style={{ width: "371px", height: "auto" }} /> */}
      {/* <h1> Customized (An AI project)</h1>
      <video muted={true} autoPlay={true} loop src={"/aiproject2.mp4"} style={{ width: "200px", height: "auto" }} /> */}
       
        <div>
          
        </div>
       </div>
       <div className="mainContent ">
        <h1> Thoughts</h1>
       </div>
       <div className="mainContent thoughts">
     
      <div className="hover_project">
        <a href="">
        <h1 className="h_m">Building On Imagination  <span className="arrowspan">↗</span></h1>
        <span>January 13, 2024</span>
        </a>
      </div>
       <div className="hover_project">
        <a href="">
        <h1 className=""> Intentional Development of Technology: A Path to a Better Future for All. <span className="arrowspan">↗</span></h1>
         <span>January 13, 2024</span>
        </a>
      </div>
       
        <div>
          
        </div>
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
