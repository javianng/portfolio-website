import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

// logo
import NextJS from "src/assets/logos/NextJS.svg"
import React from "src/assets/logos/React.svg"
import CSS from "src/assets/logos/CSS.svg"

import Prisma from "src/assets/logos/Prisma.svg"
import mySQL from "src/assets/logos/mySQL.svg"

import Python from "src/assets/logos/Python.svg"
import R from "src/assets/logos/R.svg"

import Java from "src/assets/logos/Java.svg"
import Javascript from "src/assets/logos/Javascript.svg"
import Typescript from "src/assets/logos/Typescript.svg"

export const EXPERTISE_COMPONENT_DETAILS = [
    {
        name: "Frontend Development",
        decorationColor: "decoration-brand-100 group-hover:decoration-white",
        subtitle: "ReactJS, NextJS, HTML, CSS",
        description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        icon: <ComputerDesktopIcon />,
        color: "hover:bg-brand-100",
        skillLogo:
            <>
                <Image src={NextJS} alt={'NextJS'} className='h-fit' />
                <Image src={React} alt={'React'} className='h-fit' />
                <Image src={CSS} alt={'CSS'} className='h-fit' />
            </>
    },
    {
        name: "Backend Development",
        decorationColor: "decoration-brand-200 group-hover:decoration-white",
        subtitle: "Prisma, SQL",
        description: "Experienced with working on backend development.",
        icon: <CpuChipIcon />,
        color: "hover:bg-brand-200 hover:text-white",
        skillLogo:
            <>
                <Image src={Prisma} alt={'Prisma'} className='h-fit' />
                <Image src={mySQL} alt={'mySQL'} className='h-fit' />
            </>
    },
    {
        name: "Data Analytics",
        decorationColor: "decoration-brand-300 group-hover:decoration-white",
        subtitle: "Python, R",
        description: "Analytical and detailed oriented, with knowledge and practical experience in data analytics.",
        icon: <PresentationChartLineIcon />,
        color: "hover:bg-brand-300 hover:text-white",
        skillLogo:
            <>
                <Image src={Python} alt={'Python'} className='h-fit' />
                <Image src={R} alt={'R'} className='h-fit' />
            </>
    },
    {
        name: "Software Development",
        decorationColor: "decoration-brand-100 group-hover:decoration-white",
        subtitle: "Java, JavaScript, TypeScript",
        description: "Knowledge in both functional and object-oriented programming languages.",
        icon: <DevicePhoneMobileIcon />,
        color: "hover:bg-brand-100",
        skillLogo:
            <>
                <Image src={Java} alt={'Java'} className='h-fit' />
                <Image src={Javascript} alt={'JavaScript'} className='h-fit' />
                <Image src={Typescript} alt={'TypeScript'} className='h-fit' />
            </>
    },
];