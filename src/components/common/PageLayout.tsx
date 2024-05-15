import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "../ui/progress";
import useLoading from "../hooks/useLoading";

export type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout(props: PageLayoutProps) {
  const { children } = props;
  const { isLoading, progress, isTransitioning } = useLoading();

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
          <div className="cursor-default bg-neutral-50 text-brand-300 sm:cursor-none dark:bg-brand-300 dark:text-neutral-50">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
