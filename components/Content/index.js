import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrow from "../../img/Group 192.svg";
import productOfTheWeek from "../../public/Optimized SVG.svg";

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
          <div id="name" className="p-0 flex h-auto w-full md:w-44 flex-none">Mohamed Sadiq</div>
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
