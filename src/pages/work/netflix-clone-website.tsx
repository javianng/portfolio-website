import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import Image from "next/image";
import netflixCloneWebsiteImage from "/public/projectDocuments/netflix-clone-website.png";

const TAGS = ["HTML5", "Frontend"];

export default function netflixCloneWebsite() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Netflix Clone Website</TitleContainer>
      <div className="pb-9">
        <div className="pb-9">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((TagDetails, i) => (
              <div
                key={i}
                className="badge badge-ghost p-4 text-lg font-medium capitalize sm:text-2xl"
              >
                {TagDetails}
              </div>
            ))}
          </div>
        </div>
        <GithubButton href="https://github.com/javianng/frontend-projects/tree/main/HTML5_Portfolio" />
      </div>
      <div>
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-info"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p>
            <span>
              In this project, I experiment with HTML5 to build a portfolio page
              that is solely powered by HTML. I then host it on Github Pages.
              This is my very first step into web development and I hope to
              impart CSS and Javascript components into future web projects.
            </span>
          </p>
        </div>
      </div>
      <div className="mockup-window mt-9 border bg-base-300 shadow">
        <div className="flex justify-center bg-base-100">
          <Image src={netflixCloneWebsiteImage} alt={"Netflix Clone Website"} />
        </div>
      </div>
    </SubpageLayout>
  );
}
