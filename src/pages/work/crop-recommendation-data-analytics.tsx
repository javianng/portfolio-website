import { RocketIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import KaggleButton from "~/components/common/KaggleButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";

const TAGS = [
  "Data Analytics",
  "Python",
  "Data Visualization",
  "Data Cleaning",
  "Data Importing",
];

export default function CropRecommendationDataAnalytics() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Crop Recomendation Data Analytics</TitleContainer>
      <div className="pb-9">
        <div className="pb-9">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((TagDetails, i) => (
              <Badge key={i} className="px-2 py-1 capitalize" variant="outline">
                {TagDetails}
              </Badge>
            ))}
          </div>
        </div>
        <KaggleButton href="https://www.kaggle.com/code/javianng/crop-recommendation/notebook" />
      </div>
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>
          <span>
            In this analysis of the crop recommendation dataset, I am showcasing
            my knowledge in data importing and data cleaning.
          </span>
          <br />
          <span>
            Due to the nature of the dataset not containing metrics to determine
            the condition and health of the crop, it is not possible to
            determine the recommended condition.
          </span>
        </AlertDescription>
      </Alert>
      <div className="mt-9 shadow">
        <iframe
          src={"/crop-recommendation-data-analytics.html"}
          className="h-[90vh] w-full"
        />
      </div>
    </SubpageLayout>
  );
}
