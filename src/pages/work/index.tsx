import PageContainer from "~/components/common/PageContainer";
import ReturnNavbar from "~/components/common/ReturnNavbar";
import TitleContainer from "~/components/common/TitleContainer";
import { PROJECT_DETAILS } from "~/components/homepage/Work/WorkDetails";
import SubpageLayout from "~/components/common/SubpageLayout";
import ProjectCard from "~/components/common/ProjectsCard";
import Footer from "~/components/common/Footer";
import StartAProject from "~/components/homepage/StartAProject";

function OtherProjectsGrid() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {PROJECT_DETAILS.map((componentDetails, i) => (
                <ProjectCard key={i} {...componentDetails} />
            ))}
        </div>
    )
}

export default function work() {
    return (
        <SubpageLayout href="/">
            <TitleContainer
                id='MyWork'
            >
                My Work
            </TitleContainer>
            <OtherProjectsGrid />
        </SubpageLayout>
    )
}