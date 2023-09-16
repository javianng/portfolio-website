import Image from "next/image";
import LFG from "src/assets/experience/LFG.svg"
import LFGPhoto from "src/assets/experience/LFGPhoto.jpeg"
import ABYA from "src/assets/experience/ABYA.png"
import ABYAPhoto from "src/assets/experience/ABYAPhoto.jpg"
import CompClub from "src/assets/experience/CompClub.png"
import CompClubPhoto from "src/assets/experience/CompClubPhoto.jpg"

export const EXPERIENCE_DETAILS = [
    {
        title: "President",
        company_organisation: "NUS SoC Computing Club",
        duration: "September 2023 - Present", // duration format to be e.g. January 2023 - Present 
        className: "bg-ComputingClub-100 text-white",
        location: "Singapore",
        detail:
            <>
                <ul className='ml-3 list-disc'>
                    <li>In my role as President, I have the privilege of leading a dedicated team of Vice Presidents, including Jay Lynn (ER), Reina (IR), Le Xuan (SD), and Nathan (SL), along with our exceptional Directors, Secretaries, and Tech Leads. Together, we are committed to charting a course towards new heights of excellence for the Computing Club.
                    </li>
                    <li>My tenure as President is driven by a three-fold mission:</li>
                </ul>
                <ol className='ml-8 list-decimal'>
                    <li>Strengthening Internal Bonds: Our committee functions as a closely-knit and cohesive team, fostering collaboration and camaraderie among our members.</li>
                    <li>Establishing Partnerships: We actively seek partnerships and collaborations with other organizations to enrich our club&apos;s offerings and outreach.</li>
                    <li>Building Relationships with Advisors: We recognize the pivotal role played by our esteemed advisors in enabling and empowering us to serve the student population effectively.</li>
                </ol>
                <ul className='ml-3 list-disc'>
                    <li>My committee and I are excited to embark on this journey, infusing the Computing Club with fresh ideas, enthusiasm, and a renewed sense of purpose. Together, we aspire to make a positive impact and create memorable experiences for our fellow students.</li>
                </ul>
            </>,
        tags: ["Management", "Leadership", "Project Management"],
        logo:
            <>
                <Image src={CompClub} alt={"SoC Computing Club"} />
            </>,
        image: CompClubPhoto,
    },
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
