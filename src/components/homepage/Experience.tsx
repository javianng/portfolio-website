import { MapPinIcon } from '@heroicons/react/24/outline'
import Tag from "../common/Tag";

const DETAILS = [
    {
        id: 1,
        title: "Software Developer Intern",
        company_organisation: "LFG",
        duration: "May 2023 - Present", // duration format to be e.g. January 2023 - Present 
        class_name: "bg-[#E50171] order-1 rounded-lg shadow-xl w-5/12 px-6 py-4",
        location: "Vietnam, Ho Chi Minh City",
        detail: <>
            <ul className='ml-3 list-disc'>
                <li>Collaborate with the development team to design and implement website and product features
                </li>
                <li>Write clean, efficient, and maintainable code using modern programming languages</li>
                <li>Participate in code reviews and testing to ensure the quality of the product</li>
                <li>Work closely with designers to ensure the user interface is responsive and user-friendly</li>
                <li>Help troubleshoot and debug any issues that arise during development</li>
                <li>Stay up-to-date with emerging trends and technologies in web development (especially with travel tech)</li>
            </ul>
        </>,
        tags: ["TypeScript", "Node.js", "Front-End Development", "React.js"]
    },
]

type CardProps = {
    id: number;
    title: string;
    company_organisation: string;
    duration: string;
    class_name: string;
    location: string;
    detail: JSX.Element;
    tags: string[];
}

export function Card({ id, title, company_organisation, duration, class_name, location, detail, tags }: CardProps) {
    if (id % 2 == 1) {
        return (
            <div className="mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg">{id}</h1>
                </div>
                <div className={class_name}>
                    <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
                    <h4 className="font-semibold text-white text-sm">{company_organisation} | {duration}</h4>
                    <div className='flex items-center mb-1'>
                        <MapPinIcon className='h-4 text-white mr-1' />
                        <h4 className=" font-semibold text-white text-sm"> {location} </h4>
                    </div>
                    <div className="text-sm leading-snug tracking-wide text-white text-opacity-100">{detail}</div>

                    <div className="mt-3 flex flex-wrap gap-1">
                        {tags.map((tag, i) => <Tag key={i} tagName={tag} />)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">{id}</h1>
            </div>
            <div className={class_name}>
                <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
                <h4 className="font-semibold text-white text-sm">{company_organisation} | {duration}</h4>
                <div className='flex items-center mb-1'>
                    <MapPinIcon className='h-4 text-white mr-1' />
                    <h4 className=" font-semibold text-white text-sm"> {location} </h4>
                </div>
                <div className="text-sm leading-snug tracking-wide text-white text-opacity-100">{detail}</div>

                <div className="mt-3 flex flex-wrap gap-1">
                    {tags.map((tag, i) => <Tag key={i} tagName={tag} />)}
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <>
            <h1 className="flex justify-center text-7xl font-bold mb-9 text-center">
                Professional<br />Experience
            </h1>
            <div className="container rounded-lg bg-gray-200 mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                    {DETAILS.map((cardDetails, i) => (
                        <Card key={i} {...cardDetails} />
                    ))}
                </div>
            </div>
        </>
    )
}