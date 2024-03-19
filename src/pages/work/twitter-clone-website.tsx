import Image from "next/image";
import { RocketIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";
import twitterCloneWebsiteImage from "/public/projectDocuments/twitter-clone-website.png";

const TAGS = ["HTML5", "Frontend"];

export default function twitterCloneWebsite() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Twitter Clone Website</TitleContainer>
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
        <GithubButton href="https://github.com/javianng/frontend-projects/tree/main/HTML5_Portfolio" />
      </div>
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>
          In this project, I experiment with HTML5 to build a portfolio page
          that is solely powered by HTML. I then host it on Github Pages. This
          is my very first step into web development and I hope to impart CSS
          and Javascript components into future web projects.
        </AlertDescription>
      </Alert>
      <div className="mockup-window bg-base-300 mt-9 border shadow">
        <div className="bg-base-200 flex justify-center">
          <Image src={twitterCloneWebsiteImage} alt={"Twitter Clone Website"} />
        </div>
      </div>
    </SubpageLayout>
  );
}
