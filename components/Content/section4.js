import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const Section4 = ({MohamedSadiq}) => {

    const [svgColor, setSvgColor] = useState("#000");
    // const valueOfMood = mode.mode.valueOfMode;
  
    const svgColorsFun = () => {
      if (valueOfMood === "dark") {
        setSvgColor("#fff");
      } else if (valueOfMood === "light") {
        setSvgColor("#000");
      }
    };
  const IconAnimation = {
    initial: {
      scale: 0.8,
      transformOrigin: "50% 50%",
      filter: "blur(40px)",
    },
    animate: {
      scale: 1,
      transformOrigin: "50% 50%",
      filter: "blur(0px)",
    },
    hover: {
      x:2,
      scale: 1.2,
      transformOrigin: "50% 50%",
    },
  };
    

    return (
        <motion.div 
          className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
          initial={MohamedSadiq.initial}
          animate={MohamedSadiq.animate}
          transition={{ delay: 0.2}}
          
        >
        <div className="mainContent flex h-auto w-full md:w-44 flex-none">
          <h1 className="text-zinc-400">Social media</h1>
        </div>
        <div className="mainContent   flex items-center content-center justify-center  " id="links_home">
          <div className="links_home flex " style={{padding:0}}>
         
          <motion.a 
           initial={IconAnimation.initial}
           animate={IconAnimation.animate}
           whileHover={IconAnimation.hover}
           transition={{
             type: "spring",
             stiffness: 600,
             damping: 10,
           }}
          href="https://read.cv/mohamedsadiq" target="_blink"  aria-label="read.cv">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><path fill="#000" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27"/></svg>

            </motion.a>

          <motion.a 
           initial={IconAnimation.initial}
           animate={IconAnimation.animate}
           whileHover={IconAnimation.hover}
           transition={{
             type: "spring",
             stiffness: 600,
             damping: 10,
           }}
          href="https://x.com/sadiq_moo" target="_blink"  aria-label="X.com">
              <svg width="20px" height="20px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke={svgColor} strokeWidth="1.5"></path><path d="M20 3L4 21" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </motion.a>
            <motion.a 
           initial={IconAnimation.initial}
           animate={IconAnimation.animate}
           whileHover={IconAnimation.hover}
           transition={{
             type: "spring",
             stiffness: 600,
             damping: 10,
           }}
          href="https://substack.com/@msadiq" target="_blink"  aria-label="read.cv">
             <svg  style={{marginTop:"2px"}}width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 448 511.471"><path fill="#191919" d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/></svg>

            </motion.a>
            <motion.a 
             initial={IconAnimation.initial}
             animate={IconAnimation.animate}
             whileHover={IconAnimation.hover}
             transition={{
               type: "spring",
               stiffness: 600,
               damping: 10,
             }}
            href="https://layers.to/mohamed.sadiq" target="_blink"  aria-label="layers">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 32 33"><path fill={svgColor} fillOpacity="0.2" d="M0 18.83L.08 6.832C.094 4.66 1.613 2.798 3.71 2.383L15.297.086c2.784-.552 5.368 1.627 5.35 4.51l-.08 12c-.015 2.171-1.534 4.032-3.631 4.448L5.349 23.341C2.565 23.893-.019 21.714 0 18.83z" /><path fill={svgColor} fillOpacity="0.5" d="M5.677 23.617l.08-12C5.77 9.447 7.29 7.586 9.387 7.17l11.587-2.296c2.784-.552 5.368 1.626 5.349 4.51l-.08 12c-.014 2.171-1.533 4.032-3.63 4.448l-11.587 2.297c-2.784.551-5.368-1.627-5.349-4.51z" /><path fill={svgColor} fillOpacity="0.8" d="M11.354 28.404l.08-12c.014-2.172 1.533-4.032 3.63-4.448l11.587-2.297c2.784-.552 5.368 1.627 5.349 4.51l-.08 12c-.014 2.172-1.533 4.033-3.63 4.448l-11.587 2.297c-2.784.552-5.368-1.627-5.35-4.51z" /></svg>
            </motion.a>
            <motion.a 
             initial={IconAnimation.initial}
             animate={IconAnimation.animate}
             whileHover={IconAnimation.hover}
             transition={{
               type: "spring",
               stiffness: 600,
               damping: 10,
             }}
            href="https://dribbble.com/Mohamed-Sadiq" target="_blink" aria-label="dribbble">
              <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </motion.a>
            <motion.a
             initial={IconAnimation.initial}
             animate={IconAnimation.animate}
             whileHover={IconAnimation.hover}
             transition={{
               type: "spring",
               stiffness: 600,
               damping: 10,
             }}
            href="https://github.com/mohamedsadiq" target="_blink" aria-label="github">
              <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={svgColor}><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </motion.a>
              </div>
        </div>
        </motion.div>
    )
}

export default Section4
