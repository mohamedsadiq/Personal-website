import Link from "next/link";
import { useRouter } from "next/router";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const router = useRouter();

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !scrolling) {
      setScrolling(true);
    } else if (window.scrollY === 0 && scrolling) {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const headerClass =
    router.pathname === "/"
      ? scrolling
        ? "scrolled_header"
        : "center_header"
      : "top_fixed";

  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const isItDarkOrLight = props.modeValue;
  const changeTheValueOfMode = props.setMode;

  // light mode or dark mode
  const switchMode = () => {
    if (isItDarkOrLight == "light") {
      changeTheValueOfMode("dark");
      setIconsColor("#eee");
    }

    if (isItDarkOrLight == "dark") {
      changeTheValueOfMode("light");
      setIconsColor("#858585");
    }
    // console.log("modeValue:" + isItDarkOrLight);
    // console.log("colorValue:" + iconsColor);
  };

  // useEffect(() => {
  //   console.log(isSmall)
  // });

  const header_hex = isSmall
    ? {
        initial: {
          border: "none",
          // width: "100px",
          opacity: 1,
          overflow: "hidden",
          filter: "blur(10px)",
        },
        animate: {
          width: "22rem",
          // border: "1px solid #101010",
          opacity: 1,
          filter: "blur(0px)",
          boxShadow: " inset 0px 1px 1px #161616",
        },
        hover: {
          overflow: "visible",
          transition: {
            ease: "easeInOut",
            duration: 0,
            delay: 0,
          },
        },
      }
    : {
        initial: {
          border: "none",
          width: "6rem",
          opacity: 1,
          overflow: "hidden",
        },
        animate: {
          width: "37.7rem",
          // border: "1px solid #101010",
          opacity: 1,
          boxShadow: " inset 0px 1px 1px #161616",
        },

        hover: {
          overflow: "visible",
          transition: {
            ease: "easeInOut",
            duration: 0,
            delay: 0,
          },
        },
      };

  // Sound hook
  const [play] = useSound("");
  const [opacityContent, setOpacityContent] = useState("");
  const [iconsColor, setIconsColor] = useState("#858585");

  const home_content = () => {
    setOpacityContent("opacity");
  };

  // Router hook

  // Router hook
  const hex_animaiton = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  };

  // Dtop Menu
  const [globalMenuState, setGlobalMenuState] = useState(false);
  const dropMediaStyle = {
    styleContentShow: {
      opacity: "1",
      visibility: "visible",
      right: "-22px",
      top: "74px",
    },
    styleContentHide: {
      opacity: "0",
      visibility: "hidden",
      right: "-22px",
      top: "90px",
    },
  };

  const [op, setOp] = useState(dropMediaStyle.styleContentHide);

  const styleVar = {
    opacity: op,
  };
  const onClickShow = () => {
    // play();
    // console.log(op);
    if (globalMenuState === false) {
      setOp(dropMediaStyle.styleContentShow);
    } else {
      setOp(dropMediaStyle.styleContentHide);
    }
  };
  const changeOpOn = () => {
    setOp(dropMediaStyle.styleContentShow);
  };
  const changeOpOff = () => {
    setOp(dropMediaStyle.styleContentHide);
  };

  const iconHome = {
    initial: {
      opacity: 1,
      scale: 1,
      left: "50%",
      top: "50%",
      position: "absolute",
      zIndex: 100,
    },
    animate: {
      opacity: 0,
      scale: 0.5,
      left: "50%",
      top: "50%",
      position: "absolute",
      zIndex: 100,
    },
  };

  const header_hexdd = {
    initial: {
      border: "none",
      width: "8rem",
      opacity: 1,
      overflow: "hidden",
    },
    animate: {
      width: "39rem",
      // border: "1px solid #101010",
      opacity: 1,
    },
    hover: {
      overflow: "visible",
      transition: {
        ease: "easeInOut",
        duration: 0,
        delay: 0,
      },
    },
  };
  const iconss = {
    initial: {
      opacity: 0,
      top: "10px",
    },

    animate: {
      opacity: 1,
      top: "0",
    },
  };
  const iconSvg = {
    initial: {
      rotate: "0deg",
    },
    hover: {
      rotate: "180deg",
    },
  };
  const stack = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
  };
  const twittter = {
    initial: {
      rotate: "0",
    },
    hover: {
      rotate: "-20deg",
      duration: 3,
    },
  };
  const insta = {
    initial: {
      rotate: "0",
    },
    hover: {
      rotate: "20deg",
      duration: 3,
    },
  };
  return (
    <motion.header
      className={headerClass}
      whileHover={header_hex.hover}
      transition={{ delay: 0 }}
      initial={header_hex.initial}
      animate={header_hex.animate}
      variants={header_hex}
    >
      <div className="inner_header">
        <Link href="/" activeclassname="active" passHref>
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
              <div
                className={
                  router.pathname == "/"
                    ? "active icon_container"
                    : "icon_container"
                }
                onClick={play}
              >
                <div className="icons" id="home_icon">
                  <div className="text">Home</div>
                  <motion.div
                    variants={iconSvg}
                    className="glow"
                    id="home_button"
                    initial="initial"
                    animate="animate"
                    whileHover={{ rotate: "360deg" }}
                  >
                    <svg
                      id="homeIcon"
                      width="18"
                      height="18"
                      viewBox="0 0 31 31"
                      fill={iconsColor}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z"
                        fill={iconsColor}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_231_3060"
                          x1="15.3662"
                          y1="0.784485"
                          x2="15.3662"
                          y2="30.138"
                          gradientUnits="userSpaceOnUse"
                        >
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
        <Link href="/sparks" passHref>
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className={
                router.pathname == "/sparks"
                  ? "active icon_container"
                  : "icon_container"
              }
              onClick={play}
            >
              <div className="icons">
                <div className="text">Sparks</div>
                <motion.div
                  variants={insta}
                  className="glow"
                  animate="animate"
                  whileHover={{ rotate: "20deg" }}
                >
                  {/* <svg width="15" height="20" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.8493 52.0444L54.2141 17.1589H47.777V10.1705C47.777 4.56247 43.212 0 37.6006 0H23.3989C17.7877 0 13.2226 4.56235 13.2226 10.1705V17.1589H6.78547L0.150257 52.0444C-0.832712 57.2132 3.13192 62 8.39664 62H52.6038C57.8681 62 61.8327 57.2132 60.8497 52.0444H60.8493ZM41.988 17.1589H19.0116V10.1705C19.0116 7.75278 20.9798 5.78569 23.3989 5.78569H37.6006C40.0197 5.78569 41.988 7.75278 41.988 10.1705V17.1589Z" fill="#858585" />
                  </svg> */}

                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33329 3.49937C0.933293 5.89937 0.666626 7.89937 0.666626 25.4994C0.666626 43.0994 0.933293 45.0994 3.33329 47.4994C5.73329 49.8994 7.73329 50.166 25.3333 50.166C51.0666 50.166 50 51.2327 50 25.4994C50 -0.233967 51.0666 0.832701 25.3333 0.832701C7.73329 0.832701 5.73329 1.09937 3.33329 3.49937ZM44 10.166C44 12.566 43.2 13.6327 40.9333 13.8994C39.2 14.166 37.6 13.4994 37.2 12.2994C35.8666 8.8327 37.7333 5.89937 40.9333 6.4327C43.2 6.69937 44 7.76603 44 10.166ZM18.5333 13.4994C19.0666 15.4994 20.6666 17.0994 22.6666 17.6327C24.5333 18.0327 26 18.966 26 19.4994C26 20.0327 24.5333 20.966 22.6666 21.366C20.6666 21.8994 19.0666 23.4994 18.5333 25.4994C17.4666 29.766 15.8666 29.766 14.8 25.4994C14.2666 23.4994 12.6666 21.8994 10.6666 21.366C6.39996 20.2994 6.39996 18.6994 10.6666 17.6327C12.6666 17.0994 14.2666 15.4994 14.8 13.4994C15.2 11.6327 16.1333 10.166 16.6666 10.166C17.2 10.166 18.1333 11.6327 18.5333 13.4994ZM29.4666 33.4994C31.3333 35.2327 31.3333 35.766 29.4666 37.6327C27.4666 39.4994 27.2 39.4994 25.2 37.6327C23.6 35.8994 23.4666 35.2327 24.9333 33.6327C27.0666 31.0994 27.0666 31.0994 29.4666 33.4994Z"
                      fill={iconsColor}
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>
        <Link href="/projects" passHref>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            variants={iconss}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className={
                router.pathname == "/projects"
                  ? "active icon_container"
                  : "icon_container"
              }
              onClick={play}
            >
              <div className="icons">
                <div className="text">Projects</div>
                <motion.div
                  variants={iconSvg}
                  className="glow"
                  animate="animate"
                  whileHover={{ rotate: "360deg" }}
                >
                  <svg
                    id="projectsIcon"
                    width="40"
                    height="38"
                    viewBox="0 0 40 38"
                    fill={iconsColor}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z"
                      fill={iconsColor}
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>

       
        <Link href="/about" passHref>
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className={
                router.pathname == "/about"
                  ? "active icon_container"
                  : "icon_container"
              }
              onClick={play}
            >
              <div className="icons">
                <div className="text">About</div>
                <motion.div variants={stack} className="glow">
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00075 0C3.60019 0 2.46094 1.13925 2.46094 2.53981C2.46094 3.94022 3.60019 5.07951 5.00075 5.07951C6.4013 5.07951 7.54056 3.94026 7.54056 2.5397C7.54056 1.13915 6.4013 0 5.00075 0Z"
                      fill="#858585"
                    />
                    <path
                      d="M0 11.0138H10V10.6191C10 7.7045 7.80369 5.42188 5.00018 5.42188C2.19628 5.42188 0.000352254 7.70468 0.000352254 10.6191L0.000214579 11.0138H0Z"
                      fill="#C7C7C7"
                    />
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
            <div
              className={
                router.pathname == "/oasis"
                  ? "active icon_container"
                  : "icon_container"
              }
              onClick={play}
            >
              <div className="icons">
                <div className="text">Oasis</div>
                <motion.div
                  animate="animate"
                  whileHover={{ rotate: "160deg" }}
                  variants={twittter}
                  className="glow"
                >
                  <svg
                    width="30"
                    height="19"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="4.88889"
                      height="4.88889"
                      rx="1.22222"
                      fill="#858585"
                    />
                    <rect
                      y="6.11133"
                      width="4.88889"
                      height="4.88889"
                      rx="1.22222"
                      fill="#858585"
                    />
                    <rect
                      x="6.11133"
                      width="4.88889"
                      height="4.88889"
                      rx="1.22222"
                      fill="#858585"
                    />
                    <rect
                      x="6.11133"
                      y="6.11133"
                      width="4.88889"
                      height="4.88889"
                      rx="2.44444"
                      fill="#D8D8D8"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>

        <Link href={"/blogs"} passHref>
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className={
                router.pathname == "/blogs"
                  ? "active icon_container"
                  : "icon_container"
              }
              onClick={play}
            >
              <div className="icons">
                <div className="text">Blog</div>
                <motion.div
                  variants={stack}
                  className="glow"
                  animate="animate"
                  whileHover={{ rotate: "160deg" }}
                >
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66512 2.1316L8.73448 3.06137L6.93945 1.32297L7.89759 0.365724C8.13198 0.131555 8.44988 0 8.78136 0C9.11284 0 9.43073 0.131555 9.66512 0.365724C9.89951 0.599894 10.0312 0.917496 10.0312 1.24866C10.0312 1.57983 9.89951 1.89743 9.66512 2.1316Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M8.15826 3.60535L2.43629 9.32196L0 10.0001L0.668136 7.55671L6.36886 1.86133L8.15826 3.60535Z"
                      fill="#858585"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="dot_active"></div>
            </div>
          </motion.div>
        </Link>
        <a
          className="twitIcon"
          href="https://x.com/sadiq_moo"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            className="icon_holder drop_icons "
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="icon_container">
              <div className="icons">
                <div className="text">X.com</div>
                <motion.div
                  variants={insta}
                  className="glow"
                  animate="animate"
                  whileHover={{ rotate: "10deg" }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.02344 0L13.6602 8.00977L20.5 0H23L14.7891 9.61328L24.9141 24H16.9785L10.4375 14.707L2.5 24H0L9.30859 13.1035L0.0859385 0H8.02344ZM3.91406 2L18.0215 22H21.0859L6.97852 2H3.91406Z"
                      fill={iconsColor}
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="dot_active"></div>
            </div>
          </motion.div>
        </a>
        <div>
          <motion.div
            className="icon_holder "
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className="icon_container"
              onClick={() => {
                play();
                switchMode();
              }}
            >
              <div className="icons">
                <div className="text">Switch Mode</div>
                <motion.div
                  variants={stack}
                  className="glow"
                  animate="animate"
                  whileHover={{ rotate: "360deg" }}
                >
                  {isItDarkOrLight == "light" ? (
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5.45045C9.91242 6.39813 9.55676 7.30127 8.97463 8.05419C8.3925 8.80711 7.60798 9.37867 6.71286 9.70199C5.81775 10.0253 4.84906 10.087 3.92016 9.8799C2.99125 9.67277 2.14055 9.20539 1.46758 8.53242C0.794615 7.85945 0.327225 7.00875 0.120101 6.07984C-0.087023 5.15094 -0.025314 4.18225 0.298007 3.28714C0.621329 2.39202 1.19289 1.6075 1.94581 1.02537C2.69873 0.44324 3.60187 0.0875777 4.54955 0C3.99471 0.75063 3.72772 1.67547 3.79714 2.60631C3.86655 3.53716 4.26776 4.41217 4.9278 5.0722C5.58783 5.73224 6.46284 6.13345 7.39369 6.20286C8.32453 6.27228 9.24937 6.00529 10 5.45045Z"
                        fill={iconsColor}
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18ZM22 12H23ZM12 2V1ZM12 23V22ZM20 20L19 19ZM20 4L19 5ZM4 20L5 19ZM4 4L5 5ZM1 12H2Z"
                        fill={iconsColor}
                      />
                      <path
                        d="M22 12H23M12 2V1M12 23V22M20 20L19 19M20 4L19 5M4 20L5 19M4 4L5 5M1 12H2M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18Z"
                        stroke={iconsColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </div>
        <a href="mailto:mohamed.sadiq@outlook.sa">
          <motion.div
            className="icon_holder "
            initial="initial"
            animate="animate"
            whileTap={{ scale: 0.9 }}
            variants={iconss}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="icon_container" onClick={play}>
              <div className="icons">
                <div className="text">Mail</div>
                <motion.div variants={stack} className="glow">
                  <svg
                    id="mail_icon"
                    width="40"
                    height="30"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.93164 10.012V28.9841L12.4177 19.498L2.93164 10.012ZM4.81653 8.11102L16.826 20.1205C18.3428 21.6373 20.9881 21.6373 22.5048 20.1205L34.5143 8.11102H4.81653Z"
                      fill="white"
                    />
                    <path
                      d="M24.3972 22.0134C23.1348 23.2771 21.4534 23.9746 19.6649 23.9746C17.8763 23.9746 16.1949 23.2771 14.9325 22.0134L14.31 21.3909L4.83203 30.8689H34.4977L25.0197 21.3909L24.3972 22.0134ZM26.9126 19.4979L36.3986 28.984V10.0119L26.9126 19.4979Z"
                      fill={iconsColor}
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="dot_active"></div>
            </div>
          </motion.div>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
