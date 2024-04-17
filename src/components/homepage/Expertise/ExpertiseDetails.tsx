import Image from "next/image";

import CSS from "/public/logos/CSS.svg";
import NextJS from "/public/logos/NextJS.svg";
import React from "/public/logos/React.svg";

import Prisma from "/public/logos/Prisma.svg";
import mySQL from "/public/logos/mySQL.svg";

import Python from "/public/logos/Python.svg";
import R from "/public/logos/R.svg";

import Java from "/public/logos/Java.svg";
import Javascript from "/public/logos/Javascript.svg";
import Typescript from "/public/logos/Typescript.svg";
import {
  AppWindowMac,
  BetweenHorizontalStart,
  LineChart,
  MonitorSmartphone,
} from "lucide-react";

export const EXPERTISE_COMPONENT_DETAILS = [
  {
    name: "Frontend Development",
    subtitle: "ReactJS, NextJS, HTML, CSS",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    icon: <MonitorSmartphone className="h-12 w-12 sm:h-16 sm:w-16" />,
    logo: (
      <>
        <Image src={CSS as string} alt={"CSS"} />
        <Image src={NextJS as string} alt={"NextJS"} />
        <Image src={React as string} alt={"React"} />
      </>
    ),
  },
  {
    name: "Backend Development",
    subtitle: "Prisma, SQL",
    description: "Experienced with working on backend development.",
    icon: <BetweenHorizontalStart className="h-12 w-12 sm:h-16 sm:w-16" />,
    logo: (
      <>
        <Image src={Prisma as string} alt={"Prisma"} />
        <Image src={mySQL as string} alt={"mySQL"} />
      </>
    ),
  },
  {
    name: "Data Analytics",
    subtitle: "Python, R",
    description:
      "Analytical and detailed oriented, with knowledge and practical experience in data analytics.",
    icon: <LineChart className="h-12 w-12 sm:h-16 sm:w-16" />,
    logo: (
      <>
        <Image src={Python as string} alt={"Python"} />
        <Image src={R as string} alt={"R"} />
      </>
    ),
  },
  {
    name: "Software Development",
    subtitle: "Java, JavaScript, TypeScript",
    description:
      "Knowledge in both functional and object-oriented programming languages.",
    icon: <AppWindowMac className="h-12 w-12 sm:h-16 sm:w-16" />,
    logo: (
      <>
        <Image src={Java as string} alt={"Java"} />
        <Image src={Javascript as string} alt={"Javascript"} />
        <Image src={Typescript as string} alt={"Typescript"} />
      </>
    ),
  },
];
