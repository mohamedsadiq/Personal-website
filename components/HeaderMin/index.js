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
      if (link == e.target) {
        link.classList.add('blacktext');
      }
     
      
     
    });
  };

  const handleMouseLeave = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('blur');
      link.classList.remove('blacktext');
    });
  };

  return (
    <div className="header flex gap-x-5 text-black fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bottom-px">
      <Link href="/">
        <div className="bg-custom-hsla backdrop-blur-custom h-12 w-12 rounded-full ">
         <motion.div 
           className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
          //  initial={{ scale:"0.6"}}
          //  animate={{scale:"1"}}
          //  whileHover={{  scale:"0.9"}}
          //  transition={{  type: "spring", stiffness: 300, damping: 30 }}
         >
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
      <div className="bg-custom-hsla backdrop-blur-custom rounded-xl flex gap-x-6 justify-center items-center pl-8 pr-8">
        <motion.div
          className="nav-link font-light text-sm rounded-lg"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
        >
          <Link href="/sparks">Sparks</Link>
        </motion.div>
        <motion.div
          className="nav-link font-light text-sm"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
        >
          <Link href="/projects">Projects</Link>
        </motion.div>
        <motion.div
          className="nav-link font-light text-sm"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
        >
          <Link href="/photo">Photos</Link>
        </motion.div>
        <motion.div
          className="nav-link font-light text-sm"
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
        >
          <a target="_blank" href="https://x.com/sadiq_moo">X.com</a>
        </motion.div>
      </div>
      <a href="mailto:mohamed.sadiq@outlook.sa">
        <div className="bg-custom-hsla backdrop-blur-custom h-12 w-12 rounded-full">
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width="22"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.046 1.868v12.445L6.269 8.09.046 1.868ZM1.282.62 9.16 8.499c.995.995 2.73.995 3.726 0L20.764.62H1.282Z"
              fill="url(#a)"
            />
            <path
              d="M14.127 9.74a4.36 4.36 0 0 1-3.104 1.287 4.36 4.36 0 0 1-3.105-1.286l-.408-.409-6.217 6.218h19.46l-6.217-6.218-.409.409Zm1.65-1.65L22 14.313V1.868L15.777 8.09Z"
              fill="url(#b)"
            />
            <defs>
              <linearGradient id="a" x1="10.405" y1=".621" x2="10.405" y2="14.313" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8F8F8F" />
                <stop offset="0" stopColor="#979797" />
                <stop offset=".72" stopColor="#CDCDCD" />
                <stop offset="1" stopColor="#fff" />
              </linearGradient>
              <linearGradient id="b" x1="11.646" y1="1.868" x2="11.646" y2="15.55" gradientUnits="userSpaceOnUse">
                <stop stopColor="#979797" />
                <stop offset="1" stopColor="#FDFDFD" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default HeaderMin;
