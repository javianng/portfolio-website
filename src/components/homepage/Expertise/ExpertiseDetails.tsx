import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export const EXPERTISE_COMPONENT_DETAILS = [
    {
        name: "Frontend Development",
        decorationColor: "decoration-brand-100 group-hover:decoration-white",
        subtitle: "ReactJS, NextJS, HTML, CSS",
        description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        icon: <ComputerDesktopIcon />,
        color: "hover:bg-brand-100",

    },
    {
        name: "Backend Development",
        decorationColor: "decoration-brand-200 group-hover:decoration-white",
        subtitle: "Prisma, SQL",
        description: "Experienced with working on backend development.",
        icon: <CpuChipIcon />,
        color: "hover:bg-brand-200 hover:text-white",

    },
    {
        name: "Data Analytics",
        decorationColor: "decoration-brand-300 group-hover:decoration-white",
        subtitle: "Python, R",
        description: "Analytical and detailed oriented, with knowledge and practical experience in data analytics.",
        icon: <PresentationChartLineIcon />,
        color: "hover:bg-brand-300 hover:text-white",

    },
    {
        name: "Software Development",
        decorationColor: "decoration-brand-100 group-hover:decoration-white",
        subtitle: "Java, JavaScript, TypeScript",
        description: "Knowledge in both functional and object-oriented programming languages.",
        icon: <DevicePhoneMobileIcon />,
        color: "hover:bg-brand-100",

    },
];