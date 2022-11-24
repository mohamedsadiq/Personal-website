import Link from 'next/link';
import { useRouter } from 'next/router';
import useSound from 'use-sound';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
// import { useIsSmall } from '../hooks/utils'

const useMediaQuery = (query)  =>{
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
const useIsSmall = () => useMediaQuery("(max-width: 580px)");
const useIsMedium = () => useMediaQuery("(max-width: 768px)");
const Header = () => {
  const isSmall = useIsSmall()
  const isMedium = useIsMedium()

  // useEffect(() => {
  //   console.log(isSmall)
  // });
  
  const header_hex = isSmall
	? {
    initial: {
      border: "none",
      // width: "100px",
      opacity:1,
      overflow: "hidden"
    },
    animate: {
      width: "22rem",
      border:"1px solid #101010",
      opacity:1,
      boxShadow:" inset 0px 1px 1px #161616"
    },
    hover:{
      overflow:"visible",
      transition: {
      ease: "easeInOut",
      duration: 0,
      delay:0
      }
    }
  }
	: {
    initial: {
      border: "none",
      width: "100px !important",
      opacity:1,
      overflow: "hidden"
    },
    animate: {
      width: "39rem",
      border:"1px solid #101010",
      opacity:1,
      boxShadow:" inset 0px 1px 1px #161616"
    },
    
    hover:{
     overflow:"visible",
     transition: {
     ease: "easeInOut",
     duration: 0,
     delay:0
      }
    }
    }


  // Sound hook
  const [play] = useSound("/sound.mp3");
  const [opacityContent, setOpacityContent] = useState("")
  const home_content = () => {
    setOpacityContent("opacity")
  }
  // Router hook
  const router = useRouter();
  // Router hook
  const hex_animaiton = {
    initial:{
      opacity:1
    },
    animate:{
      opacity:0
    }
  }
  // Dtop Menu
 
  const  [globalMenuState, setGlobalMenuState] = useState(false)
  const dropMediaStyle = {
      styleContentShow: {
        opacity:"1",
      visibility:"visible",
      right: "-22px",
      top: "95px"
    },
    styleContentHide:{
      opacity:"0",
      visibility:"hidden",
      right: "-22px",
      top: "90px"
    }
  }
  const [op, setOp] = useState(dropMediaStyle.styleContentHide);

  const styleVar = {
    opacity:op
  }
  const onClickShow = () =>{
    // play();
    // console.log(op);
    if(globalMenuState ===false){
      setOp(dropMediaStyle.styleContentShow)
    }else{
      setOp(dropMediaStyle.styleContentHide)
    }

  }
  const changeOpOn = () =>{
    setOp(dropMediaStyle.styleContentShow)
  }
  const changeOpOff = () =>{
    setOp(dropMediaStyle.styleContentHide)
  }


  const iconHome = {
    initial:{
      opacity:1,
      scale: 1,
      left: "50%",
      top: "50%",
      position:"absolute",
      zIndex: 100
    },
    animate:{
      opacity:0,
      scale: 0.5,
      left: "50%",
      top: "50%",
      position:"absolute",
      zIndex: 100
    }
  }

  const header_hexdd = {
    initial: {
      border: "none",
      width: "8rem",
      opacity:1,
      overflow: "hidden"
    },
    animate: {
      width: "39rem",
      border:"1px solid #101010",
      opacity:1,
    
    },
    hover:{
     overflow:"visible",
     transition: {
      ease: "easeInOut",
      duration: 0,
      delay:0
    }
    }
  }
  const iconss = {
    initial: {
     opacity:0,
     top:"10px"
    },
   
    animate: {
      opacity:1,
      top:"0"
    }
  }
  const iconSvg = {
    initial: {
      rotate: "0deg",
    },
    hover: {
      rotate:"180deg",
    }
  }
  const stack = {
    initial: {
      scale:1,
    },
    hover: {
      scale:1.2,
    }
  }
  const twittter = {
    initial: {
      rotate:"0",
    },
    hover: {
      rotate:"-20deg",
      duration:3
    }
  }
  const insta = {
    initial: {
      rotate:"0",
    },
    hover: {
      rotate:"20deg",
      duration:3
    }
  }
    return (
      <motion.header
        className={router.pathname == "/" ? "center_header" : "top_fixed"}
        whileHover={header_hex.hover}
        initial="initial"
        animate="animate"
        variants={header_hex}
        transition={{ type: "spring" , delay: 1.2  ,ease:"easeInOut", }}
      >
     
        <div className='inner_header'>
        <Link href="/" activeClassName="active" passHref >

        <motion.div onClick={ () => home_content()} className={opacityContent} initial="initial" whileHover="hover">
          <div  className={router.pathname == "/" ? "active icon_container" : "icon_container"}  onClick={play}>
          <div className="icons" id="home_icon">
          <div className="text" >
            Home
          </div>
          <motion.div 
            className='icon_home_ani'
            animate="animate"
            variants={iconHome}
            transition={{ duration: 1, type: "spring", delay: 8 , ease:"easeInOut"}}
          >

           <motion.div className='hex center'>
           <motion.div 
               className='hex_img hex3' 
              //  animate="animate"
              //  variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 4 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 3.1 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 3 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.9 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.8 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.7 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.6 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.5 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.4 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.2 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.8 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.6 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.4 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.2 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.8 , ease:"easeInOut"}}
              ></motion.div>
              <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.6 , ease:"easeInOut"}}
              ></motion.div>

              <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.4 , ease:"easeInOut"}}
              ></motion.div>
           </motion.div>

          </motion.div>
        
              <motion.div variants={iconSvg} className="glow" id="home_button">
                <svg id="homeIcon" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z" fill="url(#paint0_linear_231_3060)"/>
                    <defs>
                    <linearGradient id="paint0_linear_231_3060" x1="15.3662" y1="0.784485" x2="15.3662" y2="30.138" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white"/>
                    </linearGradient>
                    </defs>
                </svg>
                </motion.div>
            </div>
            <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
          <Link href="/projects" passHref >
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={iconss}
            transition={{ delay: 2.2 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/projects" ? "active icon_container" : "icon_container"}  onClick={play}>
       
          <div className='icons'>
          <div className="text">
            Projects
          </div>
          <motion.div variants={iconSvg} className="glow">
                <svg id="projectsIcon"width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z" fill="white"/>
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
           whileHover="hover"
           variants={iconss}
           transition={{ delay:2.3 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/blogs" ? "active icon_container" : "icon_container"}  onClick={play}>
          
          <div className='icons'>
          <div className="text">
            Blog
          </div>
          <motion.div variants={stack} className="glow">
                
          <svg id="blog_icon" width="22" height="25" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4464 2.75646L11.244 3.95879L8.92498 1.71079L10.1628 0.472934C10.4656 0.170119 10.8764 0 11.3046 0C11.7328 0 12.1435 0.170119 12.4464 0.472934C12.7492 0.775749 12.9193 1.18645 12.9193 1.6147C12.9193 2.04294 12.7492 2.45365 12.4464 2.75646ZM10.5399 4.66209L3.14752 12.0545L0 12.9314L0.863187 9.77177L8.22813 2.40683L10.5399 4.66209Z" fill="white"/>
          </svg>

                </motion.div>
                </div>
             <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
          
      
         <Link href={"/taste"} passHref>
          <motion.div 
          className="icon_holder"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay: 2.4 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/taste" ? "active icon_container" : "icon_container"}   onClick={play}>
            <a href="https://twitter.com/sadiq_moo" target="_blank" rel="noreferrer">
              <div className='icons'>
            <div className="text">
              Taste
            </div>
            <motion.div variants={twittter} className="glow">
               <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.001v-16h16v16H0Zm16-16h.008v16.008H0V0h16ZM7.453 2.648a1.53 1.53 0 0 0-1.094-1.1c-.265-.069-3.475-.066-3.73.003-.529.14-.941.562-1.082 1.097-.069.265-.069 3.44 0 3.706.14.54.556.96 1.094 1.1.275.069 3.443.069 3.718 0a1.53 1.53 0 0 0 1.094-1.1c.069-.266.069-3.44 0-3.706Zm7 0a1.53 1.53 0 0 0-1.094-1.1c-.265-.069-3.475-.066-3.73.003-.529.14-.941.562-1.082 1.097-.069.265-.069 3.44 0 3.706.14.54.556.96 1.094 1.1.275.069 3.443.069 3.718 0a1.53 1.53 0 0 0 1.094-1.1c.069-.266.069-3.44 0-3.706Zm-7 7a1.53 1.53 0 0 0-1.094-1.1c-.265-.069-3.475-.066-3.73.003-.529.14-.941.562-1.082 1.097-.069.265-.069 3.44 0 3.706.14.54.556.96 1.094 1.1.275.069 3.443.069 3.718 0a1.53 1.53 0 0 0 1.094-1.1c.069-.265.069-3.44 0-3.706Zm6.96 1.131c-.322-1.178-1.241-2.028-2.404-2.231a3.007 3.007 0 0 0-3.065 1.39 3.004 3.004 0 0 0 .887 4.05c.469.313.96.476 1.528.504 1.422.071 2.666-.854 3.053-2.27.097-.343.097-1.1 0-1.443Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
             </motion.div>
             </div>
              <div className="dot_active"></div>
            </a>
          </div>
          </motion.div>
          </Link>
          <a href="https://github.com/mohamedsadiq" target="_blink"  >
          <motion.div 
             className="icon_holder"
             initial="initial"
             animate="animate"
             whileHover="hover"
             variants={iconss}
             transition={{ delay: 2.5 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/store" ? "active icon_container" : "icon_container"} onClick={play}>
         
         <div className='icons'>
          <div className="text">
            Store
          </div>
          <motion.div variants={insta} className="glow">      
                <svg width="25" height="24" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.106 3.2322C14.0341 2.8647 13.7066 2.59306 13.3231 2.59306H1.85053C1.46704 2.59306 1.13948 2.8647 1.06758 3.2322L0.396484 6.58769V7.38662C0.396484 7.82602 0.756001 8.18554 1.19541 8.18554V12.1802C1.19541 12.6196 1.55493 12.9791 1.99433 12.9791H8.38574C8.82514 12.9791 9.18466 12.6196 9.18466 12.1802V8.18554H12.3804V12.1802C12.3804 12.6196 12.7399 12.9791 13.1793 12.9791C13.6187 12.9791 13.9782 12.6196 13.9782 12.1802V8.18554C14.4176 8.18554 14.7771 7.82602 14.7771 7.38662V6.58769L14.106 3.2322ZM7.58681 11.3812H2.79326V8.18554H7.58681V11.3812ZM1.99433 1.79414H13.1793C13.6187 1.79414 13.9782 1.43462 13.9782 0.995214C13.9782 0.555805 13.6187 0.196289 13.1793 0.196289H1.99433C1.55493 0.196289 1.19541 0.555805 1.19541 0.995214C1.19541 1.43462 1.55493 1.79414 1.99433 1.79414Z" fill="white"/>
                </svg>
              </motion.div>
              </div>
            <div className="dot_active"></div>
          </div>
          </motion.div>
          </a>
   
          <motion.div
       
          onMouseOut={() => changeOpOff()}
          onMouseOver={() => changeOpOn()}
          className="icon_holder "
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay:2.6 , ease:"easeInOut"}}
          >
                    <div className="dropMedia" style={op}>
            <div className='arrow_drop'> 
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.03846 5.99977L0.5 3.46131V2.19208V1.76901V0.922852L3.03846 3.46131L6 0.922852V1.76901V3.46131L3.03846 5.99977Z" fill="white"/>
              <path d="M0.5 1.76901V2.19208M0.5 2.19208V3.46131L3.03846 5.99977L6 3.46131V1.76901V0.922852L3.03846 3.46131L0.5 0.922852V2.19208Z" stroke="white" stroke-width="0.846154" stroke-linejoin="round"/>
              <path d="M3.03846 11.0769L0.5 8.53846V7.26923V6.84615V6L3.03846 8.96154L6 6V6.84615V8.53846L3.03846 11.0769Z" fill="white"/>
              <path d="M0.5 6.84615V7.26923M0.5 7.26923V8.53846L3.03846 11.0769L6 8.53846V6.84615V6L3.03846 8.96154L0.5 6V7.26923Z" stroke="white" stroke-width="0.846154" stroke-linejoin="round"/>
              </svg>
            </div>
            <a href='https://twitter.com/sadiq_moo' target="_blank" rel="noreferrer">
                  <motion.div 
                    className="icon_holder drop_icons"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    variants={iconss}
                    transition={{ delay: 2.5 , ease:"easeInOut"}}
                  >
                  <div  onClick={play}>
                
                <div className='icons'>
                  <div className="text">
                    Twitter
                  </div>
                  <motion.div variants={insta} className="glow">      
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
<path d="M17.7887 1.95309C17.1468 2.2316 16.4678 2.41571 15.7731 2.4997C16.506 2.06183 17.0553 1.37298 17.319 0.560929C16.6302 0.970944 15.8762 1.25982 15.0898 1.41501C14.5642 0.844974 13.8642 0.465525 13.0996 0.336178C12.3351 0.206831 11.5493 0.334903 10.8653 0.700307C10.1814 1.06571 9.63814 1.64778 9.32069 2.35522C9.00323 3.06267 8.92956 3.85547 9.11123 4.60929C7.71858 4.53885 6.35633 4.17623 5.11296 3.54498C3.8696 2.91374 2.77293 2.02799 1.89421 0.945267C1.586 1.48349 1.42405 2.09301 1.42446 2.71322C1.42337 3.2892 1.56472 3.85652 1.83592 4.36465C2.10713 4.87279 2.49977 5.30598 2.9789 5.62565C2.42202 5.6105 1.87703 5.46107 1.3903 5.19007V5.23278C1.39447 6.03979 1.67727 6.8206 2.19085 7.44312C2.70443 8.06564 3.41726 8.49166 4.20878 8.64912C3.90409 8.74184 3.58775 8.79073 3.26929 8.79431C3.04884 8.79174 2.82894 8.77174 2.61164 8.73452C2.83704 9.42874 3.27324 10.0354 3.85952 10.4702C4.44581 10.9049 5.15304 11.1461 5.88279 11.1601C4.65052 12.1297 3.12912 12.6589 1.56112 12.6633C1.27563 12.6643 0.990362 12.6471 0.707031 12.6121C2.30795 13.6457 4.1736 14.1945 6.07923 14.1921C7.39426 14.2058 8.69882 13.9573 9.91673 13.4611C11.1346 12.9649 12.2415 12.2311 13.1726 11.3023C14.1037 10.3736 14.8404 9.26866 15.3397 8.05203C15.839 6.8354 16.0908 5.53147 16.0806 4.21641C16.0806 4.07122 16.0806 3.91748 16.0806 3.76375C16.7508 3.26395 17.3288 2.65124 17.7887 1.95309Z" fill="white"/>
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
                    whileHover="hover"
                    variants={iconss}
                    transition={{ delay: 2.5 , ease:"easeInOut"}}
                  >
                  <div   onClick={play}>
                
                <div className='icons'>
                  <div className="text">
                    Instagram
                  </div>
                  <motion.div variants={insta} className="glow">      
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M5.09072 0.732422C2.46612 0.732422 0.332031 2.86651 0.332031 5.49111V12.0801C0.332031 14.7047 2.46612 16.8388 5.09072 16.8388H11.6797C14.3043 16.8388 16.4384 14.7047 16.4384 12.0801V5.49111C16.4384 2.86651 14.3043 0.732422 11.6797 0.732422H5.09072ZM12.7778 3.66085C13.1805 3.66085 13.5099 3.99029 13.5099 4.39295C13.5099 4.79561 13.1805 5.12506 12.7778 5.12506C12.3752 5.12506 12.0457 4.79561 12.0457 4.39295C12.0457 3.99029 12.3752 3.66085 12.7778 3.66085ZM8.3852 4.75901C10.6071 4.75901 12.4118 6.56365 12.4118 8.78559C12.4118 11.0075 10.6071 12.8122 8.3852 12.8122C6.16326 12.8122 4.35861 11.0075 4.35861 8.78559C4.35861 6.56365 6.16326 4.75901 8.3852 4.75901ZM8.3852 5.49111C6.56957 5.49111 5.09072 6.96997 5.09072 8.78559C5.09072 10.6012 6.56957 12.0801 8.3852 12.0801C10.2008 12.0801 11.6797 10.6012 11.6797 8.78559C11.6797 6.96997 10.2008 5.49111 8.3852 5.49111Z" fill="white"/>
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
                    whileHover="hover"
                    variants={iconss}
                    transition={{ delay: 2.5 , ease:"easeInOut"}}
                  >
                  <div   onClick={play}>
                
                <div className='icons'>
                  <div className="text">
                  Dribbble
                  </div>
                  <motion.div  variants={insta} className="glow">      
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_748_3415)">
<path d="M7.99961 15.3996C3.91921 15.3996 0.599609 12.08 0.599609 7.99961C0.599609 3.91921 3.91921 0.599609 7.99961 0.599609C12.08 0.599609 15.3996 3.91921 15.3996 7.99961C15.3996 12.08 12.08 15.3996 7.99961 15.3996Z" fill="white"/>
<path d="M8.00039 0.800391C11.9704 0.800391 15.2004 4.03039 15.2004 8.00039C15.2004 11.9704 11.9704 15.2004 8.00039 15.2004C4.03039 15.2004 0.800391 11.9704 0.800391 8.00039C0.800391 4.03039 4.03039 0.800391 8.00039 0.800391ZM8.00039 0.400391C3.80319 0.400391 0.400391 3.80319 0.400391 8.00039C0.400391 12.1976 3.80319 15.6004 8.00039 15.6004C12.1976 15.6004 15.6004 12.1976 15.6004 8.00039C15.6004 3.80319 12.1976 0.400391 8.00039 0.400391Z" fill="black"/>
<path d="M11.341 14.7656C11.341 14.7656 10.1282 6.33083 5.08901 1.04883M0.507812 7.13923C0.507812 7.13923 10.1878 7.98603 13.3378 2.69843M3.12181 13.6608C3.12181 13.6608 6.57141 5.73803 15.545 8.78323" stroke="black" stroke-width="0.4" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_748_3415">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
                      </motion.div>
                      
                      </div>
                    <div className="dot_active"></div>
                  </div>
                  </motion.div>
                  </a>
          </div>
          <div    className="icon_container"  onClick={ () => onClickShow()}>
          <a  >
        
               <div className='icons'>
          <div className="text">
          Media
          </div>
         
          <motion.div variants={twittter} className="glow">  
            <svg id="media_icon" width="44" height="31" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54978 17.749C14.3418 17.749 18.2265 13.8643 18.2265 9.07224C18.2265 4.28021 14.3418 0.395508 9.54978 0.395508C4.75775 0.395508 0.873047 4.28021 0.873047 9.07224C0.873047 10.8262 1.39346 12.4586 2.28829 13.8234L1.61508 19.7477C1.57562 20.0949 1.94194 20.3439 2.2503 20.1794L7.33984 17.465C8.0454 17.6503 8.78607 17.749 9.54978 17.749ZM6.51316 8.20371C6.27356 8.20371 6.07933 8.39795 6.07933 8.63755V9.50522C6.07933 9.74482 6.27356 9.93906 6.51316 9.93906H12.5869C12.8265 9.93906 13.0207 9.74482 13.0207 9.50522V8.63755C13.0207 8.39795 12.8265 8.20371 12.5869 8.20371H6.51316Z" fill="white"/>
            </svg>
             </motion.div>
               </div>
             <div className="dot_active"></div>
          </a>
          </div>
          </motion.div>
          <a href ="mailto:mohamed.sadiq@outlook.sa">
          <motion.div 
          className="icon_holder"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay: 2.7 , ease:"easeInOut"}}
          >
          <div className="icon_container"  onClick={play}>
          
          <div className='icons'>
          <div className="text">
          Mail
          </div>
          <motion.div variants={stack} className="glow">
               <svg id="mail_icon" width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2.93164 10.012V28.9841L12.4177 19.498L2.93164 10.012ZM4.81653 8.11102L16.826 20.1205C18.3428 21.6373 20.9881 21.6373 22.5048 20.1205L34.5143 8.11102H4.81653Z" fill="white"/>
                 <path d="M24.3972 22.0134C23.1348 23.2771 21.4534 23.9746 19.6649 23.9746C17.8763 23.9746 16.1949 23.2771 14.9325 22.0134L14.31 21.3909L4.83203 30.8689H34.4977L25.0197 21.3909L24.3972 22.0134ZM26.9126 19.4979L36.3986 28.984V10.0119L26.9126 19.4979Z" fill="white"/>
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