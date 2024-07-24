import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import BackButton from "../../components/backButton";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickButton() {
  const [state, setState] = useState({
    isAnimating: false,
    buttonColor: "#f4f4f5",
    rotation: 0,
    currentTitleIndex: 0,
    opacityIcon: 1,
  });

  const titles = ["Watch", "Mac", "iPad", "iPhone"];
 

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      isAnimating: true,
      buttonColor: "#fff",
      opacityIcon: 0.1,
      currentTitleIndex: (prevState.currentTitleIndex + 1) % titles.length,
    }));

    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isAnimating: false,
        buttonColor: "#f4f4f5",
        opacityIcon: 1,
      }));
    }, 250);
  };

  const textVariants = {
    initial: {
      opacity: 0,
      filter: "blur(0px)",
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        filter: "blur(10px)",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      top: "-4px",
      rotate: "-40deg",
      filter: "blur(4px)",
    },
  };

  return (
    <>
      <Head>
        <title>Quick Button</title>
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
            <h2> Quick Button</h2>
            <p>
              The Quick Button is an interactive UI component designed to enhance user engagement through dynamic animations. Built using <span className="spark_tools">React</span>, <span className="spark_tools">Framer Motion</span> and <span className="spark_tools">Tailwind CSS</span>, this button offers a visually appealing experience by incorporating smooth transitions and state changes upon user interaction.
            </p>
            <div className="exp" style={{ height: "400px" }}>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-32 flex justify-center items-center">
                <motion.div
                  onClick={handleClick}
                  animate={{
                    rotate: state.isAnimating ? 15 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  style={{
                    cursor: "pointer",
                  }}
                  className="mainButtonAnimation rounded-full relative h-10 shadow-sm shadow-neutral-200 mix-blend-normal bg-blend-normal"
                >
                  <div
                    className="w-24 h-10 rounded-full bg-zinc-100 grid gap-0 m-b-0 relative border-neutral-50 border-2"
                    style={{
                      background: state.buttonColor,
                      transition: "all 0.4s ease-in-out",
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: state.rotation,
                      }}
                      className="letter_rotation"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 16,
                      }}
                    >
                      <div
                        className="ml-3 mt-1 words_button"
                        style={{
                          transition: "all 0.4s ease-in-out",
                        }}
                      >
                        <AnimatePresence>
                          <motion.div
                            key={titles[state.currentTitleIndex]}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 16,
                            }}
                          >
                            {titles[state.currentTitleIndex]}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </motion.div>
                    <div className="arrow_button absolute right-2 top-2.5">
                      <svg
                        style={{
                          opacity: state.opacityIcon,
                          transition: "all 0.4s ease-in-out",
                        }}
                        fill="none"
                        height="18"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
           
          </div>
        </div>
     
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H699TZ29QW"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H699TZ29QW');
        `}
        </Script> 
    </>
  );
}


