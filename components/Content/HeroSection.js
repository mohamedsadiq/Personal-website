import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  const [isBoiHovered, setIsBoiHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const personalImages = [
    {
      id: 1,
      src: "/img/developerdao/42f3.png",
      alt: "Sketching new interface concepts",
      stackClasses: "z-30 sm:ml-0",
    },
    {
      id: 2,
      src: "/img/developerdao/4343.png",
      alt: "Weekend hike capturing textures",
      stackClasses: "z-20 -mt-6 sm:-ml-16 sm:mt-0",
    },
    {
      id: 3,
      src: "/img/developerdao/44.png",
      alt: "Studio desk packed with gadgets",
      stackClasses: "z-10 -mt-6 sm:-ml-16 sm:mt-0",
    },
  ];
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
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-10 backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                  className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/95 p-6 text-[#000] shadow-2xl outline outline-1 outline-black/5 dark:bg-neutral-900/95 dark:text-[#d5d5d5]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-black transition hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                    aria-label="Close more info dialog"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-center sm:justify-start">
                      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-black/5 bg-white shadow-lg dark:border-white/10 dark:bg-neutral-800">
                        <img
                          src="/img/developerdao/fasdfasd.jpeg"
                          alt="Moe smiling in front of a sunlit window"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                        Designer • Engineer • Storyteller
                      </p>
                      <h2 id="about-moe-heading" className="mt-1 text-3xl font-semibold">
                        Moe Sadiq
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                        I’m obsessed with crafting interfaces that feel tactile and grounded. When I am not tweaking
                        motion curves or building AI copilots, I am chasing light with my camera, painting textures,
                        and collecting spices that remind me of home. Those quiet rituals keep every product I ship
                        honest, warm, and deeply personal.
                      </p>
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                      {personalImages.map((imageCard, index) => (
                        <figure
                          key={imageCard.id}
                          className={`relative w-full max-w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-neutral-800 ${imageCard.stackClasses}`}
                          style={{ marginLeft: index === 0 ? 0 : undefined }}
                        >
                          <img src={imageCard.src} alt={imageCard.alt} className="h-40 w-full object-cover" />
                          <figcaption className="sr-only">{imageCard.alt}</figcaption>
                        </figure>
                      ))}
                    </div>
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
