import { stagger } from "motion/react";

const framerConfig = {
  parentVariants: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.15),
      },
    },
  },
  cardVariants: {
    hidden: { opacity: 0, scale: 0.8, y: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  },

  textVariants: {
    hidden: { opacity: 0, scale: 0.8, y: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  },
};

export default framerConfig;
