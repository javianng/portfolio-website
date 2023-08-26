import Image from "next/image";
import LFG from "src/assets/experience/LFG.svg"
import LFGPhoto from "src/assets/experience/LFGPhoto.jpeg"
import ABYA from "src/assets/experience/ABYA.png"
import ABYAPhoto from "src/assets/experience/ABYAPhoto.jpg"

export const EXPERIENCE_DETAILS = [
    {
        title: "Software Developer Intern",
        company_organisation: "LFG",
        duration: "May 2023 - August 2023", // duration format to be e.g. January 2023 - Present 
        className: "bg-LFG-50 text-white",
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
        tags: ["TypeScript", "Node.js", "Full-Stack Development", "React.js", "Software Development", "Product Development"],
        logo:
            <>
                <Image src={LFG as string} alt={"LFG"} />
            </>,
        image: LFGPhoto,
    },
    {
        title: "Web Developer Lead",
        company_organisation: "ASEAN Business Youth Association",
        duration: "June 2023 - Present", // duration format to be e.g. January 2023 - Present 
        className: "bg-ABYA-50 text-blakc",
        location: "Singapore",
        detail:
            <>
                <ul className='ml-3 list-disc'>
                    <li>Leading a web development team of 3 in building and maintaining the organisation&apos;s website</li>
                    <li>Collaborate with the development team to design and implement website and product features
                    </li>
                    <li>Lead and conduct code reviews and testing to ensure the quality of the product</li>
                    <li>Work closely with designers to ensure the user interface is responsive and user-friendly</li>
                    <li>Help troubleshoot and debug any issues that arise during development</li>
                </ul>
            </>,
        tags: ["TypeScript", "Front-End Development", "React.js"],
        logo:
            <>
                <Image src={ABYA} alt={"ASEAN Business Youth Association"} />
            </>,
        image: ABYAPhoto,
    },
]
