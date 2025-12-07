import { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import Script from "next/script";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";
import HalfDot from "../../components/dots/half";
import FullDot from "../../components/dots/full";
import classNames from "classnames";
import { useRouter } from 'next/router';
import PageNavigation from '../../components/PageNavigation';
import FormattedDate from '../../components/FormattedDate'; // Ensure this is a default import
import { AnimatedSection } from "../../components/AnimatedSection";
import SparkContainer from "../../components/SparkContainer";

export default function Widget() {
  const [isClicked, setIsClicked] = useState(false);
  const [dots, setDots] = useState([]);
  const [halfDotCount, setHalfDotCount] = useState(0);
  const [fullDotCount, setFullDotCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isClicked) {
      const newDots = [];
      let halfCount = 0;
      let fullCount = 0;

      for (let i = 0; i < 30; i++) {
        const isHalfDot = Math.random() < 0.5;
        if (isHalfDot) {
          newDots.push(<HalfDot key={i} />);
          halfCount++;
        } else {
          newDots.push(<FullDot key={i} />);
          fullCount++;
        }
      }
      setDots(newDots);
      setHalfDotCount(halfCount);
      setFullDotCount(fullCount);
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
    animate: 0.5,
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
      bottom: "25%",
      filter: "blur(0px)",
      opacity: 0,
    }
  }

  const widget_text = {
    initial: {
      top: "-30px",
      position: "relative",
      opacity: 0,
      scale: 0.3,
      filter: "blur(40)",
    },
    animate: {
      position: "relative",
      top: "100px",
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: {
      position: "relative",
      x: 0,
      opacity: 0,
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
        <svg width="57" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    const randomIndices = [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)];
    return randomIndices.includes(index) ? 'lampnotworking' : '';
  };

  const containerVariants = {
    expanded: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
      zIndex: 50,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 13,
      },
    },
    collapsed: {
      position: "relative",
      width: "auto",
      height: "auto",
      backgroundColor: "transparent",
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 13,
      },
    },
  };

  return (
    <>
      <SEO
        title="Interactive Exercise Progress Widget"
        description="Explore an interactive exercise progress widget inspired by Arkady's design. Built with React, Framer Motion, and Tailwind CSS for dynamic visual updates."
        path="/sparks/widget"
      />

      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title="" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className=" mb-0 text-lg text-black dark:text-white">Interactive Exercise Progress Widget</h1>
          {/* <span className="text-xs text-stone-500"> Published Jun 2024</span> */}
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#3b3b3b] mb-4 leading-7 dark:text-[#c8c8c8]">
            A dynamic widget inspired by <a href="https://x.com/sovpal/status/1742640211782185261" target="_blank" rel="noopener noreferrer" className="text-[#06e2b0] hover:underline">Arkady's</a> design. Built using <span className="spark_tools">React</span>, <span className="spark_tools">Framer Motion</span>, and <span className="spark_tools">Tailwind CSS</span>.
            This interactive widget dynamically generates dots representing exercise progress. Each click triggers a visual update, reflecting changes in exercise status with animated transitions and interactive elements.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="w-full">
          <div className="expBorder">
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
              >
                <div className="daysExercises mb-9 flex-row flex-wrap h-3.5 flex justify-center items-center">
                  <div className="exercises_container flex order-10 flex-wrap gap-y-0 gap-x-0" style={{ rowGap: isClicked ? '22px' : '0px' }}>
                    {isClicked ? dots.map((dot, index) => (
                      <motion.div
                        key={index}
                        className={classNames("exercises_dot_block", addNotWorkingClass(index))}
                        initial={dotVariants.initial}
                        animate={dotVariants.animate}
                        transition={{ duration: transitionDuration.animate, delay: index * 0.05 }}
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
                    {`${fullDotCount}/30 days`}
                  </span>
                  <h2 className="text-[#3fe38d] text-3xl" style={{ textShadow: '0 0 5px #3fe38d' }}>Doing morning exercises</h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3} className="w-full">
          <PageNavigation type="spark" currentPath={router.pathname} />
        </AnimatedSection>
      </SparkContainer>
    </>
  );
}
