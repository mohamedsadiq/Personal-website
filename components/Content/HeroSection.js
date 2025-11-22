import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  const [isBoiHovered, setIsBoiHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  // Use centralized motion control if available, otherwise fallback to legacy props
  const motionProps = motionCtl
    ? {
      variants: motionCtl.variants,
      initial: "hidden",
      animate: "visible",
      transition: motionCtl.getTransition(order),
    }
    : {
      initial: MohamedSadiq.initial,
      animate: MohamedSadiq.animate,
      transition: { delay: 0.1 },
    };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
      {...motionProps}
    >
      <div id="name" className="dark:text-[#d5d5d5] text-[#000] text-sm leading-relaxed">
        Moe Sadiq
      </div>
      <div className="relative">
        <p className="text-sm leading-7 text-[#000] dark:text-[#d5d5d5]">
          I’m Moe—a designer‑engineer who builds things that feel like they belonged all along.
          {" "}
          <a
            className="dark:text-[#d5d5d5] text-black hover:text-neutral-600 dark:hover:text-[#eee] underline decoration-dotted relative z-10"
            href="https://www.boimaginations.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsBoiHovered(true)}
            onMouseLeave={() => setIsBoiHovered(false)}
          >
            {" "}BOI
          </a> started that way. I explore <span className="web3">
            web3 and AI<span id="animation_web3"></span>
          </span>, but the goal stays the same: make products that are smooth, sturdy, and a little emotional.

        </p>
        {/* <a 
            href="/about" 
            className="text-sm mt-2 text-black relative z-10 block"
            onMouseEnter={() => setHoveredId('about')}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.span 
              className="text-[#000]"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
                textUnderlineOffset: '2px',
              }}
              animate={{
                textDecorationColor: hoveredId === 'about' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)'
              }}
              transition={{ duration: 0.2 }}
            >
              More info
            </motion.span>
          </a> */}
      </div>
    </motion.div>
  );
};

export default Section1;
