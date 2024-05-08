import React from "react";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import PointerFollower from "~/components/common/Pointer";
import ThemeProvider from "~/components/common/ThemeProvider";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
      <Analytics />
      <PointerFollower />
    </ThemeProvider>
  );
};

export default MyApp;
