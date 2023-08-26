import Image, { StaticImageData } from 'next/image'
import ProjectCard from "../../common/ProjectsCard";
import { SHOWCASED_PROJECT_TITLE, SHOWCASED_PROJECT_CAPTION, SHOWCASED_PROJECT_DESCRIPTION, PROJECT_DETAILS } from "./WorkDetails";

// Resources

import HeatMap from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import NextButton from '~/components/common/NextButton';
import PageContainer from '~/components/common/PageContainer';
import TitleContainer from '~/components/common/TitleContainer';

function ShowcasedProject() {
    return (
        <div className="h-fit">
            <h2 className="font-semibold overflow-hidden text-ellipsis pb-3
                text-xl sm:text-3xl">
                {SHOWCASED_PROJECT_TITLE}
            </h2>
            <div className="bg-brand-100 card shadow-xl max-h-[35rem]">
                <figure>
                    <div className='bg-white'>
                        <Image
                            src={HeatMap}
                            width={1600}
                            height={1600}
                            alt={''}
                            className="rounded-lg object-contain w-full h-full"
                        />
                    </div></figure>
                <div className="card-body">
                    <div id="Project Description" className="p-4">
                        <p className="overflow-hidden text-ellipsis line-clamp-2 h-fit">
                            {SHOWCASED_PROJECT_CAPTION}
                        </p>

                        <div id="Project Description">
                            <p className="overflow-hidden text-ellipsis line-clamp-3 sm:line-clamp-4 lg:line-clamp-6">
                                {SHOWCASED_PROJECT_DESCRIPTION}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="0" className="btn bg-brand-50">Learn More</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Work

function Description() {
    return (
        <div>
            <TitleContainer
                id="Work"
            >
                My<br />Work
            </TitleContainer>
            <p>
                Driven to learn and eager to explore new tools and technologies. I have worked on some projects that are close to my heart, to explore my interest and passion as well as to hone my abilities as a developer and data analyst.
            </p>
            <br />
            <p>
                My works are mainly on frontend, backend and data analytics using dataset found on websites such as Kaggle. More details and the codes can be found on Github.
            </p>
        </div>
    )
}

function OtherProjectsGrid() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {PROJECT_DETAILS.map((componentDetails, i) => (
                <ProjectCard key={i} {...componentDetails} />
            )).slice(0, 6)}
        </div>
    )
}

export default function Work() {
    return (
        <PageContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 pb-4 gap-8">
                <Description />
                <ShowcasedProject />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold py-4">
                Check out my other <span className=" underline underline-offset-4 decoration-brand-100">Projects</span>
            </h2>
            <OtherProjectsGrid />
            <NextButton url="#Experience" />
        </PageContainer>
    )
}