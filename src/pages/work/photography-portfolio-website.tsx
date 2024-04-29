import { RocketIcon } from "lucide-react";
import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";

const TAGS = [
  "ReactJS",
  "Full-Stack",
  "Tailwindcss",
  "Portfolio",
  "Photography",
];

export default function photographyPortfolioWebsite() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Photography Portfolio Website</TitleContainer>
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
        <GithubButton href="https://github.com/javianng/photography-website-v2" />
      </div>
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>
          This project serves as a showcase of my passion for photography,
          providing a platform for me to exhibit my work, share my experiences,
          and connect with fellow photography enthusiasts. Whether you&apos;re
          an avid photographer, a potential client, or simply someone interested
          in visual storytelling, this website offers a glimpse into my creative
          journey through the lens.
        </AlertDescription>
      </Alert>

      <div className="bg-base-300 mt-9 border shadow">
        <div className="bg-base-100 flex justify-center">
          <iframe
            src="https://photography-website-v2.vercel.app/"
            className="h-[90vh] w-full"
          ></iframe>
        </div>
      </div>
    </SubpageLayout>
  );
}
