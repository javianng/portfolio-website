import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import PointerFollower from "~/components/common/Pointer";
import ThemeProvider from "~/components/common/ThemeProvider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
      <PointerFollower />
    </>
  );
};

export default MyApp;
