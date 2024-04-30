import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import Placeholder from "/public/experience/Placeholder.webp";
import LFG from "/public/experience/LFG.svg";
import LFGPhoto from "/public/experience/LFGPhoto.jpeg";
import ABYA from "/public/experience/ABYA.png";
import ABYAPhoto from "/public/experience/ABYAPhoto.jpg";
import CompClub from "/public/experience/CompClub.png";
import CompClubPhoto from "/public/experience/CompClubPhoto.jpg";
import Parametriks from "/public/experience/Parametriks.png";
import AstarSIgN from "/public/experience/AstarSIgN.png";

export type EXPERIENCE_DETAILS_TYPE = {
  title: string;
  companyOrganization: string;
  duration: string;
  className: string;
  location: string;
  detail: ReactNode;
  tags: string[];
  logo: ReactNode;
  image: string | StaticImageData;
};

export const EXPERIENCE_DETAILS = [
  {
    title: "Data Scientist Intern",
    companyOrganization: "Parametriks",
    duration: "August 2024 - January 2025",
    className: "bg-Parametriks-50 text-white",
    location: "Paris, France",
    detail: (
      <>
        <ul className="ml-3 list-disc">
          <li>
            Developing machine learning algorithms for risk analysis and
            prediction.
          </li>
          <li>Enhancing AI-powered analytics for real-time risk management.</li>
          <li>
            Integrating diverse data sources to improve predictive capabilities.
          </li>
          <li>Automating processes to increase operational efficiency.</li>
          <li>Refining predictive models for better accuracy.</li>
          <li>
            Contributing to innovative solutions in dynamic risk assessment and
            insurance strategies.
          </li>
        </ul>
      </>
    ),
    tags: ["Data Science", "Data Analytics", "Machine Learning"],
    logo: <Image src={Parametriks} alt={"Parametriks"} className="w-1/6" />,
    image: Placeholder,
  },
  {
    title: "BioInformatics Data Scientist Intern",
    companyOrganization: "A*Star",
    duration: "May 2024 - August 2024",
    className: "bg-white text-black border-AStar-50 border-4",
    location: "Singapore",
    detail: (
      <>
        <h3>
          Real-Time Analysis Pipeline for Nanopore Sequencing and Comparative
          Data Analysis
        </h3>

        <ul className="ml-3 list-disc">
          <li>
            Project Overview: The primary goal of this upcoming project is to
            advance analytics capabilities for cancer vaccine research using
            Nanopore sequencing technology. This project will include developing
            a real-time analysis pipeline and comparing Singleron versus
            Nanopore data in TCR repertoire analysis.
          </li>
          <li>
            Objectives:
            <ul className="ml-3 list-disc">
              <li>
                Real-Time Sequencing Analysis: To develop on-the-fly data
                analytics that will enable real-time monitoring of sequencing
                quality, establish data-informed sequencing endpoints, and offer
                a code-free analytics capability.
              </li>
              <li>
                Comparative Data Analysis: To compare the efficacy of Singleron
                and Nanopore technologies in analyzing TCR repertoires, aiming
                to identify the most accurate and reliable method for use in
                immunotherapy applications.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
    tags: [
      "Data Science",
      "Bioinformatics",
      "Data Analytics",
      "Machine Learning",
      "Research",
    ],
    logo: <Image src={AstarSIgN} alt={"Astar SIgN"} className="w-1/2" />,
    image: Placeholder,
  },
  {
    title: "President",
    companyOrganization: "NUS SoC Computing Club",
    duration: "September 2023 - Present",
    className: "bg-ComputingClub-100 text-white",
    location: "Singapore",
    detail: (
      <>
        <ul className="ml-3 list-disc">
          <li>
            In my role as President, I have the privilege of leading a dedicated
            team of Vice Presidents, including Jay Lynn (ER), Reina (IR), Le
            Xuan (SD), and Nathan (SL), along with our exceptional Directors,
            Secretaries, and Tech Leads. Together, we are committed to charting
            a course towards new heights of excellence for the Computing Club.
          </li>
          <li>My tenure as President is driven by a three-fold mission:</li>
          <ol className="ml-8 list-decimal">
            <li>
              Strengthening Internal Bonds: Our committee functions as a
              closely-knit and cohesive team, fostering collaboration and
              camaraderie among our members.
            </li>
            <li>
              Establishing Partnerships: We actively seek partnerships and
              collaborations with other organizations to enrich our club&apos;s
              offerings and outreach.
            </li>
            <li>
              Building Relationships with Advisors: We recognize the pivotal
              role played by our esteemed advisors in enabling and empowering us
              to serve the student population effectively.
            </li>
          </ol>
          <li>
            My committee and I are excited to embark on this journey, infusing
            the Computing Club with fresh ideas, enthusiasm, and a renewed sense
            of purpose. Together, we aspire to make a positive impact and create
            memorable experiences for our fellow students.
          </li>
        </ul>
      </>
    ),
    tags: ["Management", "Leadership", "Project Management"],
    logo: <Image src={CompClub} alt={"SoC Computing Club"} className="w-1/5" />,
    image: CompClubPhoto,
  },
  {
    title: "Software Developer Intern",
    companyOrganization: "LFG",
    duration: "May 2023 - August 2023",
    className: "bg-LFG-50 text-white",
    location: "Vietnam, Ho Chi Minh City",
    detail: (
      <>
        <ul className="ml-3 list-disc">
          <li>
            Collaborate with the development team to design and implement
            website and product features
          </li>
          <li>
            Write clean, efficient, and maintainable code using modern
            programming languages
          </li>
          <li>
            Participate in code reviews and testing to ensure the quality of the
            product
          </li>
          <li>
            Work closely with designers to ensure the user interface is
            responsive and user-friendly
          </li>
          <li>
            Help troubleshoot and debug any issues that arise during development
          </li>
          <li>
            Stay up-to-date with emerging trends and technologies in web
            development (especially with travel tech)
          </li>
        </ul>
      </>
    ),
    tags: [
      "TypeScript",
      "Node.js",
      "Full-Stack Development",
      "React.js",
      "Software Development",
      "Product Development",
    ],
    logo: <Image src={LFG as string} alt={"LFG"} className="w-1/5" />,
    image: LFGPhoto,
  },
  {
    title: "Web Developer Lead",
    companyOrganization: "ASEAN Business Youth Association",
    duration: "June 2023 - Present", // duration format to be e.g. January 2023 - Present
    className: "bg-ABYA-50 text-brand-300",
    location: "Singapore",
    detail: (
      <>
        <ul className="ml-3 list-disc">
          <li>
            Leading a web development team of 3 in building and maintaining the
            organisation&apos;s website
          </li>
          <li>
            Collaborate with the development team to design and implement
            website and product features
          </li>
          <li>
            Lead and conduct code reviews and testing to ensure the quality of
            the product
          </li>
          <li>
            Work closely with designers to ensure the user interface is
            responsive and user-friendly
          </li>
          <li>
            Help troubleshoot and debug any issues that arise during development
          </li>
        </ul>
      </>
    ),
    tags: ["TypeScript", "Front-End Development", "React.js"],
    logo: (
      <Image
        src={ABYA}
        alt="ASEAN Business Youth Association"
        className="w-1/5"
      />
    ),
    image: ABYAPhoto,
  },
];
