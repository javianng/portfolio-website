import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";

const TAGS = ["ReactJS", "Full-Stack", "Tailwindcss", "Hackathon"];

export default function monarchHackathonMvp() {
  return (
    <SubpageLayout href="/work">
      <TitleContainer>Monarch - Drone Rental Platform</TitleContainer>
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
        <GithubButton href="https://github.com/javianng/ueh-biztech-hackathon/" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">UEH Biztech Hackathon - Monarchs</h2>
        <h3 className="pb-9 pt-2 text-xl">
          Website Application platform for a B2B drone rental service.
        </h3>
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
              Monarch is a startup project submission for UEH (University of
              Economics HCMC) Biztech Hackathon 2022. This is a 28 hours
              hackathon in which we seek out solutions for the betterment of the
              agricultural scene in Mekong Delta. This project was a fork from
              the AirBnb Clone Project due to the time constraints and the need
              to do market research and business plans. The codes are not clean
              but the application is functional.
            </span>
          </p>
        </div>
      </div>

      <div className="mockup-window mt-9 border bg-base-300 shadow">
        <div className="flex justify-center bg-base-100">
          <iframe
            src="https://ueh-biztech-hackathon-e18wa79t0-javianng.vercel.app"
            className="h-[90vh] w-full"
          ></iframe>
        </div>
      </div>
    </SubpageLayout>
  );
}
