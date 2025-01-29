"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { containerVariants, itemVariantsRight } from "~/components/animation";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function HomePage() {
  // dynamic text sizing with debounced resize handler
  const setResponsiveTextSize = useCallback(() => {
    const container = document.getElementById("responsive-container");
    const titleElement = document.getElementById("responsive-title-text");
    const subtitleElement = document.getElementById("responsive-subtitle-text");

    if (container && titleElement && subtitleElement) {
      const containerWidth = container.clientWidth;
      const titleFontSize = Math.min(containerWidth * 0.2, 200); // Cap max size
      const subtitleFontSize = Math.min(containerWidth * 0.05, 50);

      titleElement.style.fontSize = `${titleFontSize}px`;
      subtitleElement.style.fontSize = `${subtitleFontSize}px`;
    }
  }, []);

  useEffect(() => {
    setResponsiveTextSize();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(setResponsiveTextSize, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [setResponsiveTextSize]);

  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col justify-between bg-white p-4 text-end dark:bg-neutral-900">
        <motion.section
          id="roles"
          initial="hidden"
          animate="visible"
          className="flex flex-col"
          variants={containerVariants}
        >
          {[
            "photographer",
            "problem-solver",
            "business analyst",
            "software engineer",
          ].map((role, index) => (
            <motion.h2
              key={role}
              className="font-extralight"
              variants={itemVariantsRight}
              transition={{ delay: index * 0.1 }}
            >
              {role}
            </motion.h2>
          ))}
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
