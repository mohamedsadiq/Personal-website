import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GlassCard } from "@developer-hub/liquid-glass";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  const [isBoiHovered, setIsBoiHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleModalKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleEscapePress = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleEscapePress);
    return () => window.removeEventListener("keydown", handleEscapePress);
  }, [isModalOpen]);
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
    <>
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
        <button
          type="button"
          className="text-left text-sm mt-2 text-black relative z-10 block hover:text-neutral-600 focus-visible:outline-none"
          aria-label="Show more information about Moe"
          onClick={handleOpenModal}
          onMouseEnter={() => setHoveredId("about")}
          onMouseLeave={() => setHoveredId(null)}
          onKeyDown={handleModalKeyDown}
        >
          <motion.span
            className="text-[#000] dark:text-[#d5d5d5]"
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              textUnderlineOffset: "2px",
            }}
            animate={{
              textDecorationColor:
                hoveredId === "about" ? "currentColor" : "rgba(208, 208, 208, 0.53)",
            }}
            transition={{ duration: 0.2 }}
          >
            More info
          </motion.span>
        </button>
      </div>
      </motion.div>
      {isClient &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-12"
                initial={{ opacity: 0, y:10 }}
                animate={{ opacity: 1, y:0 }}
                exit={{ opacity: 0, y:10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  className="absolute inset-0"
                  aria-label="Close overlay"
                  onClick={handleCloseModal}
                />
                <motion.section
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="about-moe-heading"
                  className="relative z-10 w-full max-w-md mb-5 overflow-hidden"
                  initial={{ opacity: 1, scale: 1, y: 0, height: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 1, scale: 1, y: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="rounded-[35px]" style={{ borderRadius: '35px' }}>
                    <GlassCard
                    displacementScale={150}
                    blurAmount={0.1}
                      className="about w-full min-h-[320px] p-8 text-center flex"
                      style={{ borderRadius: '35px' }}
                    >
                      <div className="relative rounded-[35px] flex-1" style={{ borderRadius: '35px' }}>
                        <button
                          type="button"
                          className="absolute right-0 top-0 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                          aria-label="Close more info dialog"
                          onClick={handleCloseModal}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                          </svg>
                        </button>
                        
                        <div className="space-y-4 pt-2">
                          <h2 id="about-moe-heading" className="text-2xl font-light text-black dark:text-white">
                            Moe Sadiq
                          </h2>
                          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 text-left">
                           I’m a curious person who can’t help acting on the questions tugging at me—obsessed with anything interesting and intent on contributing to remarkable stories. I want to be part of something deeply compelling, and in my free time I hit the gym, watch movies, read, dive into games that spark new ideas, and build the things those sparks turn into.
                          </p>
                          <div className="pt-2 space-y-3">
                            {/* <p className="text-xs text-black/50 dark:text-white/50">
                              Currently exploring motion curves, AI copilots, and collecting spices that remind me of home.
                            </p> */}
                            <a
                              href="mailto:hey@mosadiq.com"
                              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-white/80 dark:focus-visible:outline-white"
                              aria-label="Mail Moe"
                            >
                              Mail me
                            </a>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </motion.section>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Section1;
