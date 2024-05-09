import { ReactNode } from "react";

import Twenify from "~/components/work/twenify";
import VolunteerClock from "~/components/work/volunteerClock";
import HousingPricingPrediction from "~/components/work/housingPricingPrediction";
import Monarch from "~/components/work/monarch";
import PhotographyPortfolio from "~/components/work/photographyPortfolio";
import CropRecommendationDataAnalytics from "~/components/work/cropRecommendationDataAnalytics";
import HTML5Website from "~/components/work/html5Website";
import TwitterClone from "~/components/work/twitterClone";
import NetflixClone from "~/components/work/netflixClone";
import GoogleClone from "~/components/work/googleClone";
import GmailClone from "~/components/work/gmailClone";
import MemoriesHub from "~/components/work/memoriesHub";
import StudyGPT from "~/components/work/studyGPT";

export const PROJECT_DETAILS = [
  {
    title: "StudyGPT",
    link: "/work/chatgpt",
    thumbnail: "/projectDocuments/StudyGPT/mockup.png",
    description:
      "Helps students study by generating questions and providing feedback.",
    tags: ["Prompt Engineering", "ChatGPT"],
    children: <StudyGPT />,
    projectSocialLink: "https://chatgpt.com/g/g-ZbvJk1IQd-studygpt",
  },
  {
    title: "Twenify",
    link: "/work/twenify",
    thumbnail: "/projectDocuments/twenify.png",
    description:
      "Twenify is an innovative all-in-one productivity platform designed to enhance time management and focus for students, though its tools are beneficial for any user looking to improve their productivity. This platform integrates a customizable Pomodoro Timer, an Integrated Calendar, To-Do List, a Website Blocking Tool, and Music Integration to create a focused and efficient study environment. Additionally, Twenify includes gamification elements like a Productivity Leaderboard and a Tamagotchi-esque feature to motivate users and encourage engagement. Developed using agile methodologies and built on Vue.js and Firebase, Twenify aims to address common student challenges around distraction and motivation, providing a comprehensive toolset for managing and optimizing academic life.",
    tags: [
      "FullStack",
      "Vue",
      "Firebase",
      "Figma",
      "DatabaseManagement",
      "NoSQL",
      "Authentication",
    ],
    children: <Twenify />,
    projectSocialLink: "https://github.com/javianng/twenify",
  },
  {
    title: "VolunteerClock",
    link: "/work/volunteerclock",
    thumbnail: "/projectDocuments/volunteertoken/volunteertoken.png",
    description:
      "VolunteerClock is a decentralized application (DApp) developed on blockchain technology to manage and reward participation in community volunteering projects. This innovative platform addresses critical issues of transparency, accountability, and efficiency in tracking volunteer hours through the use of smart contracts. By automating the creation and management of volunteering events on the blockchain and incorporating Non-Fungible Tokens (NFTs) for verifiable participation records, VolunteerClock enhances the trust and reliability of volunteer contributions. The application is designed to benefit charities, non-profits, and volunteers by providing a secure, transparent mechanism for recording and verifying volunteer activities, making it an essential tool for community engagement and management.",
    tags: ["Backend", "Blockchain", "Ganache", "Solidity", "Figma"],
    children: <VolunteerClock />,
    projectSocialLink: "https://github.com/javianng/volunteerclock",
  },
  {
    title: "Housing Pricing Prediction",
    link: "/work/housing-pricing-prediction",
    thumbnail:
      "/projectDocuments/housingPricingPrediction/housing-pricing-prediction.png",
    description:
      "Our project develops a sophisticated forecasting model to predict resale prices of Housing Development Board (HDB) flats in Singapore, leveraging transactional data and geographical features. By integrating diverse datasets such as SORA rates, BTO launch dates, and points of interest proximity, and employing machine learning techniques including Random Forest and XGBoost, the model achieved high accuracy in predictions for 2024. This work aids buyers and investors in making informed decisions, showcasing our expertise in predictive analytics for real estate.",
    tags: [
      "DataAnalysis",
      "MachineLearning",
      "SciKitLearn",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "Numpy",
    ],
    children: <HousingPricingPrediction />,
    projectSocialLink:
      "https://github.com/javianng/housing-pricing-forecasting",
  },
  {
    title: "Monarch - Drone Rental Platform",
    link: "/work/monarch-drone-rental-platform",
    thumbnail: "/projectDocuments/ueh-biztech-hackathon-mvp.png",
    description:
      "Monarch is a startup project submission for UEH (University of Economics HCMC) Biztech Hackathon 2022. This is a 28 hours hackathon in which we seek out solutions for the betterment of the agricultural scene in Mekong Delta. This project was a fork from the AirBnb Clone Project due to the time constraints and the need to do market research and business plans. The codes are not clean but the application is functional.",
    tags: ["FullStack", "Authentication"],
    children: <Monarch />,
    projectSocialLink: "https://github.com/javianng/ueh-biztech-hackathon/",
  },
  {
    title: "Memories Hub",
    link: "/work/memories-hub",
    thumbnail: "/projectDocuments/memories-hub.png",
    description:
      "Personalized digital memory repository for couples to curate date itineraries, store images, and cherish moments together.",
    tags: ["FullStack", "Edge Authentication"],
    children: <MemoriesHub />,
    projectSocialLink: "https://github.com/javianng/memories-hub",
  },
  {
    title: "Photography Portfolio",
    link: "/work/photography-portfolio",
    thumbnail: "/projectDocuments/photography-portfolio-website.png",
    description:
      "This project serves as a showcase of my passion for photography, providing a platform for me to exhibit my work, share my experiences, and connect with fellow photography enthusiasts. Whether you're an avid photographer, a potential client, or simply someone interested in visual storytelling, this website offers a glimpse into my creative journey through the lens.",
    tags: ["Frontend", "React", "TailwindCSS"],
    children: <PhotographyPortfolio />,
    projectSocialLink: "https://github.com/javianng/photography-website-v2",
  },
  {
    title: "Crop Recommendation Data Analytics",
    link: "/work/crop-recommendation-data-analytics",
    thumbnail: "/projectDocuments/DataAnalysisCropRecommendation/heatmap.png",
    description:
      "In this analysis of the crop recommendation dataset, I am showcasing my knowledge in data importing and data cleaning. Due to the nature of the dataset not containing metrics to determine the condition and health of the crop, it is not possible to determine the recommended condition.",
    tags: ["DataAnalysis", "DataVisualization"],
    children: <CropRecommendationDataAnalytics />,
    projectSocialLink:
      "https://www.kaggle.com/code/javianng/crop-recommendation/notebook",
  },
  {
    title: "HTML 5 Website",
    link: "/work/html-5-website",
    thumbnail: "/projectDocuments/HTML5-portfolio-website.png",
    description:
      "In this project, I experiment with HTML5 to build a portfolio page that is solely powered by HTML. I then host it on Github Pages. This is my very first step into web development and I hope to impart CSS and Javascript components into future web projects.",
    tags: ["Frontend", "HTML", "CSS"],
    children: <HTML5Website />,
    projectSocialLink:
      "https://github.com/javianng/frontend-projects/tree/main/HTML5_Portfolio",
  },
  {
    title: "Twitter Clone",
    link: "/work/twitter-clone",
    thumbnail: "/projectDocuments/twitter-clone-website.png",
    description:
      "In this project, I work with HTML and CSS to clone Twitter. These projects are part of journey to learning web development.",
    tags: ["Frontend", "HTML", "CSS"],
    children: <TwitterClone />,
    projectSocialLink: "https://github.com/javianng/twenify",
  },
  {
    title: "Netflix Clone",
    link: "/work/netflix-clone",
    thumbnail: "/projectDocuments/netflix-clone-website.png",
    description:
      "In this project, I work with HTML and CSS to clone Netflix. These projects are part of journey to learning web development.",
    tags: ["Frontend", "HTML", "CSS"],
    children: <NetflixClone />,
    projectSocialLink: "https://github.com/javianng/twenify",
  },
  {
    title: "Google Clone",
    link: "/work/google-clone",
    thumbnail: "/projectDocuments/google-clone-website.png",
    description:
      "In this project, I work with HTML and CSS to clone Google. These projects are part of journey to learning web development.",
    tags: ["Frontend", "HTML", "CSS"],
    children: <GoogleClone />,
    projectSocialLink: "https://github.com/javianng/twenify",
  },
  {
    title: "Gmail Clone",
    link: "/work/gmail-clone",
    thumbnail: "/projectDocuments/gmail-clone-website.png",
    description:
      "In this project, I work with HTML and CSS to clone Gmail. These projects are part of journey to learning web development.",
    tags: ["Frontend", "HTML", "CSS"],
    children: <GmailClone />,
    projectSocialLink: "https://github.com/javianng/twenify",
  },
];

export type PROJECT_DETAILS_TYPE = {
  title: String;
  link: String;
  thumbnail: String;
  description: String;
  tags: String[];
  children: ReactNode;
  projectSocialLink: String;
};

export function getUniqueTags() {
  const allTags = PROJECT_DETAILS.flatMap((project) => project.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags;
}
