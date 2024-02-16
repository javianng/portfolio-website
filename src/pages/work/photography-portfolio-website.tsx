import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";

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
              <div
                key={i}
                className="badge badge-ghost p-4 text-lg font-medium capitalize sm:text-2xl"
              >
                {TagDetails}
              </div>
            ))}
          </div>
        </div>
        <GithubButton href="https://github.com/javianng/photography-website-v2" />
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
              This project serves as a showcase of my passion for photography,
              providing a platform for me to exhibit my work, share my
              experiences, and connect with fellow photography enthusiasts.
              Whether you&apos;re an avid photographer, a potential client, or
              simply someone interested in visual storytelling, this website
              offers a glimpse into my creative journey through the lens.
            </span>
          </p>
        </div>
      </div>

      <div className="mockup-window mt-9 border bg-base-300 shadow">
        <div className="flex justify-center bg-base-100">
          <iframe
            src="https://photography-website-v2.vercel.app/"
            className="h-[90vh] w-full"
          ></iframe>
        </div>
      </div>
    </SubpageLayout>
  );
}
