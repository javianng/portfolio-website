"use client";

import { useEffect } from "react";

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
    <main className="flex h-full min-h-[90vh] flex-col justify-between bg-white p-4 text-end">
      <div id="roles" className="flex flex-col">
        <p className="font-extralight">photographer</p>
        <p className="font-extralight">problem-solver</p>
        <p className="font-extralight">business analyst</p>
        <p className="font-extralight">software engineer</p>
      </div>
      <div id="introduction">
        <div id="responsive-container" className="w-full">
          <p id="responsive-subtitle-text" className="font-extralight">
            hi, i am
          </p>
          <h1 id="responsive-title-text" className="font-thin">
            Javian Ng
          </h1>
        </div>
      </div>
    </main>
  );
}
