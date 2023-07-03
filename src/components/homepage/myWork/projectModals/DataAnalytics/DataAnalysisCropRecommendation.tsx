import Image, { StaticImageData } from 'next/image'
import scatterchart from "src/assets/projectDocuments/DataAnalysisCropRecommendation/scatterchart.png"

export default function DataAnalysisCropRecommendation() {
    return (
        <>
            <h1 className="font-bold text-xl">Crop Recommendation Data Analytics</h1>
            <Image
                src={scatterchart}
                className="py-4"
                alt={""}
            />
            <p className="underline">
                Dataset Used: Crop Recommendation
            </p>
            <p>
                This dataset contains information on the levels of nitrogen, phosphorus, and potassium in soil, as well as temperature, humidity, pH, and rainfall, and their impact on the growth of crops. The data can be used to make data-driven recommendations for achieving optimal nutrient and environmental conditions to improve crop yield. https://www.kaggle.com/datasets/aksahaha/crop-recommendation
            </p>

            <ul className="list-disc list-inside">
                <li>
                    In this analysis of the crop recommendation dataset, I am showcasing my knowledge in data importing and data cleaning.
                </li>
                <li>
                    Due to the nature of the dataset not containing metrics to determine the condition and health of the crop, it is not possible to determine the recommended condition.
                </li>
            </ul>
        </>
    )
}