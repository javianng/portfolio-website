import React from "react";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import PointerFollower from "~/components/common/Pointer";
import ThemeProvider from "~/components/common/ThemeProvider";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title content="Javian Ng" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer"
          name="description"
        />
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
      <Component {...pageProps} />
      <Analytics />
      <PointerFollower />
    </ThemeProvider>
  );
};

export default MyApp;
