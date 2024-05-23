import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";


import work1 from '../../img/boidddd.svg'
import work2 from '../../img/daosspoticon.svg'
import work3 from '../../img/developerdaofm.svg'

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
            </a>  {" "}
            OSS contributor at {""}
            <a href="https://www.developerdao.com/" target="_blink">
               Developer DAO
            </a>
            , Creator of {" "}
            <a href="https://www.boimaginations.com/" target="_blink">
              
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
        <h1>Social media</h1>
       </div>
       <div className="mainContent margin-top">
        <ul className="links_home">
          <li> <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink">Dribbble</a> </li>
          <li> <a href="https://layers.to/mohamed.sadiq" target="_blink">Layers</a> </li>
          <li> <a href="https://github.com/mohamedsadiq" target="_blink">Github</a> </li>
          <li> <a href="https://x.com/sadiq_moo" target="_blink">X (Twitter)</a> </li>
        </ul>
       </div>
        <div className="mainContent">
        <h1>Latest Activity</h1>
       </div>
       <div className="mainContent margin-top">
     
      <div className="hover_project latest_activity_project">
        <a href="https://twitter.com/sadiq_moo/status/1739593994948989280/video/1" target="_blink">
        
        <video muted={true} autoPlay={true} loop src={"/aiProject.mp4"} style={{ width: "376px", height: "376px" }} />
        <h1 className="h_m"> Disliked </h1>
        <span>An AI project I am working on</span>
        </a>
      </div>
      <div className="hover_project latest_activity_project">
      
      <Link href="/sparks/family_transactions">
      
      <video muted={true} autoPlay={true} loop src={"/familyanimation.mov"} style={{ width: "375px", height: "auto" }} />
      <h1 className="h_home"> Family Wallet Transactions</h1>
      <span>Made the animation using GASP.js</span>
      </Link>
    
      </div>
       
       </div>
       {/* <div className="mainContent">
        <h1>Future Project</h1>
       </div> */}


<div className="mainContent">
        <h1>Future Project</h1>
       </div>
       <div className="mainContent main_projects">
     
      <div className="hover_project padding-0">
        <a href="https://www.boimaginations.com/" target="_blink">
          <h1 className="h_m">Building On Imagination <span className="arrowspan">↗</span></h1>
        </a>
      </div>
      <div className="hover_project padding-0">
      <a href="https://daospot.xyz" target="_blink">
        <h1 className=""> DAOs Spot <span className="arrowspan">↗</span></h1>
        </a>
        </div>
        <div className="hover_project padding-0">
        <a href="https://www.developerdaofm.xyz" target="_blink">
        <h1 className=""> DeeveloperDAO FM <span className="arrowspan">↗</span></h1>
        </a>
        </div>
        {/* <a href="https://www.behance.net/gallery/134169935/Certified-Web3-Boy-NFTs" target="_blink">
        <h1 className=""> Certifed Web3 Boy <span className="arrowspan">↗</span></h1>
        </a> */}
     
    
       </div>
       <div className="mainContent ">
        <h1> Thoughts</h1>
       </div>
       <div className="mainContent thoughts">
     
      <div className="hover_project  padding-0">
        <Link href="blog/building-on-imagination">
        <h1 className="h_m">Building On Imagination  <span className="arrowspan">↗</span></h1>
        <span>January 13, 2024</span>
        </Link>
      </div>
       <div className="hover_project">
        <Link href="blog/reflections-on-the-role-of-Intentionality">
        <h1 className=""> Intentional Development of Technology: A Path to a Better Future for All. <span className="arrowspan">↗</span></h1>
         <span>January 13, 2024</span>
        </Link>
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
