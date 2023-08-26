import Image from 'next/image'
import ProjectCard from "../../common/ProjectsCard";
import { SHOWCASED_PROJECT_TITLE, SHOWCASED_PROJECT_CAPTION, SHOWCASED_PROJECT_DESCRIPTION, PROJECT_DETAILS } from "./WorkDetails";
import HeatMap from "src/assets/projectDocuments/DataAnalysisCropRecommendation/heatmap.png"
import NextButton from '~/components/common/NextButton';
import PageContainer from '~/components/common/PageContainer';
import TitleContainer from '~/components/common/TitleContainer';
import Link from 'next/link';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import Button from '~/components/common/Button';

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
                        <Button href='/work/crop-recommendation-data-analytics' displayText='Learn More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Description() {
    return (
        <div className='pr-0 sm:pr-14'>
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
        <>
            <div className='sm:grid grid-cols-3 gap-4 hidden'>
                {PROJECT_DETAILS.map((componentDetails, i) => (
                    <ProjectCard key={i} {...componentDetails} />
                )).slice(0, 6)}
            </div>
            <div className='grid grid-cols-1 gap-4 sm:hidden'>
                {PROJECT_DETAILS.map((componentDetails, i) => (
                    <ProjectCard key={i} {...componentDetails} />
                )).slice(0, 3)}
            </div>
        </>
    )
}

function ShowAllProjectsButton() {
    return (
        <Link href={"/work"}>
            <div className='flex flex-row items-center gap-1 
            border-2 p-5 rounded-lg
            hover:text-brand-200 hover:border-brand-200
            transition ease-in-out'>
                <ChevronDoubleDownIcon className='h-6 w-6' />
                <p className='font-semibold uppercase text-sm'>
                    Show all projects
                </p>
            </div>
        </Link>
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
            <div className="flex justify-center pt-4 sm:pt-12">
                <ShowAllProjectsButton />
            </div>
            <NextButton url="#Experience" />
        </PageContainer>
    )
}