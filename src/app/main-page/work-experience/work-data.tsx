import Image, { type StaticImageData } from "next/image";

type Section = {
  title: string;
  companyOrganization: string;
  duration: string;
  className: string;
  location: string;
  detail: React.ReactNode;
  tags: string[];
  logo: string;
  image?: string | StaticImageData;
};

export const WORK_DETAILS: Section[] = [
  {
    title: "Data Scientist Intern",
    companyOrganization: "Parametriks",
    duration: "August 2024 - January 2025",
    className: "border-l-[#201E28]",
    location: "Paris, France",
    detail: (
      <article>
        <ul className="ul list-disc">
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
      </article>
    ),
    tags: ["Data Science", "Data Analytics", "Machine Learning"],
    logo: "/experience/Parametriks.png",
  },
  {
    title: "Research Intern",
    companyOrganization: "Singapore Immunology Network (SIgN)",
    duration: "May 2024 - August 2024",
    className: "border-l-[#102F82]",
    location: "Singapore",
    detail: (
      <article>
        <h4 className="blockquote">
          Real-Time Analysis Pipeline for Nanopore Sequencing and Comparative
          Data Analysis
        </h4>
        <ul className="ul list-disc">
          <li>
            Project Overview: The primary goal of this upcoming project is to
            advance analytics capabilities for cancer vaccine research using
            Nanopore sequencing technology. This project will include developing
            a real-time analysis pipeline and comparing Singleron versus
            Nanopore data in TCR repertoire analysis.
          </li>
          <li>Objectives:</li>
          <ol className="ml-8 list-outside list-decimal">
            <li>
              Real-Time Sequencing Analysis: To develop on-the-fly data
              analytics that will enable real-time monitoring of sequencing
              quality, establish data-informed sequencing endpoints, and offer a
              code-free analytics capability.
            </li>
            <li>
              Comparative Data Analysis: To compare the efficacy of Singleron
              and Nanopore technologies in analyzing TCR repertoires, aiming to
              identify the most accurate and reliable method for use in
              immunotherapy applications.
            </li>
          </ol>
        </ul>
      </article>
    ),
    tags: ["Bioinformatics", "Data Science", "Machine Learning", "Research"],
    logo: "/experience/AstarSIgN.png",
  },
  {
    title: "President",
    companyOrganization: "NUS SoC Computing Club",
    duration: "September 2023 - Present",
    className: "border-l-[#2A378A]",
    location: "Singapore",
    detail: (
      <article>
        <ul className="ul">
          <li>
            In my role as President, I have the privilege of leading a dedicated
            team of Vice Presidents, Directors, Secretaries, and Tech Leads.
            Together, we are committed to charting a course towards new heights
            of excellence for the Computing Club.
          </li>
          <li>My tenure as President is driven by a three-fold mission:</li>
          <ol className="ml-8 list-decimal">
            <li>Strengthening Internal Bonds</li>
            <li>Establishing Partnerships</li>
            <li>Building Relationships with Advisors</li>
          </ol>
        </ul>
      </article>
    ),
    tags: ["Management", "Leadership", "Project Management"],
    logo: "/experience/CompClub.png",
    image: "/experience/CompClubPhoto.jpg",
  },
  {
    title: "Software Developer Intern",
    companyOrganization: "LFG",
    duration: "May 2023 - August 2023",
    className: "border-l-[#E50171]",
    location: "Vietnam, Ho Chi Minh City",
    detail: (
      <article>
        <ul className="ul">
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
      </article>
    ),
    tags: [
      "TypeScript",
      "Node.js",
      "Full-Stack Development",
      "React.js",
      "Software Development",
      "Product Development",
    ],
    logo: "/experience/LFG.svg",
    image: "/experience/LFGPhoto.jpeg",
  },
  {
    title: "Web Developer Lead",
    companyOrganization: "ASEAN Business Youth Association",
    duration: "June 2023 - Present", // duration format to be e.g. January 2023 - Present
    className: "border-l-[#F6F2AE]",
    location: "Singapore",
    detail: (
      <article>
        <ul className="ul">
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
      </article>
    ),
    tags: ["TypeScript", "Front-End Development", "React.js"],
    logo: "/experience/ABYA.png",
    image: "/experience/ABYAPhoto.jpg",
  },
];
