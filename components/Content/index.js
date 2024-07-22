import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";
import productOfTheWeek from "../../public/Optimized SVG.svg";

import boi from "../../public/boi.png"
import dao from "../../public/daosspot.png"

const MyComponent = (mode) => {
  const [svgColor, setSvgColor] = useState("#000");
  const valueOfMood = mode.mode.valueOfMode;

  const svgColorsFun = () => {
    if (valueOfMood === "dark") {
      setSvgColor("#fff");
    } else if (valueOfMood === "light") {
      setSvgColor("#000");
    }
  };

  const [divTop, setDivTop] = useState("68vh"); // Default value for smaller heights

  const updateDivPosition = () => {
    const screenHeight = window.innerHeight;
    let newDivTop;

    if (screenHeight > 1200) {
      newDivTop = "18vh";
    } else if (screenHeight <= 795) {
      newDivTop = "18vh";
    } else {
      newDivTop = "18vh";
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

  return (
    <div className="content pt-36">
      <motion.div
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
          <div id="name" className="p-0 flex h-auto w-full md:w-44 flex-none ">Mohamed Sadiq
            <svg 
            className=" mr-0 w-3.5 ml-1 mt-0.5 opacity-75"
            style={{cursor:"pointer"}}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_25_14)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.878 11.6479L9.45338 11.7085C9.29356 11.7154 9.15444 11.6102 9.11675 11.4541C9.07958 11.2986 9.15604 11.1419 9.30152 11.0756L12.4417 9.64087C12.9286 9.41839 13.4665 9.8214 13.3895 10.3518C12.9875 13.1177 12.6971 14.7117 12.2936 17.4775L13.7182 17.417C13.878 17.4106 14.0171 17.5152 14.0548 17.6713C14.092 17.8269 14.0155 17.9835 13.87 18.0504L10.7298 19.4846C10.2429 19.7071 9.70506 19.3041 9.78206 18.7741C10.1835 16.0078 10.4744 14.4138 10.878 11.6479Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0157 4.43945C14.0442 4.43945 14.8783 5.27308 14.8783 6.30157C14.8783 7.33007 14.0442 8.1637 13.0157 8.1637C11.9872 8.1637 11.1536 7.33007 11.1536 6.30157C11.1536 5.27308 11.9872 4.43945 13.0157 4.43945Z" fill="black" />
                <path d="M11.9931 0C18.6159 0 23.9857 5.3692 23.9857 11.9926C23.9857 18.6159 18.6159 23.9857 11.9931 23.9857C5.36973 23.9857 0 18.6159 0 11.9926C0 5.3692 5.36973 0 11.9931 0ZM11.9931 0.996106C5.91929 0.996106 0.996106 5.91929 0.996106 11.9926C0.996106 18.0658 5.91929 22.989 11.9931 22.989C18.0664 22.989 22.9896 18.0658 22.9896 11.9926C22.9896 5.91929 18.0664 0.996106 11.9931 0.996106Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_25_14">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg></div>
          <div className="home_text_front">
            <p>
              A Product Designer & Engineer, turning ideas into crafted products. Founder of{" "}
              <a href={"/projects/daosspot"} target="_blink">
                DAOs Spot
              </a>
              , Early OSS contributor at{" "}
              <a href="https://www.developerdao.com/" target="_blink">
                Developer DAO
              </a>
              , Creator of{" "}
              <a href="https://www.boimaginations.com/" target="_blink">
                BOI
              </a>
              , Focused on{" "}
              <span className="web3">
                web3.<span id="animation_web3"></span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
          <div className="mainContent flex h-auto w-full md:w-auto flex-none">
            <h1>An Engineering Snippets</h1>
          </div>
          <div className="mainContent main_projects">
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-0" href="sparks/widget" passHref>
                <h1 className="daos_spot_home">
                  A Dynamic Widget <span className="arrowspan"> <span className="req">Jun 2024 </span> ↗</span>
                </h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/button" passHref>
                <h1 className=""> Button<span className="arrowspan"> <span className="req">Jun 2024 </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/scroll" passHref>
                <h1 className=""> Scrolling<span className="arrowspan"> <span className="req">Jun 2024 </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/TheMartian" passHref>
                <h1 className=""> The Martian<span className="arrowspan"> <span className="req">Jul 2024 </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/onhover" passHref>
                <h1 className=""> On Hover<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/gameui" passHref>
                <h1 className="">3D Smooth transitions<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="sparkLinks mt-2" href="sparks/line" passHref>
                <h1 className="">Temporal Flow<span className="arrowspan"> <span className="req">Jul 2024  </span>↗</span></h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1>Things I’ve built</h1>
          </div>
          <div className="mainContent main_projects">
            <div className="hover_project padding-0">
              <Link className="mt-0" href="projects/daosspot" passHref>
                <h1 className="daos_spot_home"> DAOs Spot  <span className="arrowspan"> <span className="relative w-[68px] top-1 inline-block"><Image src={productOfTheWeek} alt="" /></span> ↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <Link className="mt-2" href="projects/developerdaofm" passHref>
                <h1 className=""> DeeveloperDAO FM<span className="arrowspan"> <span className="req">Top product PH </span>↗</span></h1>
              </Link>
            </div>
            <div className="hover_project padding-0">
              <a className="mt-2" href="https://www.behance.net/gallery/134169935/Certified-Web3-Boy-NFTs" passHref>
                <h1 className=""> Web3 lover boy NFTs<span className="arrowspan"> <span className="req">NFTs collection </span>↗</span></h1>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
        <div className="mainContent flex h-auto w-full md:w-44 flex-none">
          <h1>Social media</h1>
        </div>
        <div className="mainContent margin-top " id="links_home">
          <ul className="links_home">
          <a href="https://x.com/sadiq_moo" target="_blink">
              <svg width="20px" height="20px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke={svgColor} strokeWidth="1.5"></path><path d="M20 3L4 21" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </a>

            <a href="https://layers.to/mohamed.sadiq" target="_blink">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 32 33"><path fill={svgColor} fillOpacity="0.2" d="M0 18.83L.08 6.832C.094 4.66 1.613 2.798 3.71 2.383L15.297.086c2.784-.552 5.368 1.627 5.35 4.51l-.08 12c-.015 2.171-1.534 4.032-3.631 4.448L5.349 23.341C2.565 23.893-.019 21.714 0 18.83z" /><path fill={svgColor} fillOpacity="0.5" d="M5.677 23.617l.08-12C5.77 9.447 7.29 7.586 9.387 7.17l11.587-2.296c2.784-.552 5.368 1.626 5.349 4.51l-.08 12c-.014 2.171-1.533 4.032-3.63 4.448l-11.587 2.297c-2.784.551-5.368-1.627-5.349-4.51z" /><path fill={svgColor} fillOpacity="0.8" d="M11.354 28.404l.08-12c.014-2.172 1.533-4.032 3.63-4.448l11.587-2.297c2.784-.552 5.368 1.627 5.349 4.51l-.08 12c-.014 2.172-1.533 4.033-3.63 4.448l-11.587 2.297c-2.784.552-5.368-1.627-5.35-4.51z" /></svg>
            </a>
            <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink">
              <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="https://github.com/mohamedsadiq" target="_blink">
              <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
              </ul>
        </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
          <div className="mainContent flex h-auto w-full md:w-44 flex-none">
            <h1>Latest Activity</h1>
          </div>
          <div className="mainContent margin-top">
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
        </div>

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0">
          <div className="mainContent mt-5 flex h-auto w-full md:w-auto flex-none">
            <h1 className="mt-3">Available for July to Aug</h1>
          </div>
          <div className="mainContent margin-top" id="links_home">
            <a className="calltoation" href="mailto:mohamed.sadiq@outlook.sa">
              <button className="workbutton"> <span id="workbuttongreen"></span>Reach out via mail</button>
            </a>
          </div>
        </div>
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
