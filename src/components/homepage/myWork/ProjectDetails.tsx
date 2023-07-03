// Images
import CropRecommendationDataAnalyticsPreview from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import HTML5WebsitePreview from "src/assets/projectDocuments/HTML5Website/HTML5WebsitePreview.png"
import TwitterClonePreview from "src/assets/projectDocuments/TwitterCloneWebsite/screenshot.png"
import NetflixClonePreview from "src/assets/projectDocuments/NetflixCloneWebsite/screenshot.png"
import GoogleClonePreview from "src/assets/projectDocuments/GoogleCloneWebsite/screenshot.png"
import GmailClonePreview from "src/assets/projectDocuments/GMailCloneWebsite/screenshot.png"

// Modals
import DataAnalysisCropRecommendation from "./projectModals/DataAnalytics/DataAnalysisCropRecommendation";
import HTML5Website from "./projectModals/WebDevelopment/HTML5Website";
import TwitterCloneWebsite from "./projectModals/WebDevelopment/TwitterCloneWebsite";
import NetflixCloneWebsite from "./projectModals/WebDevelopment/NetflixCloneWebsite"
import GoogleCloneWebsite from "./projectModals/WebDevelopment/GoogleCloneWebsite"
import GmailCloneWebsite from "./projectModals/WebDevelopment/GmailCloneWebsite"

export const PROJECT_DETAILS = [
    {
        title: "Crop Recommendation Data Analytics",
        image: CropRecommendationDataAnalyticsPreview,
        description: "Crop Recommendation This dataset contains information on the levels of nitrogen, phosphorus, and potassium in soil, as well as temperature, humidity, pH, and rainfall, and their impact on the growth of crops. The data can be used to make data-driven recommendations for achieving optimal nutrient and environmental conditions to improve crop yield. https://www.kaggle.com/datasets/aksahaha/crop-recommendation",
        color: "decoration-brand-200",
        id: "1",
        modalContent:
            <DataAnalysisCropRecommendation />
    },
    {
        title: "HTML 5 Website",
        image: HTML5WebsitePreview,
        description: "In this project, I experiment with HTML5 to build a portfolio page that is solely powered by HTML. I then host it on Github Pages. This is my very first step into web development and I hope to impart CSS and Javascript components into future web projects.",
        color: "decoration-brand-100",
        id: "2",
        modalContent:
            <HTML5Website />
    },
    {
        title: "Twitter Clone Website",
        image: TwitterClonePreview,
        description: "In this project, I work with HTML and CSS to clone Twitter. These projects are part of jouney to learning web development.",
        color: "decoration-brand-300",
        id: "3",
        modalContent:
            <TwitterCloneWebsite />
    },
    {
        title: "Netflix Clone Website",
        image: NetflixClonePreview,
        description: "In this project, I work with HTML and CSS to clone Netflix. These projects are part of jouney to learning web development.",
        color: "decoration-brand-200",
        id: "4",
        modalContent:
            <NetflixCloneWebsite />
    },
    {
        title: "Google Clone Website",
        image: GoogleClonePreview,
        description: "In this project, I work with HTML and CSS to clone Google. These projects are part of jouney to learning web development.",
        color: "decoration-brand-100",
        id: "5",
        modalContent:
            <GoogleCloneWebsite />
    },
    {
        title: "Gmail Clone Website",
        image: GmailClonePreview,
        description: "In this project, I work with HTML and CSS to clone Gmail. These projects are part of jouney to learning web development.",
        color: "decoration-brand-100",
        id: "5",
        modalContent:
            <GmailCloneWebsite />
    },
];
