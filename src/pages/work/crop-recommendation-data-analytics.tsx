import KaggleButton from "~/components/common/KaggleButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";

const TAGS = [
    'Data Analytics', 'Python', 'Data Visualization', 'Data Cleaning', 'Data Importing'
]

export default function CropRecommendationDataAnalytics() {
    return (
        <SubpageLayout href="/work">
            <TitleContainer>
                Crop Recomendation Data Analytics
            </TitleContainer>
            <div className="pb-9">
                <div className="pb-9">
                    <div className="flex gap-2 flex-wrap">
                        {TAGS.map((TagDetails, i) => (
                            <div key={i} className="font-medium text-lg sm:text-2xl badge badge-ghost p-4 capitalize">
                                {TagDetails}
                            </div>
                        ))}
                    </div>
                </div>
                <KaggleButton href="https://www.kaggle.com/code/javianng/crop-recommendation/notebook" />
            </div>
            <div>
                <div className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p>
                        <span>
                            In this analysis of the crop recommendation dataset, I am showcasing my knowledge in data importing and data cleaning.
                        </span>
                        <br />
                        <span>
                            Due to the nature of the dataset not containing metrics to determine the condition and health of the crop, it is not possible to determine the recommended condition.
                        </span>
                    </p>
                </div>
            </div>

            <div className="shadow mt-9">
                <iframe src={'/crop-recommendation-data-analytics.html'} className="w-full h-[90vh]" />
            </div>
        </SubpageLayout>
    )
}