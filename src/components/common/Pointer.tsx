import React, { useState, useEffect, useCallback } from "react";

type Position = {
  x: number;
  y: number;
};

const Dot = React.memo(({ position }: { position: Position }) => (
  <div
    style={{
      position: "absolute",
      transition: "top 0.025s, left 0.025s",
      zIndex: 9999,
      pointerEvents: "none",
      top: `calc(${position.y}px - 5px)`,
      left: `calc(${position.x}px - 5px)`,
      width: "10px",
      height: "10px",
      borderRadius: "50%",
    }}
    className="bg-brand-300 dark:bg-white"
  />
));

const OuterCircle = React.memo(({ position }: { position: Position }) => (
  <div
    style={{
      position: "absolute",
      zIndex: 9999,
      pointerEvents: "none",
      top: `calc(${position.y}px - 25px)`,
      left: `calc(${position.x}px - 25px)`,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      transition: "top 0.05s, left 0.05s",
    }}
    className="border-2 border-brand-200 dark:border-brand-100"
  />
));

const PointerFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: { pageX: number; pageY: number }) => {
      setPosition({ x: event.pageX, y: event.pageY });
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div>
      <OuterCircle position={position} />
      <Dot position={position} />
    </div>
  );
};

export default PointerFollower;
