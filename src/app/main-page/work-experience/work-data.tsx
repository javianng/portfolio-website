import { type StaticImageData } from "next/image";

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
    duration: "August 2024 - Present",
    className: "border-l-[#201E28]",
    location: "Paris, France",
    detail: (
      <article>
        <ul className="ul">
          <li>
            Architected and engineered scalable backend schemas and
            infrastructure, optimizing data storage and retrieval for high
            efficiency in real-time client applications.
          </li>
          <li>
            Leveraged AWS Bedrock for Retrieval-Augmented Generation
            implementations, enhancing document processing and query answering
            on complex insurance data. Utilized AWS SageMaker to design, train,
            and deploy machine learning models, achieving a predicted avoidance
            of 30% of adverse events for clients.
          </li>
          <li>
            Built a robust, responsive frontend platform using Next.js,
            providing user-friendly interfaces for clients and insurers.
          </li>
          <li>
            Integrated AWS Cognito for secure, seamless authentication and
            authorization, enabling distinct dashboards tailored to clients and
            insurers.
          </li>
          <li>
            Conceptualized and standardized the company&apos;s design theme and
            colour scheme, ensuring brand consistency and an intuitive user
            experience. Boosted usability by implementing cohesive design
            layouts across the platform, improving navigation and engagement.
          </li>
          <li>
            Deployed large language models by developing intelligent agents to
            enhance backend flexibility and responsiveness, enabling dynamic
            data processing and improving system performance and scalability.
          </li>
        </ul>
      </article>
    ),
    tags: ["Data Science", "Data Analytics", "Machine Learning"],
    logo: "/experience/Parametriks.png",
    image: "/experience/ParametriksPhoto.jpeg",
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
          Project: To advance analytics capabilities for cancer vaccine research
          using Nanopore sequencing technology by developing a real-time
          analysis pipeline for TCR repertoire analysis.
        </h4>
        <ul className="ul">
          <li>
            Background Information: Long-read sequencing technologies, such as
            Nanopore, are prone to errors and require sophisticated data
            cleaning methods for accurate sequence recovery. Addressing this
            challenge is crucial for advancements in bioinformatics and cancer
            research.
          </li>
          <li>Final Pipeline</li>
          <ol className="ol">
            <li>
              Analysed large-scale genomic datasets exceeding 7 million rows,
              producing critical insights that influenced shifts in research
              focus.
            </li>
            <li>
              Integrated over 11 open-source bioinformatics tools into a custom
              automated pipeline, streamlining analysis for enhanced efficiency.
            </li>
            <li>
              Developed Shell and Python automation scripts to extract and group
              cell barcodes, segment TCR &alpha; and &beta; chains per cell, and
              reconstruct these chains using de novo assembly. This improved
              barcode recovery from <u>608,700 to 2,181,878</u>, significantly
              advancing cell barcode extraction processes.
            </li>
            <li>
              Implemented a Python-based method for categorizing sequences into
              TCR &alpha; and &beta; chains without needing a whitelist. This
              method used Ward&apos;s Linkage clustering, achieving{" "}
              <u>an average accuracy of 90%</u> on sequences from 100 unique
              cell barcodes, demonstrating effectiveness in clonotype
              identification for long-read sequencing.
            </li>
            <li>
              Proposed a novel approach for separating TCR chains that
              outperformed traditional methods, aiding in clonotype
              identification crucial for understanding immune responses in
              cancer vaccine research.
            </li>
            <li>
              Customized Shasta for the assembly of TCR &alpha; and &beta;
              sequences, addressing the lack of pre-existing configurations for
              TCR-specific assembly and pioneering new methodologies.
            </li>
          </ol>
          <li>Additional Achievements</li>
          <ol className="ol">
            <li>
              Innovated and validated a method that separated TCR &alpha; and
              &beta; chains without reference mapping, ensuring robustness in
              diverse data contexts.
            </li>
            <li>
              Conducted multiple iterations of the pipeline, experimenting with
              over 20 bioinformatics tools and methodologies. This intensive
              work led to major research shifts based on in-depth data analysis.
            </li>
            <li>
              Co-authored the paper titled{" "}
              <i>
                Refining TCR Clonotype Identification With Long-Read Sequencing
                Technique
              </i>
              , submitted to the Society for Immunotherapy of Cancer (SITC),
              contributing to advancements in cancer vaccine development.
            </li>
          </ol>
        </ul>
      </article>
    ),
    tags: ["Bioinformatics", "Data Science", "Machine Learning", "Research"],
    logo: "/experience/AstarSIgN.png",
    image: "/experience/AstarSIgNPhoto.jpeg",
  },
  {
    title: "President",
    companyOrganization: "NUS SoC Computing Club",
    duration: "September 2023 - September 2024",
    className: "border-l-[#2A378A]",
    location: "Singapore",
    detail: (
      <article>
        <ul className="ul">
          <li>
            In my role as President, I have the privilege of leading a dedicated
            team of Vice Presidents and secretaries. Together, we are committed
            to charting a course towards new heights of excellence for the
            Computing Club.
          </li>
          <li>My tenure as President is driven by a three-fold mission:</li>
          <ol className="ol">
            <li>Strengthening Internal Bonds</li>
            <li>Establishing Partnerships</li>
            <li>Building Relationships with Advisors</li>
          </ol>
          <li>Our Achievements:</li>
          <ol className="ol">
            <li>
              Led a team of 30 in organising over 20 club events relating to
              student life and development, impacting 5,000 undergraduates
            </li>
            <li>
              Allocated and managed club&apos;s finance of up to $300,000 to 4
              departments organising over 20 events
            </li>
            <li>
              Leading exchange program policy change, potentially impacting
              3,000 undergraduates
            </li>
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
            Collaborated with 4 development team members to design and implement
            website and product features
          </li>
          <li>
            Wrote over 5,000 lines of clean, efficient, and maintainable code to
            develop MVP
          </li>
          <li>
            Collaborated with 3 designers to ensure user interface is responsive
            and user-friendly, aligning design and development team
          </li>
          <li>
            Conducted business development and product pitching at networking
            events to VCs.
          </li>
        </ul>
      </article>
    ),
    tags: ["TypeScript", "Prisma Studio", "TRPC", "React.js"],
    logo: "/experience/LFG.svg",
    image: "/experience/LFGPhoto.jpeg",
  },
  {
    title: "Web Developer Lead",
    companyOrganization: "ASEAN Business Youth Association",
    duration: "June 2023 - September 2024",
    className: "border-l-[#F6F2AE]",
    location: "Singapore",
    detail: (
      <article>
        <ul className="ul">
          <li>
            Directed a team of 3 website developers, 2 UI/UX designers and 2
            copywriters from 3 different ASEAN countries in building a new
            full-stack website application
          </li>
          <li>Conduct code revisions and optimisation on a bi-weekly basis</li>
          <li>
            Wrote over 39,998 lines of code to implement user authentication and
            key features
          </li>
        </ul>
      </article>
    ),
    tags: ["TypeScript", "React.js", "Firebase", "Project Management", "Scrum"],
    logo: "/experience/ABYA.png",
    image: "/experience/ABYAPhoto.jpg",
  },
];
