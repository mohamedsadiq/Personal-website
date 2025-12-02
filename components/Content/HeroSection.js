import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { GlassCard } from "@developer-hub/liquid-glass";
import { MDXRemote } from "next-mdx-remote";
import { PhotoViewerOverlay } from "../PhotoViewerOverlay";
import { HeroIdentityPanel } from "../HeroContent/HeroIdentityPanel";
import { HeroBioText } from "../HeroContent/HeroBioText";
import { createHeroMdxComponents } from "../HeroContent/createHeroMdxComponents";

const profilePhotos = [
  {
    id: "desk-setup",
    src: "/0b69f17359124e4880cb6631e307f7df.jpg",
    alt: "Ambient desk setup highlighting Moe's workspace inspirations",
    caption: "A glimpse of my desk setup where I collect inspiration and sketch new ideas.",
    width: 1008,
    height: 756,
    aspectRatio: 756 / 1008,
  },
  {
    id: "portrait",
    src: "/573409390_18024625412774273_7423167989351995333_n-Photoroom.png",
    alt: "Portrait of Moe Sadiq",
    caption: "Moe Sadiq",
    width: 768,
    height: 768,
    aspectRatio: 1,
  },
];

const cairoTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Africa/Cairo",
});

const Section1 = ({ MohamedSadiq, motionCtl, order, heroContent }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(() => {
    const portraitIndex = profilePhotos.findIndex((photo) => photo.id === "portrait");
    return portraitIndex >= 0 ? portraitIndex : 0;
  });
  const [cairoClock, setCairoClock] = useState(() => cairoTimeFormatter.format(new Date()));
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
  const activeProfilePhoto = profilePhotos[currentPhotoIndex];

  const handleOpenDeskPhoto = () => {
    setActivePhoto(activeProfilePhoto);
  };
  const handleCloseDeskPhoto = () => setActivePhoto(null);
  const handleDeskPhotoKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    handleOpenDeskPhoto();
  };
  const handleSelectPhoto = (photoIndex) => {
    setCurrentPhotoIndex(photoIndex);
  };

  const handleHoverStart = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredId(null);
  }, []);

  const introMdxComponents = useMemo(
    () =>
      createHeroMdxComponents({
        onHoverStart: handleHoverStart,
        onHoverEnd: handleHoverEnd,
      }),
    [handleHoverStart, handleHoverEnd]
  );

  const bioMdxComponents = useMemo(
    () => createHeroMdxComponents(),
    []
  );

  // Extract frontmatter from heroContent
  const introFrontmatter = heroContent?.intro?.frontmatter ?? {};
  const bioFrontmatter = heroContent?.bio?.frontmatter ?? {};

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    const handleTick = () => {
      setCairoClock(cairoTimeFormatter.format(new Date()));
    };

    handleTick();
    const intervalId = setInterval(handleTick, 60_000);

    return () => clearInterval(intervalId);
  }, [isClient]);

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
      <HeroIdentityPanel
        name={introFrontmatter.name ?? "Moe Sadiq"}
        location={introFrontmatter.location ?? "Mediterranean"}
        clockLabel={cairoClock}
        timezoneLabel={introFrontmatter.timezoneLabel ?? "UTC+2"}
      />
      <div className="relative">
        {heroContent?.intro?.mdxSource ? (
          <div className="text-sm leading-7 text-[#000] dark:text-[#d5d5d5]">
            <MDXRemote {...heroContent.intro.mdxSource} components={introMdxComponents} />
          </div>
        ) : (
          <p className="text-sm leading-7 text-[#000] dark:text-[#d5d5d5]">
            I'm Moe—a designer-engineer who acts on his curiosity.
          </p>
        )}
        <button
          type="button"
          className="text-left text-sm mt-5 text-black relative z-10 block hover:text-neutral-600 focus-visible:outline-none"
          aria-label={introFrontmatter.moreInfoAriaLabel ?? "Show more information about Moe"}
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
            {introFrontmatter.moreInfoLabel ?? "More info"}
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
                  className="relative z-10 w-full max-w-3xl mb-5 overflow-hidden"
                  initial={{ opacity: 1, scale: 1, y: 0, height: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 1, scale: 1, y: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative rounded-[35px]" style={{ borderRadius: '35px' }}>
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors z-10"
                      aria-label="Close more info dialog"
                      onClick={handleCloseModal}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                      </svg>
                    </button>
                    <GlassCard
                    displacementScale={150}
                    blurAmount={0.1}
                      className="about w-full min-h-[548px] p-8 flex flex-col gap-6 md:flex-row"
                      style={{ borderRadius: '35px' }}
                    >
                      <div className="relative rounded-[35px] flex-1" style={{ borderRadius: '35px' }}>
                        <div className="pt-2 grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="flex flex-col gap-4">
                            <HeroBioText
                              mdxSource={heroContent?.bio?.mdxSource}
                              components={bioMdxComponents}
                            />
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                              {(bioFrontmatter.ctas ?? []).map((cta) => (
                                <a
                                  key={cta.href}
                                  href={cta.href}
                                  target={cta.target}
                                  rel={cta.rel}
                                  className={
                                    cta.variant === "secondary"
                                      ? "inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-white"
                                      : "inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-white/80 dark:focus-visible:outline-white"
                                  }
                                  aria-label={cta.ariaLabel}
                                >
                                  {cta.label}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="hidden md:flex md:flex-col gap-3">
                            <button
                              type="button"
                              className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
                              onClick={handleOpenDeskPhoto}
                              onKeyDown={handleDeskPhotoKeyDown}
                              aria-label="Expand rotating inspiration photo"
                            >
                              <div className="rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={activeProfilePhoto.id}
                                    initial={{ opacity: 0.4, scale: 0.98, filter: "blur(12px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                  >
                                    <Image
                                      src={activeProfilePhoto.src}
                                      alt={activeProfilePhoto.alt}
                                      width={activeProfilePhoto.width}
                                      height={activeProfilePhoto.height}
                                      className="w-full h-auto object-cover"
                                      priority={false}
                                    />
                                  </motion.div>
                                </AnimatePresence>
                              </div>
                            </button>
                            <div className="px-3 py-2 text-xs text-black/60 dark:text-white/60 text-center bg-black/5 dark:bg-white/5 rounded-2xl">
                              <p>{activeProfilePhoto.caption}</p>
                              <div className="mt-2 flex items-center justify-center gap-2">
                                {profilePhotos.map((photo, index) => (
                                  <button
                                    key={photo.id}
                                    type="button"
                                    aria-label={`Show ${photo.caption}`}
                                    aria-pressed={index === currentPhotoIndex}
                                    tabIndex={0}
                                    className={`h-2.5 w-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition ${
                                      index === currentPhotoIndex
                                        ? "bg-black dark:bg-white"
                                        : "bg-black/30 dark:bg-white/30"
                                    }`}
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      handleSelectPhoto(index);
                                    }}
                                    onKeyDown={(event) => {
                                      if (event.key !== "Enter" && event.key !== " ") {
                                        return;
                                      }

                                      event.preventDefault();
                                      event.stopPropagation();
                                      handleSelectPhoto(index);
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
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
