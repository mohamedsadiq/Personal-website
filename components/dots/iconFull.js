
import { motion } from "framer-motion";

export default function IconFull() {
    const IconAnimation = {
        initial: {
          scale: 0.8,
          filter: "blur(40px)",
        },
        animate: {
          scale: 1,
          filter: "blur(0px)"
        },
        hover: {
          scale:1.2
        },
      };
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
        <svg width="57" height="52" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path d="M36.412 9.647h10.706v32.118H36.412" stroke="#3EE386" stroke-width="4"/></g><g filter="url(#b)"><path d="M20.353 9.647H9.647v32.118h10.706" stroke="#3EE386" stroke-width="4"/></g><g filter="url(#c)"><circle cx="28.382" cy="25.706" r="8.029" fill="#3EE386"/></g><defs><filter id="a" x="28.983" y=".218" width="27.563" height="50.975" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="3.714"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape"/></filter><filter id="b" x=".218" y=".218" width="27.563" height="50.975" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="3.714"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape"/></filter><filter id="c" x="12.924" y="10.248" width="30.916" height="30.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="3.714"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.243137 0 0 0 0 0.890196 0 0 0 0 0.52549 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_26"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_26" result="shape"/></filter></defs></svg>
      </motion.div>
   
  
    )
  }
  