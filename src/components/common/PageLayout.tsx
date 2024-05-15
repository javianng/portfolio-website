import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "../ui/progress";
import useLoading from "../hooks/useLoading";
import React, { useState, useEffect } from "react";

export type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function PageLayout(props: PageLayoutProps) {
  const {
    children,
    title = "Javian Ng",
    description = "Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer",
  } = props;

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
            <Head>
              <title>{title}</title>
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content={description} name="description" />
              <meta
                property="og:image"
                content="https://github.com/javianng/portfolio-website/blob/main/public/profilephoto.jpg?raw=true"
              />
              <meta
                property="og:title"
                content="Javian Ng - Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer"
              />
              <meta
                property="og:description"
                content="I run on espressos and kopi-peng. Am either building a project, or taking on a new challenge."
              />
              <meta
                property="og:url"
                content="https://portfolio-website-pearl-tau.vercel.app/"
              />
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
