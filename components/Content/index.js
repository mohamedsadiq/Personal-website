import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect,useRef } from "react";
import arrow from "../../img/Group 192.svg";


const MyComponent = (mode) => {

  const [svgColor, setSvgColor] = useState("#000")
  const valueOfMood = mode.mode.valueOfMode;

const svgColorsFun = () => {
  if(valueOfMood === "dark"){
    setSvgColor("#fff")
  }else if (valueOfMood === "light"){
    setSvgColor("#000")
  }
}

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
    svgColorsFun();
    updateDivPosition();
    window.addEventListener("resize", updateDivPosition);

    return () => {
      window.removeEventListener("resize", updateDivPosition);
    };
  }, [valueOfMood]);

  // useEffect(() => {
  //   svgColorsFun();
  // }, [valueOfMood]); // Run svgColorsFun whenever valueOfMood changes


  return (
    <div
      className="content"
      style={{top:divTop}}>
      <motion.div
        className="content_animete"
        animate={{ opacity: 1, top: 73,filter: "blur(0px)" }}
        initial={{ filter: "blur(10px)" }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeOut",
        }}
      >
        <div id="name">Mohamed Sadiq</div>
        <div className="home_text_front">
          <p>
            A Product Designer & engineer, Dedicated to turning ideas into
            well-crafted products. Founder of{" "} 
            <a href={"/projects/daosspot"} target="_blink">
               DAOs Spot
            </a>  {" "}, Early
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
          {/* <p className="callToAction">
            <Link className="aboutme" href={"/projects"}>
              Inspect my work
            </Link>
            {" "} or {" "}
            <Link className="aboutme" href={"/blogs"}>
              My thoughts
            </Link>
          </p> */}
        </div>
       
       <div className="mainContent">
        <h1>Things I’ve built</h1>
       </div>
       <div className="mainContent main_projects">
      <div className="hover_project padding-0">
      <Link href="projects/daosspot" passHref>
     
        <h1 className="daos_spot_home"> DAOs Spot  <span className="arrowspan"> <span className="req">4th product of the week on PH</span> ↗</span></h1>
        {/* <video className="future_project_video" width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/daosspotvideo.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
        </Link>
        </div>
        <div className="hover_project padding-0">
        <Link href="projects/developerdaofm" passHref>
     
        <h1 className=""> DeeveloperDAO FM<span className="arrowspan"> <span className="req">Top product PH </span>↗</span></h1>
       
        </Link>
        </div>
        
       
        
       </div>
       <div className="mainContent">
        <h1>An  Engineering Snippets</h1>
       </div>
       <div className="mainContent main_projects">
      <div className="hover_project padding-0">
      <Link  href="sparks/widget" passHref>
     
        <h1 className="daos_spot_home">A Dynamic Widget  <span className="arrowspan"> <span className="req">An interactive widget</span> ↗</span></h1>
       
        </Link>
        </div>
        <div className="hover_project padding-0">
        <Link  href="sparks/button" passHref>
     
        <h1 className=""> Button<span className="arrowspan"> <span className="req">An interactive button. </span>↗</span></h1>
       
        </Link>
        </div>
        <div className="hover_project padding-0">
        <Link  href="sparks/scroll" passHref>
     
        <h1 className=""> Scrolling<span className="arrowspan"> <span className="req">Widget Scrolling </span>↗</span></h1>
       
        </Link>
        </div>
       
        
       </div>
       <div className="mainContent">
        <h1>Social media</h1>
       </div>
       <div className="mainContent margin-top " id="links_home">
        <ul className="links_home">
          <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink">
            <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </a>
        <a href="https://github.com/mohamedsadiq" target="_blink">
            <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </a>
        
        <a href="https://x.com/sadiq_moo" target="_blink">
        <svg width="20px" height="20px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke={svgColor} strokeWidth="1.5"></path><path d="M20 3L4 21" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round"></path></svg>
        </a>
        <a href="https://layers.to/mohamed.sadiq" target="_blink">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 32 33"><path fill={svgColor} fillOpacity="0.2" d="M0 18.83L.08 6.832C.094 4.66 1.613 2.798 3.71 2.383L15.297.086c2.784-.552 5.368 1.627 5.35 4.51l-.08 12c-.015 2.171-1.534 4.032-3.631 4.448L5.349 23.341C2.565 23.893-.019 21.714 0 18.83z"/><path fill={svgColor} fillOpacity="0.5" d="M5.677 23.617l.08-12C5.77 9.447 7.29 7.586 9.387 7.17l11.587-2.296c2.784-.552 5.368 1.626 5.349 4.51l-.08 12c-.014 2.171-1.533 4.032-3.63 4.448l-11.587 2.297c-2.784.551-5.368-1.627-5.349-4.51z"/><path fill={svgColor} fillOpacity="0.8" d="M11.354 28.404l.08-12c.014-2.172 1.533-4.032 3.63-4.448l11.587-2.297c2.784-.552 5.368 1.627 5.349 4.51l-.08 12c-.014 2.172-1.533 4.033-3.63 4.448l-11.587 2.297c-2.784.552-5.368-1.627-5.35-4.51z"/></svg>
        </a>
         
        </ul>
       </div>
        <div className="mainContent">
        <h1>Latest Activity</h1>
       </div>
       <div className="mainContent margin-top">
     
      <div className="hover_project latest_activity_project">
        
        <a href="https://x.com/sadiq_moo/status/1805008800971424021/video/1" target="_blink">
        
        {/* <Image className="border-rounded " src={"/fffsfs.gif"} alt="" width={100} height={100} style={{ width: "376px", height: "315pxs",borderRadius:"20px", marginBottom:"20px" }} /> */}
        <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/Screen Recording July 10.mov" type="video/mp4" />
                    Your browser does not support the video tag.
          </video>
        <h1 className="h_m"> Widget</h1>
        <span>An interactive widget. </span>
        </a>
      </div>
      {/* <div className="hover_project latest_activity_project">
        <a href="https://x.com/sadiq_moo/status/1801041351796019592" target="_blink">
        
        <video muted={true} autoPlay={true} loop src={"/scroll.mov"} style={{ width: "376px", height: "376px" }} />
        <h1 className="h_m"> Scrolling </h1>
        <span>Widget Scrolling</span>
        </a>
      </div> */}
      
      {/* <div className="hover_project latest_activity_project">
      
      <Link href="/sparks/family_transactions">
      
      <video muted={true} autoPlay={true} loop src={"/familyanimation.mov"} style={{ width: "375px", height: "auto" }} />
      <h1 className="h_home"> Family Wallet Transactions</h1>
      <span>Made the animation using GASP.js</span>
      </Link>
    
      </div> */}
       
       </div>
       
       {/* <div className="mainContent">
        <h1>Future Project</h1>
       </div> */}



       {/* <div className="mainContent ">
        <h1> Thoughts</h1>
       </div>
       <div className="mainContent thoughts">
     
      <div className="hover_project  padding-0">
        <Link href="blog/building-on-imagination">
        <h1 className="h_m">Building On Imagination  <span className="arrowspan">↗</span></h1>
        <span>January 13, 2024</span>
        </Link>
      </div>
      
       
       
        <div>
          
          
        </div>
        
       </div> */}
      
       <div className="mainContent">
        <h1>Available to work</h1>
       </div>
       <div className="mainContent margin-top " id="links_home">
       <a  className="calltoation" href="mailto:mohamed.sadiq@outlook.sa"><button className="workbutton"> <span id="workbutton"></span> Reach To Me</button></a>
       </div>
     
      </motion.div>
    </div>
    
  );
};

const Content = (valueOfMode) => {
  const theValueOFMode = valueOfMode;
  // console.log(test)
  return (
    <div>
      {/* ... */}
      <MyComponent mode={theValueOFMode}/>
    </div>
  );
};

export default Content;
