import HeatMap from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import DataAnalysisCropRecommendation from "./Modals/DataAnalysisCropRecommendation";

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
];
