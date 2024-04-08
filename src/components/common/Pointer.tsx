import React, { useState, useEffect } from "react";

type Position = {
  x: number;
  y: number;
};

const Dot = ({ position }: { position: Position }) => (
  <div
    style={{
      position: "absolute",
      top: `calc(${position.y}px - 5px)`,
      left: `calc(${position.x}px - 5px)`,
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      transition: "top 0.025s, left 0.025s",
      zIndex: 9999,
      pointerEvents: "none",
    }}
    className=" bg-brand-300 dark:bg-white"
  />
);

const OuterCircle = ({ position }: { position: Position }) => (
  <div
    style={{
      position: "absolute",
      top: `calc(${position.y}px - 25px)`,
      left: `calc(${position.x}px - 25px)`,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      transition: "top 0.05s, left 0.05s",
      zIndex: 9999,
      pointerEvents: "none",
    }}
    className="border-2 border-brand-200 dark:border-brand-100"
  />
);

const PointerFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { pageX: number; pageY: number }) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <OuterCircle position={position} />
      <Dot position={position} />
    </div>
  );
};

export default PointerFollower;
