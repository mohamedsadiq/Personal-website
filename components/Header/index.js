import Link from 'next/link';
import { useRouter } from 'next/router';
import useSound from 'use-sound';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
// import { useIsSmall } from '../hooks/utils'


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => {
      setMatches(media.matches);
    };
    
    media.addEventListener("change", listener);
    
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};

const useIsSmall = () => useMediaQuery("(max-width:580px)");
const useIsMedium = () => useMediaQuery("(max-width:768px)");

const Header = (props) => {
  const isSmall = useIsSmall()
  const isMedium = useIsMedium()
  const isItDarkOrLight = props.modeValue;
  const changeTheValueOfMode = props.setMode;

  // light mode or dark mode
  const switchMode = () => {
    if (isItDarkOrLight == "light") {
      changeTheValueOfMode("dark");
      setIconsColor("#eee")
    }

    if (isItDarkOrLight == "dark") {
      changeTheValueOfMode("light")
      setIconsColor("#858585")
    }
    // console.log("modeValue:" + isItDarkOrLight);
    // console.log("colorValue:" + iconsColor);
  }

  // useEffect(() => {
  //   console.log(isSmall)
  // });

  const header_hex = isSmall
    ? {
      initial: {
        border: "none",
        // width: "100px",
        opacity: 1,
        overflow: "hidden"
      },
      animate: {
        width: "22rem",
        border: "1px solid #101010",
        opacity: 1,
        boxShadow: " inset 0px 1px 1px #161616"
      },
      hover: {
        overflow: "visible",
        transition: {
          ease: "easeInOut",
          duration: 0,
          delay: 0
        }
      }
    }
    : {
      initial: {
        border: "none",
        width: "38.7rem",
        opacity: 1,
        overflow: "hidden"
      },
      animate: {
        width: "38.7rem",
        border: "1px solid #101010",
        opacity: 1,
        boxShadow: " inset 0px 1px 1px #161616"
      },

      hover: {
        overflow: "visible",
        transition: {
          ease: "easeInOut",
          duration: 0,
          delay: 0
        }
      }
    }




  // Sound hook
  const [play] = useSound("/sound.mp3");
  const [opacityContent, setOpacityContent] = useState("");
  const [iconsColor, setIconsColor] = useState("#858585");

  const home_content = () => {
    setOpacityContent("opacity")
  }


  // Router hook
  const router = useRouter();
  // Router hook
  const hex_animaiton = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0
    }
  }




  // Dtop Menu
  const [globalMenuState, setGlobalMenuState] = useState(false)
  const dropMediaStyle = {
    styleContentShow: {
      opacity: "1",
      visibility: "visible",
      right: "-22px",
      top: "74px"
    },
    styleContentHide: {
      opacity: "0",
      visibility: "hidden",
      right: "-22px",
      top: "90px"
    }
  }

  const [op, setOp] = useState(dropMediaStyle.styleContentHide);

  const styleVar = {
    opacity: op
  }
  const onClickShow = () => {
    // play();
    // console.log(op);
    if (globalMenuState === false) {
      setOp(dropMediaStyle.styleContentShow)
    } else {
      setOp(dropMediaStyle.styleContentHide)
    }

  }
  const changeOpOn = () => {
    setOp(dropMediaStyle.styleContentShow)
  }
  const changeOpOff = () => {
    setOp(dropMediaStyle.styleContentHide)
  }


  const iconHome = {
    initial: {
      opacity: 1,
      scale: 1,
      left: "50%",
      top: "50%",
      position: "absolute",
      zIndex: 100
    },
    animate: {
      opacity: 0,
      scale: 0.5,
      left: "50%",
      top: "50%",
      position: "absolute",
      zIndex: 100
    }
  }

  const header_hexdd = {
    initial: {
      border: "none",
      width: "8rem",
      opacity: 1,
      overflow: "hidden"
    },
    animate: {
      width: "39rem",
      border: "1px solid #101010",
      opacity: 1,

    },
    hover: {
      overflow: "visible",
      transition: {
        ease: "easeInOut",
        duration: 0,
        delay: 0
      }
    }
  }
  const iconss = {
    initial: {
      opacity: 0,
      top: "10px"
    },

    animate: {
      opacity: 1,
      top: "0"
    }
  }
  const iconSvg = {
    initial: {
      rotate: "0deg",
    },
    hover: {
      rotate: "180deg",
    }
  }
  const stack = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    }
  }
  const twittter = {
    initial: {
      rotate: "0",
    },
    hover: {
      rotate: "-20deg",
      duration: 3
    }
  }
  const insta = {
    initial: {
      rotate: "0",
    },
    hover: {
      rotate: "20deg",
      duration: 3
    }
  }
  return (
    <motion.header
      className={router.pathname == "/" ? "center_header" : "top_fixed"}
      whileHover={header_hex.hover}
      transition={{ delay: 0 }}
      initial="initial"
      animate="animate"
      variants={header_hex}
    >
      <div className='inner_header'>
        <Link href="/" activeclassname="active" passHref >
          <div>
            <motion.div
              onClick={() => home_content()}
              whileTap={{ scale: 0.9 }}
              className="icon_holder"
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
              variants={iconss}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={router.pathname == "/" ? "active icon_container" : "icon_container"} onClick={play}>
                <div className="icons" id="home_icon">
                  <div className="text" >
                    Home
                  </div>
                  <motion.div variants={iconSvg} className="glow" id="home_button"  initial="initial"
              animate="animate"  whileHover={{ rotate: "360deg" }}>
                    <svg id="homeIcon" width="18" height="18" viewBox="0 0 31 31" fill={iconsColor} xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z" fill={iconsColor} />
                      <defs>
                        <linearGradient id="paint0_linear_231_3060" x1="15.3662" y1="0.784485" x2="15.3662" y2="30.138" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                <div className="dot_active"></div>
              </div>
            </motion.div>
          </div>
        </Link>
        <Link href="/projects" passHref >
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            variants={iconss}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={router.pathname == "/projects" ? "active icon_container" : "icon_container"} onClick={play}>

              <div className='icons'>
                <div className="text">
                  Projects
                </div>
                <motion.div variants={iconSvg} className="glow" animate="animate"  whileHover={{ rotate: "360deg" }}>
                  <svg id="projectsIcon" width="40" height="38" viewBox="0 0 40 38" fill={iconsColor} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z" fill={iconsColor} />
                  </svg>
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>

        <Link href="/blogs" passHref >
          <motion.div
          
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}

            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >

            <div className={router.pathname == "/blogs" ? "active icon_container" : "icon_container"} onClick={play}>

              <div className='icons'>
                <div className="text">
                  Blog
                </div>
                <motion.div variants={stack} className="glow"  animate="animate"  whileHover={{ rotate: "160deg" }}>

                  <svg width="22" height="19" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66512 2.1316L8.73448 3.06137L6.93945 1.32297L7.89759 0.365724C8.13198 0.131555 8.44988 0 8.78136 0C9.11284 0 9.43073 0.131555 9.66512 0.365724C9.89951 0.599894 10.0312 0.917496 10.0312 1.24866C10.0312 1.57983 9.89951 1.89743 9.66512 2.1316Z" fill="#C7C7C7" />
                    <path d="M8.15826 3.60535L2.43629 9.32196L0 10.0001L0.668136 7.55671L6.36886 1.86133L8.15826 3.60535Z" fill="#858585" />
                  </svg>


                </motion.div>
              </div>
              <div className="dot_active"></div>
            </div>
          </motion.div>


        </Link>
        <Link href="/about" passHref >
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={router.pathname == "/about" ? "active icon_container" : "icon_container"} onClick={play}>

              <div className='icons'>
                <div className="text">
                  About
                </div>
                <motion.div variants={stack} className="glow">
                  <svg width="10" height="20" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00075 0C3.60019 0 2.46094 1.13925 2.46094 2.53981C2.46094 3.94022 3.60019 5.07951 5.00075 5.07951C6.4013 5.07951 7.54056 3.94026 7.54056 2.5397C7.54056 1.13915 6.4013 0 5.00075 0Z" fill="#858585" />
                    <path d="M0 11.0138H10V10.6191C10 7.7045 7.80369 5.42188 5.00018 5.42188C2.19628 5.42188 0.000352254 7.70468 0.000352254 10.6191L0.000214579 11.0138H0Z" fill="#C7C7C7" />
                  </svg>

                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>
        <Link href={"/oasis"} passHref>
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={router.pathname == "/oasis" ? "active icon_container" : "icon_container"} onClick={play}>
            
                <div className='icons'>
                  <div className="text">
                    Oasis
                  </div>
                  <motion.div animate="animate"  whileHover={{ rotate: "160deg" }} variants={twittter} className="glow">
                    <svg width="30" height="19" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="4.88889" height="4.88889" rx="1.22222" fill="#858585" />
                      <rect y="6.11133" width="4.88889" height="4.88889" rx="1.22222" fill="#858585" />
                      <rect x="6.11133" width="4.88889" height="4.88889" rx="1.22222" fill="#858585" />
                      <rect x="6.11133" y="6.11133" width="4.88889" height="4.88889" rx="2.44444" fill="#D8D8D8" />
                    </svg>

                  </motion.div>
                </div>
                <div className="dot_active"></div>
             
            </div>
          </motion.div>
        </Link>
       
        
        <Link href={"/spark"}  passHref >
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={router.pathname == "/spark" ? "active icon_container" : "icon_container"} onClick={play}>

              <div className='icons'>
                <div className="text">
                  Spark
                </div>
                <motion.div variants={insta} className="glow"  animate="animate"  whileHover={{ rotate: "20deg" }}>
                  {/* <svg width="15" height="20" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.8493 52.0444L54.2141 17.1589H47.777V10.1705C47.777 4.56247 43.212 0 37.6006 0H23.3989C17.7877 0 13.2226 4.56235 13.2226 10.1705V17.1589H6.78547L0.150257 52.0444C-0.832712 57.2132 3.13192 62 8.39664 62H52.6038C57.8681 62 61.8327 57.2132 60.8497 52.0444H60.8493ZM41.988 17.1589H19.0116V10.1705C19.0116 7.75278 20.9798 5.78569 23.3989 5.78569H37.6006C40.0197 5.78569 41.988 7.75278 41.988 10.1705V17.1589Z" fill="#858585" />
                  </svg> */}
                  <svg width="62" height="91" viewBox="0 0 62 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_315_49" fill={iconsColor}>
                  <path d="M61.2995 18.3723C61.0905 18.011 60.6316 17.8938 60.2742 18.1008L32.9772 33.9532L43.7358 15.2084C43.9428 14.849 43.8178 14.392 43.4585 14.185C43.103 13.976 42.6402 14.1029 42.4351 14.4623L31.6747 33.2103L31.5957 1.63864C31.5938 1.2246 31.2598 0.890625 30.8457 0.890625H30.8438C30.4298 0.892578 30.0938 1.2285 30.0958 1.64255L30.1746 33.1645L22.6059 19.8859C22.3988 19.5246 21.9379 19.4015 21.5825 19.6047C21.2231 19.8097 21.0962 20.2687 21.3012 20.628L28.9155 33.9857L1.49937 18.2492C1.14196 18.0403 0.682997 18.1672 0.475973 18.5266C0.268951 18.8859 0.393946 19.3429 0.753305 19.55L28.1105 35.2527L11.9599 35.2856C11.5458 35.2856 11.2118 35.6215 11.2118 36.0375C11.2118 36.4496 11.5478 36.7856 11.9618 36.7856H11.9638L28.0391 36.7527L4.88594 49.5741C4.52267 49.7752 4.39182 50.2303 4.59298 50.5935C4.7297 50.8416 4.98554 50.9802 5.2492 50.9802C5.37225 50.9802 5.49724 50.951 5.61247 50.8865L28.9456 37.9653L19.274 54.816C19.067 55.1754 19.192 55.6324 19.5513 55.8394C19.6685 55.9078 19.7974 55.939 19.9243 55.939C20.1841 55.939 20.436 55.8043 20.5747 55.5621L30.1701 38.8439L29.961 90.1368C29.9591 90.5527 30.293 90.8887 30.7071 90.8906H30.711C31.1231 90.8906 31.459 90.5567 31.461 90.1446L31.6704 38.7738L46.2923 63.9523C46.431 64.1926 46.6829 64.3254 46.9408 64.3254C47.0697 64.3254 47.1986 64.2922 47.3177 64.2238C47.6751 64.0168 47.7981 63.5578 47.5892 63.1985L32.9857 38.0509L51.9112 48.9139C52.0284 48.9823 52.1573 49.0135 52.2843 49.0135C52.544 49.0135 52.796 48.8788 52.9346 48.6366C53.1417 48.2772 53.0167 47.8202 52.6573 47.6132L33.7159 36.7411L53.0499 36.7016C53.4639 36.6996 53.7998 36.3637 53.7979 35.9497C53.7959 35.5356 53.462 35.2016 53.0479 35.2016H53.046L33.7461 35.2411L61.028 19.3976C61.3854 19.1906 61.5085 18.7316 61.2995 18.3723Z"/>
                  </mask>
                  <path d="M61.2995 18.3723C61.0905 18.011 60.6316 17.8938 60.2742 18.1008L32.9772 33.9532L43.7358 15.2084C43.9428 14.849 43.8178 14.392 43.4585 14.185C43.103 13.976 42.6402 14.1029 42.4351 14.4623L31.6747 33.2103L31.5957 1.63864C31.5938 1.2246 31.2598 0.890625 30.8457 0.890625H30.8438C30.4298 0.892578 30.0938 1.2285 30.0958 1.64255L30.1746 33.1645L22.6059 19.8859C22.3988 19.5246 21.9379 19.4015 21.5825 19.6047C21.2231 19.8097 21.0962 20.2687 21.3012 20.628L28.9155 33.9857L1.49937 18.2492C1.14196 18.0403 0.682997 18.1672 0.475973 18.5266C0.268951 18.8859 0.393946 19.3429 0.753305 19.55L28.1105 35.2527L11.9599 35.2856C11.5458 35.2856 11.2118 35.6215 11.2118 36.0375C11.2118 36.4496 11.5478 36.7856 11.9618 36.7856H11.9638L28.0391 36.7527L4.88594 49.5741C4.52267 49.7752 4.39182 50.2303 4.59298 50.5935C4.7297 50.8416 4.98554 50.9802 5.2492 50.9802C5.37225 50.9802 5.49724 50.951 5.61247 50.8865L28.9456 37.9653L19.274 54.816C19.067 55.1754 19.192 55.6324 19.5513 55.8394C19.6685 55.9078 19.7974 55.939 19.9243 55.939C20.1841 55.939 20.436 55.8043 20.5747 55.5621L30.1701 38.8439L29.961 90.1368C29.9591 90.5527 30.293 90.8887 30.7071 90.8906H30.711C31.1231 90.8906 31.459 90.5567 31.461 90.1446L31.6704 38.7738L46.2923 63.9523C46.431 64.1926 46.6829 64.3254 46.9408 64.3254C47.0697 64.3254 47.1986 64.2922 47.3177 64.2238C47.6751 64.0168 47.7981 63.5578 47.5892 63.1985L32.9857 38.0509L51.9112 48.9139C52.0284 48.9823 52.1573 49.0135 52.2843 49.0135C52.544 49.0135 52.796 48.8788 52.9346 48.6366C53.1417 48.2772 53.0167 47.8202 52.6573 47.6132L33.7159 36.7411L53.0499 36.7016C53.4639 36.6996 53.7998 36.3637 53.7979 35.9497C53.7959 35.5356 53.462 35.2016 53.0479 35.2016H53.046L33.7461 35.2411L61.028 19.3976C61.3854 19.1906 61.5085 18.7316 61.2995 18.3723Z" fill={iconsColor}/>
                  <path d="M61.2995 18.3723L54.3743 22.3775L54.3791 22.3857L54.3838 22.3939L61.2995 18.3723ZM60.2742 18.1008L56.2644 11.1783L56.2566 11.1828L60.2742 18.1008ZM32.9772 33.9532L26.0389 29.9709L11.1773 55.8644L36.9948 40.8712L32.9772 33.9532ZM43.7358 15.2084L36.8038 11.2149L36.7974 11.2261L43.7358 15.2084ZM43.4585 14.185L39.404 21.0814L39.4344 21.0993L39.4651 21.117L43.4585 14.185ZM42.4351 14.4623L49.3735 18.4446L49.3784 18.436L49.3833 18.4274L42.4351 14.4623ZM31.6747 33.2103L23.6747 33.2303L23.7494 63.0897L38.6131 37.1926L31.6747 33.2103ZM31.5957 1.63864L39.5957 1.61863L39.5957 1.60977L39.5956 1.6009L31.5957 1.63864ZM30.8438 0.890625V-7.10938H30.8249L30.8061 -7.10929L30.8438 0.890625ZM30.0958 1.64255L38.0958 1.62253L38.0957 1.61367L38.0957 1.60481L30.0958 1.64255ZM30.1746 33.1645L23.2244 37.1261L38.2505 63.4878L38.1746 33.1445L30.1746 33.1645ZM22.6059 19.8859L29.5561 15.9243L29.5517 15.9165L29.5472 15.9087L22.6059 19.8859ZM21.5825 19.6047L25.5475 26.5529L25.5516 26.5506L21.5825 19.6047ZM21.3012 20.628L28.2514 16.6663L28.2495 16.663L21.3012 20.628ZM28.9155 33.9857L24.9331 40.924L50.4172 55.5516L35.8657 30.024L28.9155 33.9857ZM1.49937 18.2492L-2.53863 25.1554L-2.51094 25.1716L-2.48311 25.1875L1.49937 18.2492ZM0.475973 18.5266L-6.45601 14.5331L-6.45603 14.5332L0.475973 18.5266ZM0.753305 19.55L-3.24012 26.482L-3.22918 26.4883L0.753305 19.55ZM28.1105 35.2527L28.1268 43.2526L58.0122 43.1917L32.093 28.3144L28.1105 35.2527ZM11.9599 35.2856V43.2856H11.968L11.9762 43.2856L11.9599 35.2856ZM11.9638 36.7856V44.7856H11.9719L11.9801 44.7855L11.9638 36.7856ZM28.0391 36.7527L31.9147 43.7513L28.0228 28.7527L28.0391 36.7527ZM4.88594 49.5741L8.76145 56.5727L8.76149 56.5726L4.88594 49.5741ZM4.59298 50.5935L11.5992 46.7318L11.5954 46.7249L11.5916 46.718L4.59298 50.5935ZM5.61247 50.8865L1.73687 43.888L1.72206 43.8962L1.70728 43.9044L5.61247 50.8865ZM28.9456 37.9653L35.8839 41.9476L50.1616 17.0717L25.07 30.9668L28.9456 37.9653ZM19.274 54.816L26.206 58.8095L26.2124 58.7983L19.274 54.816ZM19.5513 55.8394L23.5825 48.9293L23.5636 48.9183L23.5447 48.9074L19.5513 55.8394ZM20.5747 55.5621L13.6363 51.5798L13.6322 51.587L20.5747 55.5621ZM30.1701 38.8439L38.1701 38.8765L38.2934 8.61958L23.2317 34.8616L30.1701 38.8439ZM29.961 90.1368L37.9609 90.1743L37.961 90.1694L29.961 90.1368ZM30.7071 90.8906L30.6693 98.8905L30.6882 98.8906H30.7071V90.8906ZM31.461 90.1446L39.4609 90.1825L39.4609 90.1772L31.461 90.1446ZM31.6704 38.7738L38.5885 34.7562L23.7906 9.27471L23.6705 38.7411L31.6704 38.7738ZM46.2923 63.9523L53.2209 59.9529L53.2157 59.9439L53.2104 59.9348L46.2923 63.9523ZM47.3177 64.2238L51.2992 71.1626L51.3134 71.1545L51.3275 71.1464L47.3177 64.2238ZM47.5892 63.1985L40.671 67.2159L40.6735 67.2201L47.5892 63.1985ZM32.9857 38.0509L36.9682 31.1126L11.0746 16.25L26.0676 42.0683L32.9857 38.0509ZM51.9112 48.9139L55.9422 42.0037L55.918 41.9896L55.8937 41.9757L51.9112 48.9139ZM52.9346 48.6366L46.0027 44.6431L45.9974 44.6523L45.9921 44.6615L52.9346 48.6366ZM52.6573 47.6132L56.6508 40.6812L56.6398 40.6749L52.6573 47.6132ZM33.7159 36.7411L33.6995 28.7411L3.81431 28.8023L29.7334 43.6794L33.7159 36.7411ZM53.0499 36.7016L53.0662 44.7016L53.0769 44.7015L53.0876 44.7015L53.0499 36.7016ZM53.7979 35.9497L45.798 35.9874L45.798 35.9874L53.7979 35.9497ZM53.046 35.2016V27.2016H53.0378L53.0296 27.2017L53.046 35.2016ZM33.7461 35.2411L29.7286 28.323L3.93528 43.302L33.7625 43.241L33.7461 35.2411ZM61.028 19.3976L57.0183 12.4751L57.0105 12.4796L61.028 19.3976ZM68.2247 14.367C65.7678 10.119 60.3863 8.79073 56.2644 11.1783L64.2839 25.0234C60.8769 26.9969 56.4133 25.9029 54.3743 22.3775L68.2247 14.367ZM56.2566 11.1828L28.9597 27.0351L36.9948 40.8712L64.2917 25.0188L56.2566 11.1828ZM39.9156 37.9354L50.6742 19.1907L36.7974 11.2261L26.0389 29.9709L39.9156 37.9354ZM50.6678 19.2018C53.1 14.98 51.6056 9.64583 47.4519 7.25297L39.4651 21.117C36.0301 19.1382 34.7857 14.7181 36.8038 11.2149L50.6678 19.2018ZM47.513 7.28853C43.2459 4.77983 37.8625 6.33423 35.4868 10.4972L49.3833 18.4274C47.4178 21.8717 42.9602 23.1722 39.404 21.0814L47.513 7.28853ZM35.4967 10.48L24.7363 29.228L38.6131 37.1926L49.3735 18.4446L35.4967 10.48ZM39.6747 33.1903L39.5957 1.61863L23.5957 1.65865L23.6747 33.2303L39.6747 33.1903ZM39.5956 1.6009C39.573 -3.19473 35.6852 -7.10938 30.8457 -7.10938V8.89062C26.8344 8.89062 23.6145 5.64392 23.5958 1.67638L39.5956 1.6009ZM30.8457 -7.10938H30.8438V8.89062H30.8457V-7.10938ZM30.8061 -7.10929C26.0179 -7.0867 22.0729 -3.19594 22.0959 1.68028L38.0957 1.60481C38.1148 5.65294 34.8416 8.87186 30.8815 8.89054L30.8061 -7.10929ZM22.0958 1.66256L22.1747 33.1845L38.1746 33.1445L38.0958 1.62253L22.0958 1.66256ZM37.1249 29.2029L29.5561 15.9243L15.6556 23.8475L23.2244 37.1261L37.1249 29.2029ZM29.5472 15.9087C27.1473 11.7202 21.8051 10.2634 17.6134 12.6587L25.5516 26.5506C22.0708 28.5396 17.6504 27.3289 15.6646 23.8631L29.5472 15.9087ZM17.6174 12.6564C13.4452 15.0373 11.9441 20.3719 14.353 24.5931L28.2495 16.663C30.2482 20.1655 29.0011 24.5821 25.5475 26.5529L17.6174 12.6564ZM14.3511 24.5898L21.9654 37.9475L35.8657 30.024L28.2514 16.6663L14.3511 24.5898ZM32.898 27.0475L5.48185 11.311L-2.48311 25.1875L24.9331 40.924L32.898 27.0475ZM5.53736 11.3431C1.26085 8.84265 -4.0844 10.4164 -6.45601 14.5331L7.40796 22.52C5.4504 25.918 1.02308 27.2379 -2.53863 25.1554L5.53736 11.3431ZM-6.45603 14.5332C-8.88818 18.755 -7.39374 24.0891 -3.24011 26.482L4.74672 12.618C8.18164 14.5968 9.42609 19.0168 7.40797 22.52L-6.45603 14.5332ZM-3.22918 26.4883L24.128 42.1909L32.093 28.3144L4.73579 12.6117L-3.22918 26.4883ZM28.0942 27.2527L11.9435 27.2856L11.9762 43.2856L28.1268 43.2526L28.0942 27.2527ZM11.9599 27.2856C7.08683 27.2856 3.21184 31.2441 3.21184 36.0375H19.2118C19.2118 39.999 16.0048 43.2856 11.9599 43.2856V27.2856ZM3.21184 36.0375C3.21184 40.8814 7.14302 44.7856 11.9618 44.7856V28.7856C15.9525 28.7856 19.2118 32.0178 19.2118 36.0375H3.21184ZM11.9618 44.7856H11.9638V28.7856H11.9618V44.7856ZM11.9801 44.7855L28.0554 44.7527L28.0228 28.7527L11.9474 28.7856L11.9801 44.7855ZM24.1636 29.7541L1.01039 42.5755L8.76149 56.5726L31.9147 43.7513L24.1636 29.7541ZM1.01043 42.5755C-3.21543 44.9156 -4.74864 50.238 -2.40559 54.4691L11.5916 46.718C13.5323 50.2226 12.2608 54.6349 8.76145 56.5727L1.01043 42.5755ZM-2.41324 54.4553C-0.804748 57.3735 2.20716 58.9802 5.2492 58.9802V42.9802C7.76393 42.9802 10.2641 44.3096 11.5992 46.7318L-2.41324 54.4553ZM5.2492 58.9802C6.64851 58.9802 8.13204 58.6436 9.51766 57.8686L1.70728 43.9044C2.86244 43.2583 4.09598 42.9802 5.2492 42.9802V58.9802ZM9.48807 57.8851L32.8212 44.9639L25.07 30.9668L1.73687 43.888L9.48807 57.8851ZM22.0072 33.983L12.3356 50.8337L26.2124 58.7983L35.8839 41.9476L22.0072 33.983ZM12.342 50.8226C9.90981 55.0445 11.4043 60.3786 15.5579 62.7714L23.5447 48.9074C26.9796 50.8862 28.2241 55.3063 26.206 58.8095L12.342 50.8226ZM15.5202 62.7495C16.9455 63.581 18.4822 63.939 19.9243 63.939V47.939C21.1126 47.939 22.3915 48.2345 23.5825 48.9293L15.5202 62.7495ZM19.9243 63.939C22.9341 63.939 25.8955 62.3696 27.5172 59.5371L13.6322 51.587C14.9766 49.2389 17.4341 47.939 19.9243 47.939V63.939ZM27.5131 59.5444L37.1085 42.8262L23.2317 34.8616L13.6363 51.5798L27.5131 59.5444ZM22.1702 38.8113L21.9611 90.1041L37.961 90.1694L38.1701 38.8765L22.1702 38.8113ZM21.9611 90.0992C21.9384 94.9365 25.8403 98.8678 30.6693 98.8905L30.7448 82.8907C34.7458 82.9096 37.9797 86.169 37.9609 90.1743L21.9611 90.0992ZM30.7071 98.8906H30.711V82.8906H30.7071V98.8906ZM30.711 98.8906C35.5215 98.8906 39.438 95.0031 39.4609 90.1825L23.461 90.1067C23.48 86.1102 26.7247 82.8906 30.711 82.8906V98.8906ZM39.4609 90.1772L39.6704 38.8064L23.6705 38.7411L23.461 90.1119L39.4609 90.1772ZM24.7524 42.7913L39.3743 67.9699L53.2104 59.9348L38.5885 34.7562L24.7524 42.7913ZM39.3638 67.9518C41.0032 70.7918 43.971 72.3254 46.9408 72.3254V56.3254C49.3949 56.3254 51.8588 57.5933 53.2209 59.9529L39.3638 67.9518ZM46.9408 72.3254C48.4653 72.3254 49.9671 71.927 51.2992 71.1626L43.3361 57.285C44.43 56.6573 45.674 56.3254 46.9408 56.3254V72.3254ZM51.3275 71.1464C55.5095 68.724 56.9395 63.3635 54.5048 59.1768L40.6735 67.2201C38.6568 63.7521 39.8407 59.3096 43.3079 57.3013L51.3275 71.1464ZM54.5073 59.181L39.9038 34.0335L26.0676 42.0683L40.671 67.2159L54.5073 59.181ZM29.0032 44.9892L47.9288 55.8522L55.8937 41.9757L36.9682 31.1126L29.0032 44.9892ZM47.8802 55.8241C49.3056 56.6556 50.8423 57.0135 52.2843 57.0135V41.0135C53.4724 41.0135 54.7512 41.3089 55.9422 42.0037L47.8802 55.8241ZM52.2843 57.0135C55.2941 57.0135 58.2554 55.4441 59.8772 52.6117L45.9921 44.6615C47.3365 42.3134 49.794 41.0135 52.2843 41.0135V57.0135ZM59.8666 52.63C62.2989 48.408 60.8042 43.074 56.6507 40.6812L48.6639 54.5452C45.2291 52.5665 43.9844 48.1464 46.0027 44.6431L59.8666 52.63ZM56.6398 40.6749L37.6983 29.8028L29.7334 43.6794L48.6748 54.5515L56.6398 40.6749ZM33.7322 44.7411L53.0662 44.7016L53.0335 28.7016L33.6995 28.7411L33.7322 44.7411ZM53.0876 44.7015C57.8757 44.6789 61.8208 40.7882 61.7978 35.9119L45.798 35.9874C45.7789 31.9392 49.0521 28.7203 53.0121 28.7017L53.0876 44.7015ZM61.7978 35.9119C61.7752 31.1163 57.8874 27.2016 53.0479 27.2016V43.2016C49.0365 43.2016 45.8167 39.9549 45.798 35.9874L61.7978 35.9119ZM53.0479 27.2016H53.046V43.2016H53.0479V27.2016ZM53.0296 27.2017L33.7298 27.2411L33.7625 43.241L53.0623 43.2016L53.0296 27.2017ZM37.7637 42.1591L65.0456 26.3157L57.0105 12.4796L29.7286 28.323L37.7637 42.1591ZM65.0378 26.3202C69.2198 23.8978 70.6498 18.5373 68.2152 14.3507L54.3838 22.3939C52.3671 18.926 53.5511 14.4834 57.0183 12.4751L65.0378 26.3202Z" fill="black" mask="url(#path-1-inside-1_315_49)"/>
                  <circle cx="31" cy="36" r="8" fill={iconsColor}/>
                  </svg>




<svg width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="31" cy="36" r="7" fill={iconsColor}/>
<path d="M31 1L31 91" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
<path d="M43.1621 15L19 56" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
<path d="M22 20L47 64" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
<path d="M5 50L60.8264 19.0001" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
<path d="M56.3008 50.9277L0.999929 18.9998" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
<path d="M54 36H11" stroke={iconsColor} stroke-width="2" stroke-miterlimit="4.2899" stroke-linecap="round"/>
</svg>

                </motion.div>
              </div>
              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>
        <a className="twitIcon" href='https://x.com/sadiq_moo' target="_blank" rel="noreferrer">
              <motion.div
                className="icon_holder drop_icons "
                initial="initial"
                animate="animate"
                whileTap={{ scale: 0.9 }}
                variants={iconss}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div onClick={play}>

                  <div className='icons' >
                    <div className="text">
                      X
                    </div>
                    <motion.div variants={insta} className="glow"  animate="animate"  whileHover={{ rotate: "10deg" }}>

                    <svg width="10" height="10" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  fillRule="evenodd" clipRule="evenodd" d="M8.02344 0L13.6602 8.00977L20.5 0H23L14.7891 9.61328L24.9141 24H16.9785L10.4375 14.707L2.5 24H0L9.30859 13.1035L0.0859385 0H8.02344ZM3.91406 2L18.0215 22H21.0859L6.97852 2H3.91406Z" fill={iconsColor}/>
</svg>

{/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path fill={iconsColor} d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/></svg> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">

<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/></svg>
                        <path d="M17.7887 1.95309C17.1468 2.2316 16.4678 2.41571 15.7731 2.4997C16.506 2.06183 17.0553 1.37298 17.319 0.560929C16.6302 0.970944 15.8762 1.25982 15.0898 1.41501C14.5642 0.844974 13.8642 0.465525 13.0996 0.336178C12.3351 0.206831 11.5493 0.334903 10.8653 0.700307C10.1814 1.06571 9.63814 1.64778 9.32069 2.35522C9.00323 3.06267 8.92956 3.85547 9.11123 4.60929C7.71858 4.53885 6.35633 4.17623 5.11296 3.54498C3.8696 2.91374 2.77293 2.02799 1.89421 0.945267C1.586 1.48349 1.42405 2.09301 1.42446 2.71322C1.42337 3.2892 1.56472 3.85652 1.83592 4.36465C2.10713 4.87279 2.49977 5.30598 2.9789 5.62565C2.42202 5.6105 1.87703 5.46107 1.3903 5.19007V5.23278C1.39447 6.03979 1.67727 6.8206 2.19085 7.44312C2.70443 8.06564 3.41726 8.49166 4.20878 8.64912C3.90409 8.74184 3.58775 8.79073 3.26929 8.79431C3.04884 8.79174 2.82894 8.77174 2.61164 8.73452C2.83704 9.42874 3.27324 10.0354 3.85952 10.4702C4.44581 10.9049 5.15304 11.1461 5.88279 11.1601C4.65052 12.1297 3.12912 12.6589 1.56112 12.6633C1.27563 12.6643 0.990362 12.6471 0.707031 12.6121C2.30795 13.6457 4.1736 14.1945 6.07923 14.1921C7.39426 14.2058 8.69882 13.9573 9.91673 13.4611C11.1346 12.9649 12.2415 12.2311 13.1726 11.3023C14.1037 10.3736 14.8404 9.26866 15.3397 8.05203C15.839 6.8354 16.0908 5.53147 16.0806 4.21641C16.0806 4.07122 16.0806 3.91748 16.0806 3.76375C16.7508 3.26395 17.3288 2.65124 17.7887 1.95309Z" fill={iconsColor} />
                      </svg> */}
                    </motion.div>
                  </div>
                  <div className="dot_active"></div>
                </div>
              </motion.div>
            </a>
        {/* <motion.div

          onMouseOut={() => changeOpOff()}
          onMouseOver={() => changeOpOn()}
          className="icon_holder "
          initial="initial"
          animate="animate"
          whileTap={{ scale: 0.9 }}
          variants={iconss}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="dropMedia" style={op}>
            <div className='arrow_drop'>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.03846 5.99977L0.5 3.46131V2.19208V1.76901V0.922852L3.03846 3.46131L6 0.922852V1.76901V3.46131L3.03846 5.99977Z" fill={iconsColor} />
                <path d="M0.5 1.76901V2.19208M0.5 2.19208V3.46131L3.03846 5.99977L6 3.46131V1.76901V0.922852L3.03846 3.46131L0.5 0.922852V2.19208Z" stroke={iconsColor} strokeWidth="0.846154" strokeLinejoin="round" />
                <path d="M3.03846 11.0769L0.5 8.53846V7.26923V6.84615V6L3.03846 8.96154L6 6V6.84615V8.53846L3.03846 11.0769Z" fill={iconsColor} />
                <path d="M0.5 6.84615V7.26923M0.5 7.26923V8.53846L3.03846 11.0769L6 8.53846V6.84615V6L3.03846 8.96154L0.5 6V7.26923Z" stroke={iconsColor} strokeWidth="0.846154" strokeLinejoin="round" />
              </svg>
            </div>
            <a href='https://twitter.com/sadiq_moo' target="_blank" rel="noreferrer">
              <motion.div
                className="icon_holder drop_icons"
                initial="initial"
                animate="animate"
                whileTap={{ scale: 0.9 }}
                variants={iconss}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div onClick={play}>

                  <div className='icons' >
                    <div className="text">
                      Twitter
                    </div>
                    <motion.div variants={insta} className="glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                        <path d="M17.7887 1.95309C17.1468 2.2316 16.4678 2.41571 15.7731 2.4997C16.506 2.06183 17.0553 1.37298 17.319 0.560929C16.6302 0.970944 15.8762 1.25982 15.0898 1.41501C14.5642 0.844974 13.8642 0.465525 13.0996 0.336178C12.3351 0.206831 11.5493 0.334903 10.8653 0.700307C10.1814 1.06571 9.63814 1.64778 9.32069 2.35522C9.00323 3.06267 8.92956 3.85547 9.11123 4.60929C7.71858 4.53885 6.35633 4.17623 5.11296 3.54498C3.8696 2.91374 2.77293 2.02799 1.89421 0.945267C1.586 1.48349 1.42405 2.09301 1.42446 2.71322C1.42337 3.2892 1.56472 3.85652 1.83592 4.36465C2.10713 4.87279 2.49977 5.30598 2.9789 5.62565C2.42202 5.6105 1.87703 5.46107 1.3903 5.19007V5.23278C1.39447 6.03979 1.67727 6.8206 2.19085 7.44312C2.70443 8.06564 3.41726 8.49166 4.20878 8.64912C3.90409 8.74184 3.58775 8.79073 3.26929 8.79431C3.04884 8.79174 2.82894 8.77174 2.61164 8.73452C2.83704 9.42874 3.27324 10.0354 3.85952 10.4702C4.44581 10.9049 5.15304 11.1461 5.88279 11.1601C4.65052 12.1297 3.12912 12.6589 1.56112 12.6633C1.27563 12.6643 0.990362 12.6471 0.707031 12.6121C2.30795 13.6457 4.1736 14.1945 6.07923 14.1921C7.39426 14.2058 8.69882 13.9573 9.91673 13.4611C11.1346 12.9649 12.2415 12.2311 13.1726 11.3023C14.1037 10.3736 14.8404 9.26866 15.3397 8.05203C15.839 6.8354 16.0908 5.53147 16.0806 4.21641C16.0806 4.07122 16.0806 3.91748 16.0806 3.76375C16.7508 3.26395 17.3288 2.65124 17.7887 1.95309Z" fill={iconsColor} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="dot_active"></div>
                </div>
              </motion.div>
            </a>
            <a href='https://www.instagram.com/_mohamedsadiq/' target="_blank" rel="noreferrer">
              <motion.div
                className="icon_holder drop_icons"
                initial="initial"
                animate="animate"
                whileTap={{ scale: 0.9 }}
                variants={iconss}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div onClick={play}>

                  <div className='icons'>
                    <div className="text">
                      Instagram
                    </div>
                    <motion.div variants={insta} className="glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M5.09072 0.732422C2.46612 0.732422 0.332031 2.86651 0.332031 5.49111V12.0801C0.332031 14.7047 2.46612 16.8388 5.09072 16.8388H11.6797C14.3043 16.8388 16.4384 14.7047 16.4384 12.0801V5.49111C16.4384 2.86651 14.3043 0.732422 11.6797 0.732422H5.09072ZM12.7778 3.66085C13.1805 3.66085 13.5099 3.99029 13.5099 4.39295C13.5099 4.79561 13.1805 5.12506 12.7778 5.12506C12.3752 5.12506 12.0457 4.79561 12.0457 4.39295C12.0457 3.99029 12.3752 3.66085 12.7778 3.66085ZM8.3852 4.75901C10.6071 4.75901 12.4118 6.56365 12.4118 8.78559C12.4118 11.0075 10.6071 12.8122 8.3852 12.8122C6.16326 12.8122 4.35861 11.0075 4.35861 8.78559C4.35861 6.56365 6.16326 4.75901 8.3852 4.75901ZM8.3852 5.49111C6.56957 5.49111 5.09072 6.96997 5.09072 8.78559C5.09072 10.6012 6.56957 12.0801 8.3852 12.0801C10.2008 12.0801 11.6797 10.6012 11.6797 8.78559C11.6797 6.96997 10.2008 5.49111 8.3852 5.49111Z" fill={iconsColor} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="dot_active"></div>
                </div>
              </motion.div>
            </a>
            <a href='https://dribbble.com/Mohamed-Sadiq' target="_blank" rel="noreferrer">
              <motion.div
                className="icon_holder drop_icons"
                initial="initial"
                animate="animate"
                whileTap={{ scale: 0.9 }}
                variants={iconss}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div onClick={play}>

                  <div className='icons'>
                    <div className="text">
                      Dribbble
                    </div>
                    <motion.div variants={insta} className="glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_748_3415)">
                          <path d="M7.99961 15.3996C3.91921 15.3996 0.599609 12.08 0.599609 7.99961C0.599609 3.91921 3.91921 0.599609 7.99961 0.599609C12.08 0.599609 15.3996 3.91921 15.3996 7.99961C15.3996 12.08 12.08 15.3996 7.99961 15.3996Z" fill={iconsColor} />
                          <path d="M8.00039 0.800391C11.9704 0.800391 15.2004 4.03039 15.2004 8.00039C15.2004 11.9704 11.9704 15.2004 8.00039 15.2004C4.03039 15.2004 0.800391 11.9704 0.800391 8.00039C0.800391 4.03039 4.03039 0.800391 8.00039 0.800391ZM8.00039 0.400391C3.80319 0.400391 0.400391 3.80319 0.400391 8.00039C0.400391 12.1976 3.80319 15.6004 8.00039 15.6004C12.1976 15.6004 15.6004 12.1976 15.6004 8.00039C15.6004 3.80319 12.1976 0.400391 8.00039 0.400391Z" fill="black" />
                          <path d="M11.341 14.7656C11.341 14.7656 10.1282 6.33083 5.08901 1.04883M0.507812 7.13923C0.507812 7.13923 10.1878 7.98603 13.3378 2.69843M3.12181 13.6608C3.12181 13.6608 6.57141 5.73803 15.545 8.78323" stroke="black" strokeWidth="0.4" strokeMiterlimit="10" />
                        </g>
                        <defs>
                          <clipPath id="clip0_748_3415">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </motion.div>

                  </div>
                  <div className="dot_active"></div>
                </div>
              </motion.div>
            </a>
          </div> */}
          {/* <div className="icon_container mediaIcons" onClick={() => onClickShow()}>
            <a  >

              <div className='icons'>
                <div className="text">
                  Media
                </div>

                <motion.div variants={twittter} className="glow">
                  <svg width="44" height="22" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.953053 10.0338L2.97691 6.63549C3.02868 6.54857 3.13632 6.51271 3.22987 6.55123L6.59453 7.93654C6.76601 8.00715 6.76197 8.25141 6.58825 8.31631L1.19973 10.3293C1.01921 10.3968 0.854448 10.1994 0.953053 10.0338Z" fill="#D9D9D9" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.24574 9.50711C8.87106 9.50711 10.9993 7.37887 10.9993 4.75355C10.9993 2.12824 8.87106 0 6.24574 0C3.62043 0 1.49219 2.12824 1.49219 4.75355C1.49219 7.37887 3.62043 9.50711 6.24574 9.50711ZM4.79674 4.4068C4.68406 4.4068 4.59272 4.49814 4.59272 4.61082V4.93724C4.59272 5.04992 4.68406 5.14126 4.79674 5.14126H7.79576C7.90843 5.14126 7.99977 5.04992 7.99977 4.93724V4.61082C7.99977 4.49814 7.90843 4.4068 7.79576 4.4068H4.79674Z" fill="#D9D9D9" />
                    <path d="M2.41259 7.58945L7.32935 0.102099L7.72717 0.204106L8.12499 0.306114C6.92131 -0.135919 4.09367 -0.428341 2.41259 1.93823C0.731504 4.30481 1.71214 6.69179 2.41259 7.58945Z" fill="#858585" />
                  </svg>

                </motion.div>
              </div>
              <div className="dot_active"></div>
            </a>
          </div> */}
        {/* </motion.div> */}
        < div>
          <motion.div
            className="icon_holder sepereate"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="icon_container" onClick={() => {
              play()
              switchMode()
            }}>

              <div className='icons'>
                <div className="text">
                  Switch Mode
                </div>
                <motion.div variants={stack} className="glow"  animate="animate"  whileHover={{ rotate: "360deg" }}>
                  {
                    isItDarkOrLight == "light"
                      ? (<svg width="20" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.45045C9.91242 6.39813 9.55676 7.30127 8.97463 8.05419C8.3925 8.80711 7.60798 9.37867 6.71286 9.70199C5.81775 10.0253 4.84906 10.087 3.92016 9.8799C2.99125 9.67277 2.14055 9.20539 1.46758 8.53242C0.794615 7.85945 0.327225 7.00875 0.120101 6.07984C-0.087023 5.15094 -0.025314 4.18225 0.298007 3.28714C0.621329 2.39202 1.19289 1.6075 1.94581 1.02537C2.69873 0.44324 3.60187 0.0875777 4.54955 0C3.99471 0.75063 3.72772 1.67547 3.79714 2.60631C3.86655 3.53716 4.26776 4.41217 4.9278 5.0722C5.58783 5.73224 6.46284 6.13345 7.39369 6.20286C8.32453 6.27228 9.24937 6.00529 10 5.45045Z" fill={iconsColor} />
                      </svg>
                      )
                      : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18ZM22 12H23ZM12 2V1ZM12 23V22ZM20 20L19 19ZM20 4L19 5ZM4 20L5 19ZM4 4L5 5ZM1 12H2Z" fill={iconsColor} />
                        <path d="M22 12H23M12 2V1M12 23V22M20 20L19 19M20 4L19 5M4 20L5 19M4 4L5 5M1 12H2M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18Z" stroke={iconsColor} strokeWidth="1.5" strokeLinecap="round"  />
                      </svg>
                      )
                  }
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </div>
        <a href="mailto:mohamed.sadiq@outlook.sa">
          <motion.div
            className="icon_holder lastIcon"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}

            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="icon_container" onClick={play}>

              <div className='icons'>
                <div className="text">
                  Mail
                </div>
                <motion.div variants={stack} className="glow">
                  <svg id="mail_icon" width="40" height="30" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.93164 10.012V28.9841L12.4177 19.498L2.93164 10.012ZM4.81653 8.11102L16.826 20.1205C18.3428 21.6373 20.9881 21.6373 22.5048 20.1205L34.5143 8.11102H4.81653Z" fill="white" />
                    <path d="M24.3972 22.0134C23.1348 23.2771 21.4534 23.9746 19.6649 23.9746C17.8763 23.9746 16.1949 23.2771 14.9325 22.0134L14.31 21.3909L4.83203 30.8689H34.4977L25.0197 21.3909L24.3972 22.0134ZM26.9126 19.4979L36.3986 28.984V10.0119L26.9126 19.4979Z" fill={iconsColor} />
                  </svg>
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </a>
      </div>

    </motion.header>
  )
}

export default Header