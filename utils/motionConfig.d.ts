import type { MotionProps, Variants, Transition } from 'framer-motion';

export declare const sharedLegacyProps: {
  initial: NonNullable<MotionProps['initial']>;
  animate: NonNullable<MotionProps['animate']>;
};

export declare const sharedMotionVariants: Variants;

export declare const getSharedMotionTransition: (order?: number) => Transition;

export declare const getSharedMotionProps: (order?: number) => MotionProps;

export declare const sharedMotionCtl: {
  variants: Variants;
  getTransition: (order?: number) => Transition;
};

export declare const getSharedLegacyProps: (order?: number) => {
  initial: NonNullable<MotionProps['initial']>;
  animate: NonNullable<MotionProps['animate']>;
  transition: Transition;
};
