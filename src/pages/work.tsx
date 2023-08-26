import PageContainer from "~/components/common/PageContainer";
import ReturnNavbar from "~/components/common/ReturnNavbar";
import TitleContainer from "~/components/common/TitleContainer";
import { PROJECT_DETAILS } from "~/components/homepage/Work/WorkDetails";
import ProjectCard from "~/components/common/ProjectsCard";

function OtherProjectsGrid() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {PROJECT_DETAILS.map((componentDetails, i) => (
                <ProjectCard key={i} {...componentDetails} />
            )).slice(0, 6)}
        </div>
    )
}

export default function work() {
    return (
        <div className="text-brand-300 bg-gray-50">
            <ReturnNavbar href={"/"} />
            <PageContainer>
                <div className="h-[5vh]" />
                <TitleContainer
                    id='MyWork'
                >
                    My Work
                </TitleContainer>
                <OtherProjectsGrid />
            </PageContainer>
        </div >
    )
}