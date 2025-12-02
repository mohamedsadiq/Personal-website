import { AnimatePresence, motion } from "framer-motion";
import { GlassCard } from "@developer-hub/liquid-glass";
import { HeroCtaButton } from "./HeroCtaButton";

export const HeroModal = ({
  isOpen,
  onClose,
  dialogTitleId,
  headingText,
  bodySlot,
  ctas,
  photoSlot,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close overlay"
            onClick={onClose}
          />
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative z-10 w-full max-w-3xl mb-5 overflow-hidden"
            initial={{ opacity: 1, scale: 1, y: 0, height: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
            exit={{ opacity: 1, scale: 1, y: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative rounded-[35px]" style={{ borderRadius: "35px" }}>
              <button
                type="button"
                className="absolute right-4 top-4 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors z-10"
                aria-label="Close more info dialog"
                onClick={onClose}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
              <GlassCard
                displacementScale={150}
                blurAmount={0.1}
                className="about w-full min-h-[548px] p-8 flex flex-col gap-6 md:flex-row"
                style={{ borderRadius: "35px" }}
              >
                {headingText ? (
                  <h2 id={dialogTitleId} className="sr-only">
                    {headingText}
                  </h2>
                ) : null}
                <div className="relative rounded-[35px] flex-1" style={{ borderRadius: "35px" }}>
                  <div className="pt-2 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                      {bodySlot}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        {ctas?.map((cta) => (
                          <HeroCtaButton key={cta.href} {...cta} />
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex md:flex-col gap-3">
                      {photoSlot}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
