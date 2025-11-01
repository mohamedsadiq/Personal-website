import { motion, Variants } from "framer-motion";
import { useRouter } from 'next/router';

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Optimized animation variants
  const pageVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,

     
      // Removed blur filter for better performance
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      // Using simpler transition for better performance
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.4,
      }
    }
  };

  // Add will-change for better performance
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: pageVariants,
    className: "min-h-screen will-change-transform",
    // Add hardware acceleration
    style: { 
      transform: 'translateZ(0)' as const,
      backfaceVisibility: 'hidden' as const,
      perspective: 1000
    }
  } as const;

  return (
    <motion.div key={router.route} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
