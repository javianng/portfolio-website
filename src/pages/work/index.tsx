import TitleContainer from "~/components/common/TitleContainer";
import SubpageLayout from "~/components/common/SubpageLayout";
import ProjectCard from "~/components/common/ProjectsCard";

function OtherProjectsGrid() {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-3"></div>;
}

export default function work() {
  return (
    <SubpageLayout href="/">
      <TitleContainer id="MyWork">My Work</TitleContainer>
      <OtherProjectsGrid />
    </SubpageLayout>
  );
}
