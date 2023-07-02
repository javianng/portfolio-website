import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export const EXPERTISE_COMPONENT_DETAILS = [
    {
        name: "Frontend Development",
        color: "decoration-brand-100",
        subtitle: "ReactJS, NextJS",
        description: "Deeply passionate about UI/UX and have actively developed my skills in HTML, CSS, JS, React, and NextJS frameworks.",
        icon: <ComputerDesktopIcon />,
    },
    {
        name: "Backend Development",
        color: "decoration-brand-200",
        subtitle: "Prisma, SQL",
        description: "Experienced with working on backend development.",
        icon: <CpuChipIcon />,
    },
    {
        name: "Data Analytics",
        color: "decoration-brand-300",
        subtitle: "Python, R",
        description: "Analytical and detailed oriented, with knowledge and practical experience in data analytics.",
        icon: <PresentationChartLineIcon />,
    },
    {
        name: "Software Development",
        color: "decoration-brand-100",
        subtitle: "Java, JavaScript, TypeScript",
        description: "Knowledge in both functional and object-oriented programming languages.",
        icon: <DevicePhoneMobileIcon />,
    },
];