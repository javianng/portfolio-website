import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import PointerFollower from "~/components/common/Pointer";
import React, { createContext, useState, useEffect } from "react";

export const ClassNameContext = createContext({
  className: "",
  toggleClassName: () => {},
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const savedClassName = localStorage.getItem("className");
    if (savedClassName) {
      setClassName(savedClassName);
    }
  }, []);

  const toggleClassName = () => {
    setClassName((prevClassName) => {
      const newClassName = prevClassName === "dark" ? "" : "dark";
      localStorage.setItem("className", newClassName);
      return newClassName;
    });
  };

  return (
    <ClassNameContext.Provider value={{ className, toggleClassName }}>
      <div className={className}>
        <Component {...pageProps} />
        <Analytics />
        <PointerFollower />
      </div>
    </ClassNameContext.Provider>
  );
};

export default MyApp;
