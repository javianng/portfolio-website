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
    duration: "August 2024 - January 2025",
    className: "border-l-[#201E28]",
    location: "Paris, France",
    detail: (
      <article>
        <ul className="ul">
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
          Project: To advance analytics capabilities for cancer vaccine research
          using Nanopore sequencing technology by developing a real-time
          analysis pipeline using Oxford Nanopore Technologies in TCR repertoire
          analysis.
        </h4>
        <ul className="ul">
          <li>
            Background Information: Genetic sequences are error prone and hence
            require extensive cleaning methods to recover the original seqeunce.
            This recovery has been a challenge in the field of bioinformatics
            using long-read sequencing technologies such as Nanopore.
          </li>
          <li>Final Pipeline</li>
          <ol className="ol">
            <li>
              Utilized Samtools to convert input files into accessible and
              workable formats, ensuring high data integrity and compatibility.
            </li>
            <li>
              Innovatively identified cell barcodes of various sequences with
              precision using markers such as TSO and Read1 sequences. This was
              accomplished by leveraging custom Python scripts and CutAdapt,
              resulting in a{" "}
              <u>remarkable 200% increase in sequence recovery</u>.
            </li>
            <li>
              Employed and <u>proposed the Levenshtein distance algorithm</u> to
              rectify cell barcodes not present in the whitelist, thereby
              enhancing sequence recovery. This novel approach outperforms
              traditional Hamming distance by accurately measuring sequence
              variations due to insertions and deletions.
            </li>
            <li>
              Developed a Python-based method to categorize sequences of a cell
              barcode into alpha and beta TCR chains without relying on mapping
              or references. Utilizing Ward&apos;s Linkage clustering approach,
              this method <u>achieved an average accuracy of 90%</u>, as
              validated against MixCR references, marking a significant
              advancement in the field.
            </li>
            <li>
              Implemented a k-mer based strategy to correct UMI of sequences
              sharing the same cell barcode and similar UMI, thereby enhancing
              data accuracy.
            </li>
            <li>
              Customized Shasta for the assembly of alpha and beta TCR
              sequences, overcoming the lack of pre-existing configurations for
              TCR assembly and pioneering new methodologies in the process.
            </li>
          </ol>
          <li>Additional Achievements</li>
          <ol className="ol">
            <li>
              Experimented with over 20 distinct bioinformatics tools and
              methodologies, iterating the pipeline more than 20 times using
              Python, R, and Linux Shell scripts to develop a robust trial
              pipeline that validates multiple hypotheses.
            </li>
            <li>
              Wrote over 84,863 lines of code in slightly over 1 month of
              internship, with significant findings shifting research directions
              multiple times through data analysis and findings
            </li>
            <li>
              3rd co-author of Refining TCR Clonotype Identification With
              Long-Read Sequencing Technique submitted to Society for
              Immunotherapy of Cancer for review
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
    duration: "September 2023 - Present",
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
    duration: "June 2023 - Present", // duration format to be e.g. January 2023 - Present
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
