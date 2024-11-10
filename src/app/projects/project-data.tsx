import { type ReactNode } from "react";

import HousingPricingPrediction from "~/components/projects/housing-pricing-prediction";
import MemoriesHub from "~/components/projects/memorieshub";
import Monarch from "~/components/projects/monarch";
import PhotographyPortfolio from "~/components/projects/photography-portfolio";
import StudyGPT from "~/components/projects/studygpt";
import Twenify from "~/components/projects/twenify";
import VolunteerClock from "~/components/projects/volunteer-clock";

export interface Project {
  slug: string;
  title: string;
  description: string;
  main_image: string;
  tags: string[];
  content: ReactNode;
  projectlink: string;
}

export const PROJECT_DATA: Project[] = [
  {
    slug: "studygpt",
    title: "StudyGPT",
    description:
      "Helps students study by generating questions and providing feedback.",
    main_image: "/projects/studygpt/cover-studygpt.jpg",
    tags: ["Prompt Engineering", "ChatGPT"],
    content: <StudyGPT />,
    projectlink: "https://chatgpt.com/g/g-ZbvJk1IQd-studygpt",
  },
  {
    slug: "twenify",
    title: "Twenify",
    description:
      "An all-in-one productivity platform for time management and focus.",
    main_image: "/projects/twenify/cover-twenify.jpg",
    tags: [
      "FullStack",
      "Vue",
      "Firebase",
      "Figma",
      "DatabaseManagement",
      "NoSQL",
      "Authentication",
    ],
    content: <Twenify />,
    projectlink: "https://github.com/javianng/twenify",
  },
  {
    slug: "volunteer-clock",
    title: "Volunteer Clock",
    description:
      "A DApp for managing and rewarding participation in community volunteering projects.",
    main_image: "/projects/volunteer-clock/cover-volunteer-clock.jpg",
    tags: ["Backend", "Blockchain", "Ganache", "Solidity", "Figma"],
    content: <VolunteerClock />,
    projectlink: "https://github.com/javianng/volunteerclock",
  },
  {
    slug: "housing-pricing-prediction",
    title: "Housing Pricing Prediction",
    description: "A model to predict resale prices of HDB flats in Singapore.",
    main_image:
      "/projects/housing-pricing-prediction/housing-pricing-prediction.png",
    tags: [
      "DataAnalysis",
      "MachineLearning",
      "SciKitLearn",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "Numpy",
    ],
    content: <HousingPricingPrediction />,
    projectlink: "https://github.com/javianng/housing-pricing-forecasting",
  },
  {
    slug: "monarch",
    title: "Monarch - Drone Rental Platform",
    description: "A startup project submission for UEH Biztech Hackathon 2022.",
    main_image: "/projects/monarch/cover-monarch.jpg",
    tags: ["FullStack", "Authentication"],
    content: <Monarch />,
    projectlink: "https://github.com/javianng/ueh-biztech-hackathon/",
  },
  {
    slug: "memorieshub",
    title: "Memories Hub",
    description: "Personalized digital memory repository for couples.",
    main_image: "/projects/memorieshub/cover-memorieshub.jpg",
    tags: ["FullStack", "Edge Authentication"],
    content: <MemoriesHub />,
    projectlink: "https://github.com/javianng/memories-hub",
  },
  {
    slug: "photography-portfolio-website",
    title: "Photography Portfolio Website",
    description: "A showcase of my passion for photography.",
    main_image:
      "/projects/photography-portfolio-website/cover-photography-portfolio-website.jpg",
    tags: ["Frontend", "React", "TailwindCSS"],
    content: <PhotographyPortfolio />,
    projectlink: "https://github.com/javianng/photography-website-v2",
  },
];
