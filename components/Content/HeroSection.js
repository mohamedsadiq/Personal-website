import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  const [isBoiHovered, setIsBoiHovered] = useState(false);
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
      <div id="name" className=" text-sm leading-relaxed">
        Moe Sadiq
      </div>
      <div className="relative">
        <p className="text-sm leading-7 text-[#000]">
          I’m Moe—a designer‑engineer who builds things that feel like they belonged all along.
{" "}
          <a 
            className="text-black hover:text-[#eee] underline decoration-dotted relative z-10" 
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
      </div>
    </motion.div>
  );
};

export default Section1;
