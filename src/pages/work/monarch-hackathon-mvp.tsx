import { RocketIcon } from "lucide-react";
import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";

const TAGS = ["ReactJS", "Full-Stack", "Tailwindcss", "Hackathon"];

export default function monarchHackathonMvp() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Monarch - Drone Rental Platform</TitleContainer>
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
        <GithubButton href="https://github.com/javianng/ueh-biztech-hackathon/" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">UEH Biztech Hackathon - Monarchs</h2>
        <h3 className="pb-9 pt-2 text-xl">
          Website Application platform for a B2B drone rental service.
        </h3>
      </div>
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>
          Monarch is a startup project submission for UEH (University of
          Economics HCMC) Biztech Hackathon 2022. This is a 28 hours hackathon
          in which we seek out solutions for the betterment of the agricultural
          scene in Mekong Delta. This project was a fork from the AirBnb Clone
          Project due to the time constraints and the need to do market research
          and business plans. The codes are not clean but the application is
          functional.
        </AlertDescription>
      </Alert>
      <div className=" bg-base-300 mt-9 border shadow">
        <div className="bg-base-100 flex justify-center">
          <iframe
            src="https://ueh-biztech-hackathon-e18wa79t0-javianng.vercel.app"
            className="h-[90vh] w-full bg-white"
          ></iframe>
        </div>
      </div>
    </SubpageLayout>
  );
}
