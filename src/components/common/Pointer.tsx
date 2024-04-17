import React, { useState, useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

const Dot = React.memo(({ position }: { position: Position }) => (
  <div
    style={{
      position: "absolute",
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
    }}
    className="border-2 border-brand-200 dark:border-brand-100"
  />
));

const PointerFollower = () => {
  const [dotPosition, setDotPosition] = useState<Position>({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const targetPosition = useRef<Position>({ x: 0, y: 0 });

  const handleMouseMove = (event: { pageX: number; pageY: number }) => {
    targetPosition.current = { x: event.pageX, y: event.pageY };
  };

  useEffect(() => {
    const handleFrame = () => {
      setDotPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.9,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.9,
      }));
      setCirclePosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(handleFrame);
    };
    handleFrame();
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden sm:block">
      <OuterCircle position={circlePosition} />
      <Dot position={dotPosition} />
    </div>
  );
};

export default PointerFollower;
