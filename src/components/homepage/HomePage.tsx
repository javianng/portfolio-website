import React from "react";
import Wave from "react-wavify";
import NextButton from "../common/NextButton";

const waveOptions = [
  {
    height: 1,
    amplitude: 150,
    speed: 0.05,
    points: 3,
  },
  {
    height: 50,
    amplitude: 130,
    speed: 0.15,
    points: 3,
  },
  {
    height: 70,
    amplitude: 120,
    speed: 0.1,
    points: 3,
  },
];

type WaveComponentProps = {
  fill: string;
  opacity: number;
  options: {
    height: number;
    amplitude: number;
    speed: number;
    points: number;
  };
};

const WaveComponent: React.FC<WaveComponentProps> = ({
  fill,
  opacity,
  options,
}) => (
  <Wave
    className="absolute h-[40vh] w-full"
    fill={fill}
    paused={false}
    options={options}
    style={{ opacity: opacity }}
  />
);

export default function HomePage() {
  return (
    <>
      <div
        id="Home"
        className="relative h-[90vh] bg-brand-50 dark:bg-brand-300"
      >
        <div className="flex h-[50vh] flex-col items-center justify-end">
          <p className="text-6xl font-bold sm:text-8xl">JAVIAN NG</p>
          <p className="text-xs font-semibold sm:text-lg">
            SOFTWARE DEVELOPER & BUSINESS ANALYST
          </p>
        </div>

        {/* Waves Animation */}
        <div className="absolute hidden h-[40vh] w-full dark:block">
          {waveOptions.map((option, index) => (
            <WaveComponent
              key={index}
              fill={
                index === 0 ? "#395B64" : index === 1 ? "#A5C9CA" : "#E7F6F2"
              }
              opacity={index === 0 ? 1 : 0.5}
              options={option}
            />
          ))}
        </div>

        <div className="absolute h-[40vh] w-full dark:hidden">
          {waveOptions.map((option, index) => (
            <WaveComponent
              key={index}
              fill={
                index === 0 ? "#2C3333" : index === 1 ? "#A5C9CA" : "#E7F6F2"
              }
              opacity={index === 0 ? 1 : 0.5}
              options={option}
            />
          ))}
        </div>
      </div>
      <NextButton url="#AboutMe" />
    </>
  );
}
