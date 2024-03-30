import React, { createContext, useState } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const ClassNameContext = createContext({
  className: "",
  toggleClassName: () => {},
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [className, setClassName] = useState("");

  const toggleClassName = () => {
    setClassName((prevClassName) => (prevClassName === "dark" ? "" : "dark"));
  };

  return (
    <ClassNameContext.Provider value={{ className, toggleClassName }}>
      <div className={className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ClassNameContext.Provider>
  );
};

export default MyApp;
