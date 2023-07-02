import Image, { StaticImageData } from 'next/image'
import ProjectCard from "./ProjectsCard";
import { PROJECT_DETAILS } from "./ProjectDetails";
import { ShowcasedProjectTitle, ShowcasedProjectCaption, ShowcasedProjectDescription } from "./ShowcasedProjectDetails";

// Resources

import DataAnalysisCropRecommendation from "./Modals/DataAnalytics/DataAnalysisCropRecommendation";
import HeatMap from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import NextButton from '~/components/common/Button';
import PageContainer from '~/components/common/PageContainer';

const ShowcasedProject = (
    <div className="h-fit">
        <h2 className="font-semibold text-3xl overflow-hidden text-ellipsis line-clamp-2">
            {ShowcasedProjectTitle}
        </h2>
        <hr className="mt-3 mb-1 border-black" />
        <hr className="mb-3 border-black" />

        <div className="bg-brand-50 card">
            <div id="Project Description" className="p-4">
                <p className="overflow-hidden text-ellipsis line-clamp-2">
                    {ShowcasedProjectCaption}
                </p>
                <div className='bg-white'>
                    <Image
                        src={HeatMap}
                        width={500}
                        height={500}
                        alt={''}
                        className="rounded-lg object-contain my-2"
                    />
                </div>
                <div id="Project Description">
                    <p className="overflow-hidden text-ellipsis line-clamp-6">
                        {ShowcasedProjectDescription}
                    </p>

                    <div className="flex justify-end w-full pt-2">
                        <label htmlFor="0" className="btn bg-brand-50">Learn More</label>
                        <input type="checkbox" id="0" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 h-fit max-h-[5/6vh] max-w-none overflow-scroll">
                                <DataAnalysisCropRecommendation />
                                <div className="modal-action">
                                    <label htmlFor="0" className="btn">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

// Work

const Description = (
    <div>
        <h1
            className="text-8xl font-bold pb-9"
            id="Work"
        >
            My<br />Work
        </h1>
        <p>
            Driven to learn and eager to explore new tools and technologies. I have worked on some projects that are close to my heart, to explore my interest and passion as well as to hone my abilities as a developer and data analyst.
        </p>
        <br />
        <p>
            My works are mainly on frontend, backend and data analytics using dataset found on websites such as Kaggle. More details and the codes can be found on Github.
        </p>
    </div>
)

export default function Work() {
    return (
        <PageContainer>
            <div className="grid grid-cols-2 pb-4 gap-8">
                {Description}
                {ShowcasedProject}
            </div>
            <h2 className="text-3xl font-semibold py-4">
                Check out my other <span className=" underline underline-offset-4 decoration-brand-100">Projects</span>
            </h2>
            <div className="flex overflow-scroll h-fit">
                <div className="flex gap-6 my-4">
                    {PROJECT_DETAILS.map((componentDetails, i) => (
                        <ProjectCard key={i} {...componentDetails} />
                    ))}
                </div>
            </div>
            <NextButton url="#Experience" />
        </PageContainer>
    )
}