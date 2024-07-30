"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "~/components/ui/scroll-area";
import { containerVariants, itemVariantsRight } from "~/components/animation";

export default function HomePage() {
  // dynamic text sizing
  useEffect(() => {
    const setResponsiveTextSize = () => {
      const container = document.getElementById("responsive-container");
      const titleElement = document.getElementById("responsive-title-text");
      const subtitleElement = document.getElementById(
        "responsive-subtitle-text",
      );
      if (container && titleElement && subtitleElement) {
        const containerWidth = container.clientWidth;
        const titleFontSize = containerWidth * 0.2;
        const subtitleFontSize = containerWidth * 0.05;
        titleElement.style.fontSize = `${titleFontSize}px`;
        subtitleElement.style.fontSize = `${subtitleFontSize}px`;
      }
    };
    setResponsiveTextSize();
    window.addEventListener("resize", setResponsiveTextSize);
    return () => {
      window.removeEventListener("resize", setResponsiveTextSize);
    };
  }, []);
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col justify-between bg-white p-4 text-end">
        <motion.section
          id="roles"
          initial="hidden"
          animate="visible"
          className="flex flex-col"
          variants={containerVariants}
        >
          <motion.h2 className="font-extralight" variants={itemVariantsRight}>
            photographer
          </motion.h2>
          <motion.h2 className="font-extralight" variants={itemVariantsRight}>
            problem-solver
          </motion.h2>
          <motion.h2 className="font-extralight" variants={itemVariantsRight}>
            business analyst
          </motion.h2>
          <motion.h2 className="font-extralight" variants={itemVariantsRight}>
            software engineer
          </motion.h2>
        </motion.section>
        <section id="introduction">
          <div className="w-full" id="responsive-container">
            <motion.p
              id="responsive-subtitle-text"
              className="font-extralight"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              hi, i am
            </motion.p>
            <motion.h1
              id="responsive-title-text"
              className="pulsing-word font-thin"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {`Javian Ng`.split("").map((char, index) => (
                <span
                  key={index}
                  className="pulsing-char"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </motion.h1>
          </div>
        </section>
      </main>
    </ScrollArea>
  );
}
