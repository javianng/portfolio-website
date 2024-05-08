import React, { useState, useEffect, ReactNode } from "react";

interface WindowProps {
  children: ReactNode;
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const Window: React.FC<WindowProps> = ({ children }) => {
  const windowWidth = useWindowWidth();

  return windowWidth > 640 ? (
    <div className="h-full w-full overflow-hidden rounded-lg shadow-2xl">
      <div className="bg-neutral-200 px-4 py-2">
        <div className="flex items-center space-x-2 py-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="bg-white p-4">{children}</div>
    </div>
  ) : (
    <div className="relative aspect-[0.4796748] max-h-[90vh] min-h-[52rem] max-w-[90vw] overflow-hidden rounded-[2rem] border-8 border-black bg-white shadow-2xl">
      <div className="flex">{children}</div>
      <div className="flex w-full items-center justify-center">
        <div className="absolute top-4 h-[3.5%] w-[33%] items-center rounded-3xl bg-black">
          <div className="h-[12.5%]" />
          <div className="absolute right-2 aspect-square h-[75%] rounded-full bg-neutral-800" />
        </div>
        <div className="absolute bottom-4 h-2 w-[45%] items-center rounded-3xl bg-neutral-200" />
      </div>
    </div>
  );
};

export default Window;
