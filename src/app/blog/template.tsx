"use client";

import { motion, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

const templateVariants: Variants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function BlogTemplate({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={templateVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex w-full"
    >
      {children}
    </motion.div>
  );
}
