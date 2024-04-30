import { Button } from "~/components/ui/button";
import { SetStateAction, useState, useEffect } from "react";
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

function getUniqueTags() {
  const allTags = PROJECT_DETAILS.flatMap((project) => project.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags;
}

export default function work() {
  const [filterTag, setFilterTag] = useState("all");
  const [activeButton, setActiveButton] = useState("all");
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    setUniqueTags(getUniqueTags());
  }, []);

  const handleButtonClick = (tag: SetStateAction<string>) => {
    setFilterTag(tag);
    setActiveButton(tag);
  };

  return (
    <SubpageLayout href="/">
      <TitleContainer id="MyWork">My Work</TitleContainer>
      <div className="flex flex-wrap gap-2 pb-3">
        <Button
          variant={"brand"}
          className={
            activeButton === "all"
              ? "border-2 border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
              : ""
          }
          onClick={() => handleButtonClick("all")}
        >
          All
        </Button>
        {uniqueTags.map((tag) => (
          <Button
            variant={"brand"}
            className={
              activeButton === tag
                ? "border-2 border-brand-200 bg-brand-100 hover:bg-brand-50 dark:border-2 dark:bg-brand-300"
                : "bg-brand-50 hover:bg-brand-100"
            }
            onClick={() => handleButtonClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <OtherProjectsGrid filterTag={filterTag} />
    </SubpageLayout>
  );
}
