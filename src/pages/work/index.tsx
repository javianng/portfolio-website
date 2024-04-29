import { useState } from "react";
import TitleContainer from "~/components/common/TitleContainer";
import { PROJECT_DETAILS } from "~/components/homepage/Work/WorkDetailsV2";
import SubpageLayout from "~/components/common/SubpageLayout";
import ProjectCard from "~/components/common/ProjectsCard";
import { Button } from "~/components/ui/button";

function OtherProjectsGrid({ filterTag }) {
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

  const handleButtonClick = (tag) => {
    setFilterTag(tag);
    setActiveButton(tag);
  };

  return (
    <SubpageLayout href="/">
      <TitleContainer id="MyWork">My Work</TitleContainer>
      <div className="flex gap-2 pb-3">
        <Button
          variant={"ghost"}
          className={
            activeButton === "all"
              ? "bg-brand-200 text-white hover:bg-brand-100"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("all")}
        >
          All
        </Button>
        <Button
          variant={"ghost"}
          className={
            activeButton === "Front-end"
              ? "bg-brand-200 text-white hover:bg-brand-100"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("Front-end")}
        >
          Front-end
        </Button>
        <Button
          variant={"ghost"}
          className={
            activeButton === "Data Analysis"
              ? "bg-brand-200 text-white hover:bg-brand-100"
              : "bg-brand-50 hover:bg-brand-100"
          }
          onClick={() => handleButtonClick("Data Analysis")}
        >
          Data Analysis
        </Button>
        <Button
          variant={"ghost"}
          className={
            activeButton === "Full-Stack"
              ? "bg-brand-200 text-white hover:bg-brand-100"
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
