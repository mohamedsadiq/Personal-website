import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";
import HalfDot from "../../components/dots/half";
import FullDot from "../../components/dots/full";
import classNames from "classnames"; // Import classNames utility

export default function Widget() {
  const [isClicked, setIsClicked] = useState(false);
  const [dots, setDots] = useState([]);
  const [halfDotCount, setHalfDotCount] = useState(0);
  const [fullDotCount, setFullDotCount] = useState(0); // State for full dot count

  useEffect(() => {
    if (isClicked) {
      const newDots = [];
      let halfCount = 0;
      let fullCount = 0; // Variable to keep track of full dots count

      for (let i = 0; i < 30; i++) {
        const isHalfDot = Math.random() < 0.5;
        if (isHalfDot) {
          newDots.push(<HalfDot key={i} />);
          halfCount++;
        } else {
          newDots.push(<FullDot key={i} />);
          fullCount++; // Increment full dots count
        }
      }
      setDots(newDots);
      setHalfDotCount(halfCount);
      setFullDotCount(fullCount); // Update state with full dots count
    }
  }, [isClicked]);

  const widgetVariants = {
    initial: {
      filter: "blur(0)",
    },
    animate: {
      filter: "blur(0px)",
      width: "300px",
      height: "300px",
    },
    hover: {
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 10,
      },
    },
  };

  const dotVariants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
    
  };

  const transitionDuration = {
    initial: 0.1,
    animate: 0.5, // Adjust duration as per your requirement
  };

  const IconAnimation = {
    initial: {
      scale: 0.8,
      filter: "blur(40px)",
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
    },
    hover: {
      scale: 1.2,
    },
  };
  const widget_text_mobile = {
    initial: {
      bottom: "38%",
      filter: "blur(10)",
      opacity: 1,
    },
    animate: {
      bottom: "25%" ,
      filter: "blur(0px)",
      opacity: 0,
    }
    
  }
  const widget_text = {
    initial: {
      top:"-30px",
      position: "relative",
      opacity: 0,
      // y: 50,
      scale: 0.3,
      filter: "blur(40)",
    },
    animate: {
      top:"100px",
      opacity: 1,
      // y: 0,
      scale: 1,
      filter: "blur(0px)", 
    },
    exit: {
      x: 0,
      opacity: 0,
      
      // transition: { duration: 0.5, ease: "easeInOut" },
    }
  }
  const IconEX = () => {
    return (
      <motion.div
        className="icon_ex"
        initial={IconAnimation.initial}
        animate={IconAnimation.animate}
        whileHover={IconAnimation.hover}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10,
        }}
      >
        <svg width="57" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#a)">
            <path d="M36.412 9.647h10.706v32.118H36.412" stroke="#3EE386" strokeWidth="4" />
          </g>
          <g filter="url(#b)">
            <path d="M20.353 9.647H9.647v32.118h10.706" stroke="#3EE386" strokeWidth="4" />
          </g>
          <g filter="url(#c)">
            <circle cx="28.382" cy="25.706" r="8.029" fill="#3EE386" />
          </g>
          <defs>
            <filter id="a" x="28.983" y=".218" width="27.563" height="50.975" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3.714" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape" />
            </filter>
            <filter id="b" x=".218" y=".218" width="27.563" height="50.975" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3.714" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape" />
            </filter>
            <filter id="c" x="12.924" y="10.248" width="30.916" height="30.916" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3.714" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    );
  };
  const addNotWorkingClass = (index) => {
    // Randomly add class 'lampnotworking' to three elements
    const randomIndices = [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)];
    return randomIndices.includes(index) ? 'lampnotworking' : '';
  };
  return (
    <>
      <Head>
        <title>Widget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mosadiq.com" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="Product designer & Engineer." />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />  
      </Head>
  
        <div className="container inner_container_sparks_parent">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
            <div className="exp flex justify-center items-center">
              <motion.div
                className="buttonWidget bg-slate-950 exercises_widget overflow-hidden"
                style={{ padding: isClicked ? "26px" : "0" }}
                variants={{}}
                initial={widgetVariants.initial}
                animate={isClicked ? widgetVariants.animate : widgetVariants.initial}
                whileHover={widgetVariants.hover}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 13,
                }}
                onClick={() => setIsClicked(!isClicked)}
                transitionEnd={{
                  filter: "blur(0px)", // Ensure blur is set to 0 at the end of the animation
                }}
              >
                <div className="daysExercises mb-9 flex-row flex-wrap h-3.5 flex justify-center items-center">
                  <div className="exercises_container flex order-10 flex-wrap gap-y-0 gap-x-0" style={{ rowGap: isClicked ? '22px' : '0px' }}>
                    {isClicked ? dots.map((dot, index) => (
                      <motion.div
                        key={index}
                        className={classNames("exercises_dot_block", addNotWorkingClass(index))}
                        initial={dotVariants.initial}
                        animate={dotVariants.animate}
                        transition={{ duration: transitionDuration.animate, delay: index * 0.05 }} // Adjust delay as needed
                      >
                        {dot}
                      </motion.div>
                    )) :
                      <IconEX />}
                  </div>
                </div>
                <motion.div
                  className="widget_text"
                  initial={widget_text.initial}
                  animate={isClicked ? widget_text.animate : widget_text.initial}
                  exit={widget_text.exit}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 13,
                  }}
                >
                  <span>
                    {`${fullDotCount}/30 days`}{" "}
                    {fullDotCount >= 20 ? "🔥" :  "😢"}
                  </span>
                  <h4>Doing morning exercises</h4>
                </motion.div>
              </motion.div>
            </div>
            <h2 className="mt-10 mb-3">Widget</h2>
            <p className="mt-0">
              A widget inspired by <a href="https://x.com/sovpal/status/1742640211782185261" target="_blink">Arkady's</a> design, Built using <span className="spark_tools">React</span>, <span className="spark_tools">Framer Motion</span> and <span className="spark_tools">Tailwind CSS</span>, 
              This interactive widget dynamically generates dots representing exercise progress. Each click triggers a visual update, reflecting changes in exercise status with animated transitions and interactive elements.       
            </p>
          </div>
        </div>
    </>
  
  );
}
