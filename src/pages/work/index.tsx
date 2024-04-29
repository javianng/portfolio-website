import { Button } from "~/components/ui/button";
import { SetStateAction, useState } from "react";
import ProjectCard from "~/components/common/ProjectsCard";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { PROJECT_DETAILS } from "~/components/homepage/Work/WorkDetailsV2";

function OtherProjectsGrid({ filterTag }: { filterTag: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      {PROJECT_DETAILS.filter((project) =>
        filterTag === "all" ? true : project.tags.includes(filterTag)
      ).map((componentDetails, i) => (
        <ProjectCard key={i} {...componentDetails} />
      ))}
    </div>
  );
}

export default function work() {
  const [filterTag, setFilterTag] = useState("all");
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (tag: SetStateAction<string>) => {
    setFilterTag(tag);
    setActiveButton(tag);
  };

  return (
    <SubpageLayout href="/">
      <TitleContainer id="MyWork">My Work</TitleContainer>
      <div className="flex gap-2 pb-3">
        <Button
          variant={"brand"}
          className={
            activeButton === "all"
              ? "border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
              : ""
          }
          onClick={() => handleButtonClick("all")}
        >
          All
        </Button>
        <Button
          variant={"brand"}
          className={
            activeButton === "Front-end"
              ? "border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("Front-end")}
        >
          Front-end
        </Button>
        <Button
          variant={"brand"}
          className={
            activeButton === "Data Analysis"
              ? "border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("Data Analysis")}
        >
          Data Analysis
        </Button>
        <Button
          variant={"brand"}
          className={
            activeButton === "Full-Stack"
              ? "border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("Full-Stack")}
        >
          Full-Stack
        </Button>
      </div>
      <OtherProjectsGrid filterTag={filterTag} />
    </SubpageLayout>
  );
}
