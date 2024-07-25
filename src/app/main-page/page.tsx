"use client";

import { useEffect } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";

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
    <ScrollArea className="w-full rounded-lg shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col justify-between bg-white p-4 text-end">
        <section id="roles" className="flex flex-col">
          <h2 className="font-extralight">photographer</h2>
          <h2 className="font-extralight">problem-solver</h2>
          <h2 className="font-extralight">business analyst</h2>
          <h2 className="font-extralight">software engineer</h2>
        </section>
        <section id="introduction">
          <div id="responsive-container" className="w-full">
            <p id="responsive-subtitle-text" className="font-extralight">
              hi, i am
            </p>
            <h1 id="responsive-title-text" className="font-thin">
              Javian Ng
            </h1>
          </div>
        </section>
      </main>
    </ScrollArea>
  );
}
