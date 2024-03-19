import Image from "next/image";
import ProjectCard from "../../common/ProjectsCard";
import {
  SHOWCASED_PROJECT_TITLE,
  SHOWCASED_PROJECT_CAPTION,
  SHOWCASED_PROJECT_DESCRIPTION,
  PROJECT_DETAILS,
} from "./WorkDetails";
import HeatMap from "/public/projectDocuments/DataAnalysisCropRecommendation/heatmap.png";
import NextButton from "~/components/common/NextButton";
import PageContainer from "~/components/common/PageContainer";
import TitleContainer from "~/components/common/TitleContainer";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Button from "~/components/common/Button";
import { useEffect, useState } from "react";

function ShowcasedProject() {
  return (
    <div className="h-fit">
      <h2
        className="overflow-hidden text-ellipsis pb-3 text-xl
                font-semibold sm:text-3xl"
      >
        {SHOWCASED_PROJECT_TITLE}
      </h2>
      <div className="card max-h-[35rem] bg-brand-100 shadow-xl">
        <figure>
          <div className="bg-white">
            <Image
              src={HeatMap}
              width={1600}
              height={1600}
              alt={""}
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
        </figure>
        <div className="card-body">
          <div id="Project Description" className="p-4">
            <p className="line-clamp-2 h-fit overflow-hidden text-ellipsis">
              {SHOWCASED_PROJECT_CAPTION}
            </p>

            <div id="Project Description">
              <p className="line-clamp-3 overflow-hidden text-ellipsis sm:line-clamp-4 lg:line-clamp-6">
                {SHOWCASED_PROJECT_DESCRIPTION}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Button
              href="/work/crop-recommendation-data-analytics"
              displayText="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="pr-0 sm:pr-14">
      <TitleContainer id="Work">
        My
        <br />
        Work
      </TitleContainer>
      <p>
        Driven to learn and eager to explore new tools and technologies. I have
        worked on some projects that are close to my heart, to explore my
        interest and passion as well as to hone my abilities as a developer and
        data analyst.
      </p>
      <br />
      <p>
        My works are mainly on frontend, backend and data analytics using
        dataset found on websites such as Kaggle. More details and the codes can
        be found on Github.
      </p>
    </div>
  );
}

function OtherProjectsGrid() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  useEffect(() => {
    const updateCardsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setCardsPerPage(3);
      } else if (screenWidth < 1024) {
        setCardsPerPage(4);
      } else {
        setCardsPerPage(6);
      }
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECT_DETAILS.slice(0, cardsPerPage).map((componentDetails, i) => (
        <ProjectCard key={i} {...componentDetails} />
      ))}
    </div>
  );
}

function ShowAllProjectsButton() {
  return (
    <Link href={"/work"}>
      <div
        className="flex flex-row items-center gap-1 
            rounded-lg border-2 p-5
            transition ease-in-out
            hover:border-brand-200 hover:text-brand-200"
      >
        <ChevronDoubleDownIcon className="h-6 w-6" />
        <p className="text-sm font-semibold uppercase">Show all projects</p>
      </div>
    </Link>
  );
}

export default function Work() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-8 pb-4 sm:grid-cols-2">
        <Description />
        <ShowcasedProject />
      </div>
      <h2 className="py-4 text-2xl font-semibold sm:text-3xl">
        Check out my other{" "}
        <span className=" underline decoration-brand-100 underline-offset-4">
          Projects
        </span>
      </h2>
      <OtherProjectsGrid />
      <div className="flex justify-center pt-4 sm:pt-12">
        <ShowAllProjectsButton />
      </div>
      <NextButton url="#Experience" />
    </PageContainer>
  );
}
