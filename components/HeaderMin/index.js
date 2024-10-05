import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const HeaderMin = () => {
  const handleMouseEnter = (e) => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      if (link !== e.target) {
        link.classList.add('blur');
      }
      // if (link == e.target) {
      //   link.classList.add('blacktext');
      // }
     
      
     
    });
  };

  const handleMouseLeave = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('blur');
      // link.classList.remove('blacktext');
    });
  };

  const containerVariants = {
    hover: {
      scale: 1.05,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hover: {
      scale: 1.1,
      rotate:"10deg",
    },
    
  };
  const childVariantsProject = {
    hover: {
      scale: 1,
      rotate:"-100deg",
    },
    
  };
  const childVariantsPic = {
    hover: {
      scale: 1.1,
        rotate:"-10deg",
    },
    
  };
  const childVariantsText = {
    hover: {
      scale: 1.1,
    },
    
  };

  return (
    <motion.nav  
      aria-label="Main Navigation"
      className="header flex gap-x-5 text-black fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bottom-px"
      initial={{ bottom:"-20%" }}
      animate={{bottom:0}}
      transition={{duration:5, type: "spring", stiffness: 200, damping: 28 }} 
    >
      <Link href="/"  aria-label="Home">
        <div className="bg-custom-hsla backdrop-blur-custom h-12 w-12 rounded-full ">
         <motion.div 
           className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
          //  initial={{ scale:"0.6"}}
          //  animate={{scale:"1.1"}}
          //  whileHover={{  scale:"1.1"}}
           transition={{  type: "spring", stiffness: 200, damping: 10 }}
         >
          {/* <span>Home</span> */}
         <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width="21"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.826 15.187C.745 13.182.204 12.18.056 11.108a5.987 5.987 0 0 1 0-1.635c.148-1.073.689-2.075 1.77-4.08l.269-.497c.924-1.712 1.386-2.568 2.038-3.204A5.954 5.954 0 0 1 6.51.272C7.377 0 8.349 0 10.29 0c1.942 0 2.913 0 3.782.272.892.28 1.706.766 2.376 1.42.652.636 1.114 1.492 2.038 3.204l.268.498c1.082 2.004 1.623 3.006 1.77 4.079a5.98 5.98 0 0 1 0 1.635c-.147 1.072-.688 2.074-1.77 4.079l-.268.497c-.924 1.712-1.386 2.569-2.038 3.205a5.956 5.956 0 0 1-2.376 1.42c-.869.272-1.84.272-3.782.272s-2.913 0-3.781-.273a5.955 5.955 0 0 1-2.376-1.42c-.652-.635-1.114-1.492-2.038-3.204l-.269-.497Z"
              fill="url(#a)"
            />
            <defs>
              <linearGradient id="a" x1="10.29" y1="0" x2="10.29" y2="20.581" gradientUnits="userSpaceOnUse">
                <stop stopColor="#858585" />
                <stop offset="1" stopColor="#F8F8F8" />
              </linearGradient>
            </defs>
          </svg>
         </motion.div>
        </div>
      </Link>
      <div className="bg-custom-hsla backdrop-blur-custom rounded-3xl flex gap-x-6 justify-center items-center pl-8 pr-8">
        
        <motion.div
          className="nav-link font-light text-sm rounded-lg"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
          //  variants={containerVariants}
          whileHover="hover"
        >
          <Link href="/sparks" className="flex gap-x-2 items-center "  aria-label="Sparks"> 
          <motion.div
            className=""
            variants={childVariants}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <svg
                    width="16"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33329 3.49937C0.933293 5.89937 0.666626 7.89937 0.666626 25.4994C0.666626 43.0994 0.933293 45.0994 3.33329 47.4994C5.73329 49.8994 7.73329 50.166 25.3333 50.166C51.0666 50.166 50 51.2327 50 25.4994C50 -0.233967 51.0666 0.832701 25.3333 0.832701C7.73329 0.832701 5.73329 1.09937 3.33329 3.49937ZM44 10.166C44 12.566 43.2 13.6327 40.9333 13.8994C39.2 14.166 37.6 13.4994 37.2 12.2994C35.8666 8.8327 37.7333 5.89937 40.9333 6.4327C43.2 6.69937 44 7.76603 44 10.166ZM18.5333 13.4994C19.0666 15.4994 20.6666 17.0994 22.6666 17.6327C24.5333 18.0327 26 18.966 26 19.4994C26 20.0327 24.5333 20.966 22.6666 21.366C20.6666 21.8994 19.0666 23.4994 18.5333 25.4994C17.4666 29.766 15.8666 29.766 14.8 25.4994C14.2666 23.4994 12.6666 21.8994 10.6666 21.366C6.39996 20.2994 6.39996 18.6994 10.6666 17.6327C12.6666 17.0994 14.2666 15.4994 14.8 13.4994C15.2 11.6327 16.1333 10.166 16.6666 10.166C17.2 10.166 18.1333 11.6327 18.5333 13.4994ZM29.4666 33.4994C31.3333 35.2327 31.3333 35.766 29.4666 37.6327C27.4666 39.4994 27.2 39.4994 25.2 37.6327C23.6 35.8994 23.4666 35.2327 24.9333 33.6327C27.0666 31.0994 27.0666 31.0994 29.4666 33.4994Z"
                      fill={"#555"}
                    />
                  </svg>
                  </motion.div>
          <motion.span
          variants={childVariantsText}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >Sparks</motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="nav-link font-light text-sm"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
             whileHover="hover"
        >
          <Link href="/projects"  className="flex gap-x-2 items-center"  aria-label="Projects">
          <motion.div
            className=""
            variants={childVariantsProject}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg
                    id="projectsIcon"
                    width="20"
                    height="38"
                    viewBox="0 0 40 38"
                    fill={"#555"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z"
                      fill={"#555"}
                    />
                  </svg>
                  </motion.div>
        <motion.span variants={childVariantsText}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>Projects</motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="nav-link font-light text-sm"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
          whileHover="hover"
        >
          <Link href="/photo" className="flex gap-x-2 items-center" aria-label="Photos">
          <motion.div
            className=""
            variants={childVariantsPic}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#555" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.106405 11.8986C0.134567 12.1579 0.170181 12.3982 0.21522 12.6222C0.340037 13.2431 0.537241 13.7391 0.848812 14.1679C1.12295 14.5452 1.45476 14.877 1.83207 15.1512C3.00036 16 4.6669 16 8 16C11.3331 16 12.9996 16 14.1679 15.1512C14.5452 14.877 14.877 14.5452 15.1512 14.1679C15.4628 13.7391 15.66 13.2431 15.7848 12.6222C15.8268 12.4134 15.8606 12.1905 15.8878 11.9512C16 10.9637 16 9.69815 16 8C16 4.6669 16 3.00036 15.1512 1.83207C14.877 1.45476 14.5452 1.12295 14.1679 0.848812C12.9996 0 11.3331 0 8 0C4.6669 0 3.00036 0 1.83207 0.848812C1.45476 1.12295 1.12295 1.45476 0.848812 1.83207C0 3.00036 0 4.6669 0 8C0 9.66814 0 10.9188 0.106405 11.8986ZM14.9333 8C14.9333 9.1974 14.9317 10.4898 14.8981 11.2474L13.6065 9.86482C13.3435 9.58332 13.1282 9.35282 12.9393 9.17596C12.7439 8.993 12.5502 8.84144 12.3219 8.73493C11.7743 8.47943 11.1484 8.4486 10.5783 8.64905C10.3406 8.7326 10.133 8.86441 9.92053 9.02727C9.71518 9.18473 9.47822 9.39296 9.18882 9.64729L9.17525 9.65922C9.01595 9.7992 8.9162 9.88649 8.83621 9.94772C8.76005 10.006 8.73234 10.0163 8.72637 10.0183C8.63701 10.0491 8.53908 10.0431 8.4542 10.0015C8.44852 9.99876 8.42228 9.98521 8.35385 9.91797C8.28201 9.8474 8.19372 9.7485 8.05284 9.58999L7.86565 9.37943C7.37771 8.83045 6.98165 8.38489 6.62857 8.06736C6.26425 7.7397 5.89061 7.49609 5.43495 7.42116C5.14114 7.37282 4.84075 7.38174 4.55031 7.4474C4.09989 7.54921 3.74137 7.81452 3.3971 8.1632C3.0635 8.50107 2.69459 8.96929 2.24009 9.54614L2.23996 9.54629L1.09236 11.0028C1.06795 10.2903 1.06667 9.07172 1.06667 8C1.06667 6.30969 1.06812 5.12764 1.16656 4.21913C1.26283 3.33058 1.44149 2.83104 1.71177 2.45904C1.92011 2.17228 2.17228 1.92011 2.45904 1.71177C2.83104 1.44149 3.33058 1.26283 4.21913 1.16656C5.12764 1.06812 6.30969 1.06667 8 1.06667C9.69031 1.06667 10.8724 1.06812 11.7809 1.16656C12.6694 1.26283 13.169 1.44149 13.541 1.71177C13.8277 1.92011 14.0799 2.17228 14.2882 2.45904C14.5585 2.83104 14.7372 3.33058 14.8334 4.21913C14.9319 5.12764 14.9333 6.30969 14.9333 8ZM9.95555 4.8C9.95555 5.48729 10.5127 6.04445 11.2 6.04445C11.8873 6.04445 12.4444 5.48729 12.4444 4.8C12.4444 4.11271 11.8873 3.55556 11.2 3.55556C10.5127 3.55556 9.95555 4.11271 9.95555 4.8Z" fill="#555"/>
            </svg>
            </motion.div>
          <motion.span variants={childVariantsText}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>Photos</motion.span>
         
          
          </Link>
        </motion.div>
       
      </div>
      
    </motion.nav >
  );
};

export default HeaderMin;
