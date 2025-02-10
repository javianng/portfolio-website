import { type StaticImageData } from "next/image";
import Link from "next/link";

// Define categories of work tags for better organization
export type TechnicalTag =
  | "TypeScript"
  | "Prisma Studio"
  | "TRPC"
  | "React.js"
  | "Firebase"
  | "AWS"
  | "AWS CDK"
  | "Next.js"
  | "PostgreSQL"
  | "DynamoDB";

export type DomainTag =
  | "Data Science"
  | "Data Analytics"
  | "Machine Learning"
  | "Bioinformatics"
  | "Research"
  | "System Architecture"
  | "Full-Stack";

export type SoftSkillTag =
  | "Management"
  | "Leadership"
  | "Project Management"
  | "Scrum";

export type WorkTag = TechnicalTag | DomainTag | SoftSkillTag;

// Define the structure for achievements
export interface Achievement {
  text: string;
  metrics?: string; // Optional quantifiable results
}

// Define the structure for project information
export interface ProjectInfo {
  title?: string;
  description?: string;
  achievements: Achievement[];
}

// Main section interface with improved structure
export interface Section {
  title: string;
  companyOrganization: string;
  duration: string;
  className: string;
  location: string;
  detail: React.ReactNode;
  tags: WorkTag[];
  logo: string;
  image?: string | StaticImageData;
  project?: ProjectInfo; // Optional project-specific information
}

export const WORK_DETAILS: readonly Section[] = [
  {
    title: "Machine Learning and Software Engineer Intern",
    companyOrganization: "Parametriks",
    duration: "August 2024 - January 2025",
    className: "border-l-[#201E28]",
    location: "Paris, France",
    detail: (
      <article className="space-y-4">
        <div className="achievements-list">
          <ul className="ul space-y-3">
            <li>
              Conceptualised and fabricated a full-stack application leveraging
              on Next.js and AWS, engineering core features such as generative
              AI capabilities and natural language video querying to boost user
              experience and functionality
            </li>
            <li>
              Architected and deployed a scalable AWS infrastructure with AWS
              CDK, including VPC, Aurora Serverless RDS, Lambda, API Gateway,
              Glue, S3, and Athena, streamlining multi-developer collaboration
            </li>
            <li>
              Conceptualised and programmed advanced AI capabilities with a
              text-to-SQL workflow using Bedrock, attaining 80% accuracy in
              natural language query conversion and enabling insights across
              datasets and document repositories
            </li>
            <li>
              Engineered automated AI/ML data pipelines leveraging Glue
              Crawlers, Athena, and SageMaker for real-time data ingestion,
              analysis, and prediction, decreasing operational overhead by 70%
              and enhancing system efficiency
            </li>
            <li>
              Designed and constructed interactive dashboards with dynamic data
              visualizations, enhancing usability and potentially reducing time
              stakeholders spend extracting insights by 50%
            </li>
            <li>
              Developed and tested secure, scalable RESTful APIs using AWS API
              Gateway, integrating with AWS Lambda, AWS RDS and DynamoDB to
              enable robust serverless architectures
            </li>
            <li>
              Designed and deployed scalable PostgreSQL and NoSQL databases,
              ensuring data integrity and adaptability to handle complex
              datasets from multiple insurers and clients
            </li>
            <li>
              Authored comprehensive technical documentation covering
              infrastructure, workflows, and architecture, predicted to reduce
              onboarding time for new developers by 50% and facilitating
              cross-team collaboration
            </li>
          </ul>
        </div>
      </article>
    ),
    tags: [
      "AWS",
      "AWS CDK",
      "Machine Learning",
      "System Architecture",
      "Full-Stack",
      "TypeScript",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "DynamoDB",
    ],
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
      <article className="space-y-4">
        <div className="project-overview">
          <h4 className="blockquote">
            Project: To advance analytics capabilities for cancer vaccine
            research using Nanopore sequencing technology by developing a
            real-time analysis pipeline for TCR repertoire analysis
          </h4>
          <h4 className="blockquote">
            Background Information: <br /> Long-read sequencing technologies,
            such as Nanopore, are prone to errors and require sophisticated data
            cleaning methods for accurate sequence recovery. Addressing this
            challenge is crucial for advancements in bioinformatics and cancer
            research
          </h4>
        </div>
        <div className="key-achievements">
          <h5 className="mb-2 font-medium">Key Achievements</h5>
          <ul className="ul">
            <li>
              Spearheaded analysis of large-scale genomic datasets (&gt;7
              million rows), leveraging advanced bioinformatics techniques to
              uncover critical insights that directly influenced research
              directions and decision-making
            </li>
            <li>
              Designed and implemented a custom automated pipeline by
              integrating 11+ open-source bioinformatics tools, reducing manual
              intervention by 40% and accelerating data processing timelines by
              30%
            </li>
            <li>
              Engineered robust Shell and Python automation scripts to extract
              and classify cell barcodes, segment TCR α and β chains at
              single-cell level, and reconstruct TCR chains via de novo
              assembly, enhancing reproducibility and scalability
            </li>
            <li>
              Revolutionized cell barcode extraction methodologies, achieving a
              258% increase in barcode recovery (from 608,700 to 2,181,878),
              improving data quality and downstream analysis accuracy
            </li>
            <li>
              Pioneered a novel Python-based algorithm to separate TCR &alpha;
              and &beta; chains without reliance on a whitelist, achieving 90%
              accuracy across 100 unique cell barcodes using Ward&apos;s linkage
              clustering, setting a new benchmark for TCR chain analysis
            </li>
            <li>
              Tailored Shasta for TCR-specific assembly of &alpha; and &beta;
              sequences, overcoming configuration constraints and pioneering
              novel methodological advancements
            </li>
            <li>
              Co-authored &ldquo;
              <Link
                href="https://jitc.bmj.com/content/12/Suppl_2/A179"
                className="underline underline-offset-2"
              >
                Refining TCR clonotype identification with long-read sequencing
                technique
              </Link>
              &rdquo; submitted to Society for Immunotherapy of Cancer (SITC),
              as third author and first intern co-author, positioned among
              full-time researchers highlighting significant contributions to
              research project
            </li>
          </ul>
        </div>
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
      <article className="space-y-4">
        <div className="role-overview">
          <p className="mb-4">
            In my role as President, I have the privilege of leading a dedicated
            team of Vice Presidents and secretaries. Together, we are committed
            to charting a course towards new heights of excellence for the
            Computing Club
          </p>
        </div>
        <div className="mission">
          <h5 className="mb-2 font-medium">Mission Focus Areas:</h5>
          <ol className="ol mb-4">
            <li>Strengthening Internal Bonds</li>
            <li>Establishing Partnerships</li>
            <li>Building Relationships with Advisors</li>
          </ol>
        </div>
        <div className="achievements">
          <h5 className="mb-2 font-medium">Key Achievements:</h5>
          <ul className="ul">
            <li>
              Directed a team of 30 executives to organize 20+ high-impact
              events, including orientation camps, hackathons, and networking
              sessions, reaching 5,000+ undergraduates and achieving a 90%
              participant satisfaction rate
            </li>
            <li>
              Strategically managed and allocated a $300,000 annual budget
              across 4 departments, optimizing resource distribution to maximize
              event quality and club engagement
            </li>
          </ul>
        </div>
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
      <article className="space-y-3">
        <ul className="ul">
          <li>
            Led collaboration with a cross-functional team of 4 developers to
            design and implement 10+ website features
          </li>
          <li>
            Partnered with 3 UI/UX designers to ensure a 100% responsive and
            user-friendly interface
          </li>
          <li>
            Conducted business development and product pitching at networking
            events to VCs
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
      <article className="space-y-3">
        <ul className="ul">
          <li>
            Orchestrated a cross-functional team of 7 (3 developers, 2 UI/UX
            designers, 2 copywriters) across 3 ASEAN countries to develop and
            deploy a full-stack web application eliminating monthly downtime
            from 6% to 0%
          </li>
          <li>Conduct code revisions and optimisation on a bi-weekly basis</li>
        </ul>
      </article>
    ),
    tags: ["TypeScript", "React.js", "Firebase", "Project Management", "Scrum"],
    logo: "/experience/ABYA.png",
    image: "/experience/ABYAPhoto.jpg",
  },
  {
    title: "Sergeant",
    companyOrganization: "Republic Singapore Air Force (Singapore)",
    duration: "January 2020 - April 2022",
    className: "border-l-[#F6F2AE]",
    location: "Singapore",
    detail: (
      <article className="space-y-3">
        <ul className="ul">
          <li>
            Pioneered NSF Council to improve welfare and camaraderie among 20+
            NSFs across 3 departments, organizing 3 impactful welfare events
            within 4 months
          </li>
          <li>
            Recognized as &ldquo;Best Airman of the Month&rdquo; in August 2021
            for exceeding expectations and demonstrating initiative
          </li>
          <li>
            Selected amongst 100+ NSFs to represent RSAF in National Day Parade
            2021 and SAF Day 2021 as part of Guards of Honour, showcasing
            discipline, precision, and teamwork in high-profile national events
          </li>
        </ul>
      </article>
    ),
    tags: ["Project Management"],
    logo: "/experience/RSAF.png",
    image: "/experience/RSAFPhoto.jpeg",
  },
] as const;
