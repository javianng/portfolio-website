import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'

const EXPERTISE_COMPONENT_DETAILS = [
    {
        name: "Frontend Development",
        color: "decoration-gray-300",
        subtitle: "ReactJS, NextJS",
        description: "Ipsum velit tempor consequat veniam consequat ex esse ex velit qui nisi nostrud.",
        icon: <ComputerDesktopIcon />,
    },
    {
        name: "Backend Development",
        color: "decoration-red-300",
        subtitle: "Prisma",
        description: "Ipsum velit tempor consequat veniam consequat ex esse ex velit qui nisi nostrud.",
        icon: <CpuChipIcon />,
    },
    {
        name: "Data Analytics",
        color: "decoration-grey-400",
        subtitle: "amet",
        description: "Ipsum velit tempor consequat veniam consequat ex esse ex velit qui nisi nostrud.",
        icon: <PresentationChartLineIcon />,
    },
];

type ExpertiseComponentProps = {
    name: string;
    color: string;
    subtitle: string;
    description: string;
    icon: JSX.Element;
};

const ExpertiseComponent = ({ name, color, subtitle, description, icon }: ExpertiseComponentProps) => {
    return (
        <div className="tracking-tight p-3 border-black border-2">
            <div className='px-3 py-8'>
                <div className='flex align-top pb-4'>
                    <div className='w-16 mr-4'>
                        {icon}
                    </div>
                    <div>
                        <div className='m-2'></div>
                        <h2 className={`${color} text-4xl font-bold mb-2 underline decoration-solid decoration-8`}>
                            {name}
                        </h2>
                        <h3 className="text-4xl font-bold">
                            {subtitle}
                        </h3>
                    </div>
                </div>
                <div className='flex'>
                    <div className='grid grid-cols-1'>
                        <p className='my-[-4px] text-gray-500'>
                            &lt;h1&gt;
                        </p>
                        <p className='text-l border-l-[1.5px] ml-5 pl-4 py-3 border-gray-500'>
                            {description}
                        </p>
                        <p className='my-[-4px] text-gray-500'>
                            &lt;h1/&gt;
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default function Expertise() {
    return (
        <>
            <h1 className="flex justify-center text-8xl font-bold mb-9"
            >
                My Expertise
            </h1>
            <div className='flex justify-center'>
                <div className="
                    grid grid-cols-1 gap-4
                    w-11/12 max-w-5xl"
                >
                    {EXPERTISE_COMPONENT_DETAILS.map((componentDetails, i) => (
                        <>
                            <ExpertiseComponent key={i} {...componentDetails} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}