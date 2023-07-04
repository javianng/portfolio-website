import Image from "next/image";
import LFG from "src/assets/experience/LFG.svg"
import LFGPhoto from "src/assets/experience/LFGPhoto.jpeg"

export const EXPERIENCE_DETAILS = [
    {
        title: "Software Developer Intern",
        company_organisation: "LFG",
        duration: "May 2023 - Present", // duration format to be e.g. January 2023 - Present 
        className: "bg-LFG-50 text-white hover:text-LFG-50 hover:bg-white",
        location: "Vietnam, Ho Chi Minh City",
        detail:
            <>
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
        tags: ["TypeScript", "Node.js", "Front-End Development", "React.js"],
        logo:
            <>
                <Image src={LFG as string} alt={""} />
            </>,
        image: LFGPhoto,
    },
]
