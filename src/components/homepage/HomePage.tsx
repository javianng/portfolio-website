import React from "react";
import Wave from "react-wavify";
import NextButton from "../common/NextButton";

export default function HomePage() {
  return (
    <>
      <div id="Home" className="relative h-[90vh] bg-brand-50">
        <div className="flex h-[50vh] flex-col items-center justify-end">
          <p className="text-6xl font-bold sm:text-8xl">JAVIAN NG</p>
          <p className="text-xs font-semibold sm:text-lg">
            SOFTWARE DEVELOPER & BUSINESS ANALYST
          </p>
        </div>

        {/* Waves Animation */}

        <div className="absolute h-[40vh] w-full">
          <Wave
            className="absolute h-[40vh] w-full"
            fill="#2C3333"
            paused={false}
            options={{
              height: 1,
              amplitude: 150,
              speed: 0.05,
              points: 3,
            }}
          />
          <Wave
            className="absolute h-[40vh] w-full opacity-50"
            fill="#A5C9CA"
            paused={false}
            options={{
              height: 50,
              amplitude: 130,
              speed: 0.15,
              points: 3,
            }}
          />
          <Wave
            className="absolute h-[40vh] w-full opacity-50"
            fill="#E7F6F2"
            paused={false}
            options={{
              height: 70,
              amplitude: 120,
              speed: 0.1,
              points: 3,
            }}
          />
        </div>
      </div>
      <NextButton url="#AboutMe" />
    </>
  );
}
