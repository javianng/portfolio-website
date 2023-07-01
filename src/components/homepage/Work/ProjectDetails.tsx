// Images
import HeatMap from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import HTML5WebsitePreview from "src/assets/projectDocuments/HTML5Website/HTML5WebsitePreview.png"

// Modals
import DataAnalysisCropRecommendation from "./Modals/DataAnalysisCropRecommendation";
import HTML5Website from "./Modals/HTML5Website";

export const PROJECT_DETAILS = [
    {
        title: "Crop Recommendation Data Analytics",
        image: HeatMap,
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
];
