/**
 * @typedef {import('framer-motion').MotionProps} MotionProps
 * @typedef {import('framer-motion').Transition} MotionTransition
 */
export const sharedLegacyProps = {
  initial: {
    opacity: 0,
    top: "20px",
    position: "relative",
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    top: "0",
    position: "relative",
    filter: "blur(0px)",
  },
};

export const sharedMotionVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/**
 * @param {number} [order=0]
 * @returns {MotionTransition}
 */
export const getSharedMotionTransition = (order = 0) => ({
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.6,
  delay: 0.1 + order * 0.1,
});

/**
 * @param {number} [order=0]
 * @returns {MotionProps}
 */
export const getSharedMotionProps = (order = 0) => ({
  variants: sharedMotionVariants,
  initial: "hidden",
  animate: "visible",
  transition: getSharedMotionTransition(order),
});

export const sharedMotionCtl = {
  variants: sharedMotionVariants,
  getTransition: getSharedMotionTransition,
};

/**
 * @param {number} [order=0]
 * @returns {Pick<MotionProps, 'initial' | 'animate' | 'transition'>}
 */
export const getSharedLegacyProps = (order = 0) => ({
  initial: sharedLegacyProps.initial,
  animate: sharedLegacyProps.animate,
  transition: getSharedMotionTransition(order),
});
