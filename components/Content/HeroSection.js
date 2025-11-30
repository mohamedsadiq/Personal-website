import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@developer-hub/liquid-glass";
import { PhotoViewerOverlay } from "../PhotoViewerOverlay";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  const [isBoiHovered, setIsBoiHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleCloseDeskPhoto();
  };
  const handleModalKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
  const handleOpenDeskPhoto = () => {
    setActivePhoto({
      id: "about-desk-photo",
      src: "/0b69f17359124e4880cb6631e307f7df.jpg",
      alt: "Ambient desk setup highlighting Moe's workspace inspirations",
      caption: "A glimpse of my desk setup where I collect inspiration and sketch new ideas.",
      aspectRatio: 756 / 1008,
    });
  };
  const handleCloseDeskPhoto = () => setActivePhoto(null);
  const handleDeskPhotoKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    handleOpenDeskPhoto();
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
          I’m Moe—a designer‑engineer who acts on his curiosity. I created
          {" "}
          <Link
            href="/projects/lightup"
            className="underline decoration-dotted underline-offset-2 text-black dark:text-[#d5d5d5] hover:text-neutral-600 dark:hover:text-[#eee]"
          >
            LightUp
          </Link>
          {", previously founded "}
          <Link
            href="/projects/daosspot"
            className="underline decoration-dotted underline-offset-2 text-black dark:text-[#d5d5d5] hover:text-neutral-600 dark:hover:text-[#eee]"
          >
            DAOs Spot
          </Link>
          {", and I’m behind"}
          {" "}
          <a
            className="dark:text-[#d5d5d5] text-black hover:text-neutral-600 dark:hover:text-[#eee] underline decoration-dotted relative z-10"
            href="https://www.boimaginations.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsBoiHovered(true)}
            onMouseLeave={() => setIsBoiHovered(false)}
          >
            {" "}Building on imagination.  
          </a>
          {" "} <br/>I love working on frontier tech and aim to contribute alongside people who actively shape civilization.
        </p>
        <button
          type="button"
          className="text-left text-sm mt-5 text-black relative z-10 block hover:text-neutral-600 focus-visible:outline-none"
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
                          className="absolute right-0 -top-4 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                          aria-label="Close more info dialog"
                          onClick={handleCloseModal}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                          </svg>
                        </button>
                        
                        <div className="space-y-4 pt-2">
                          {/* <h2 id="about-moe-heading" className="text-2xl font-light text-black dark:text-white">
                            Moe Sadiq
                          </h2> */}
                          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 text-left">
                          I was that kid who topped engineering high school for three years straight, then did mechanical engineering for two before realizing I just wanted to build stuff. I’m wired for curiosity—obsessed with turning questions into projects that matter—and drawn to deeply compelling work. When I’m not creating, you’ll find me lifting, reading, watching films, diving into games that spark new ideas, and building the things those sparks become.
                          </p>
                          <button
                            type="button"
                            className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
                            onClick={handleOpenDeskPhoto}
                            onKeyDown={handleDeskPhotoKeyDown}
                            aria-label="Expand desk setup inspiration photo"
                          >
                            <div className="rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden">
                              <Image
                                src="/0b69f17359124e4880cb6631e307f7df.jpg"
                                alt="Ambient desk setup highlighting Moe's workspace inspirations"
                                width={1008}
                                height={756}
                                className="h-56 w-full object-cover"
                                priority={false}
                              />
                              <p className="px-3 py-2 text-xs text-black/60 dark:text-white/60 text-center bg-black/5 dark:bg-white/5">
                                A glimpse of my desk setup where I collect inspiration and sketch new ideas.
                              </p>
                            </div>
                          </button>
                          <div className=" space-y-3">
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
      {activePhoto && (
        <PhotoViewerOverlay
          photo={activePhoto}
          onClose={handleCloseDeskPhoto}
          zIndex={70}
        />
      )}
    </>
  );
};

export default Section1;
