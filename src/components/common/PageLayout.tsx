import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "../ui/progress";

type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export default function PageLayout(props: PageLayoutProps) {
  const {
    children,
    title = "Javian Ng",
    description = "Part-Time Developer, Part-Time Business Analyst, Full-Time Curious Adventurer",
    className = "text-brand-300 bg-neutral-50 dark:text-neutral-50 dark:bg-brand-300 sm:cursor-none cursor-default",
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2;
    const intervalTime = 50;
    const totalSteps = (totalDuration * 1000) / intervalTime;
    let steps = 0;
    const timer = setInterval(() => {
      steps += 1;
      const rawProgress = (steps / totalSteps) * 100;
      const progress = Math.min(100, Math.log10(rawProgress + 1) * 50);
      setProgress(progress);
      if (steps >= totalSteps) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsTransitioning(false);
        }, 500);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const loadingClass = isTransitioning ? "transition-out" : "";
  const contentClass = isLoading ? "" : "transition-in";

  return (
    <>
      <div className={`loading ${loadingClass}`}>
        {isLoading && (
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
            <p>Welcome to Javian's Page...</p>
            <Progress value={progress} className=" w-1/3 bg-brand-50" />
          </div>
        )}
      </div>
      <div className={`content ${contentClass}`}>
        {!isLoading && (
          <div className={className}>
            <Head>
              <title>{title}</title>
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content={description} name="description" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
