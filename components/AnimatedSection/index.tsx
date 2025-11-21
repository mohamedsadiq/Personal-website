import { motion, type Transition } from 'framer-motion';
import { ReactNode } from 'react';
import { sharedMotionVariants, getSharedMotionTransition } from '../../utils/motionConfig';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  order?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  delay,
  order = 0,
  className = '',
}: AnimatedSectionProps) => {
  const baseTransition = getSharedMotionTransition(order) as Transition;
  const finalDelay = typeof delay === 'number' ? delay : baseTransition.delay;

  return (
    <motion.div
      className={className}
      variants={sharedMotionVariants}
      initial="hidden"
      animate="visible"
      transition={{ ...baseTransition, delay: finalDelay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
