import test from "src/assets/projectDocuments/test.png"
import Image, { StaticImageData } from 'next/image'
import DataAnalyticsCard from "../common/DataAnalyticsCard";
import LearnMoreButton from "../common/LearnMoreButton";

const PROJECT_DETAILS = [
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        link: "",
        color: "decoration-[#2C49D8]",
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        link: "",
        color: "decoration-[#515AC9]",
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla official",
        link: "",
        color: "decoration-[#FF6B2B]",
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla",
        link: "",
        color: "decoration-[#DE058D]",
    },
];

const ShowcasedProject = (
    <div id="Showcased Project" className="h-fit">
        <h2 id="Project Title" className="font-semibold text-3xl overflow-hidden text-ellipsis line-clamp-2">
            Duis laboris excepteur cillum culpa ut Lorem et ex minim. Duis laboris excepteur cillum culpa ut Lorem et ex minim.
        </h2>
        <hr className="mt-3 mb-1 border-black" />
        <hr className="mb-3 border-black" />


        <div className="bg-gray-200 rounded-lg shadow-md relative">
            <div id="Project Description" className="p-4">
                <p className="overflow-hidden text-ellipsis line-clamp-2">
                    Exercitation mollit minim voluptate veniam id amet irure velit.
                </p>
                <Image
                    src={test}
                    width={500}
                    height={500}
                    alt={''}
                    className="rounded-lg object-none my-2"
                />
                <div id="Project Description">
                    <p className="overflow-hidden text-ellipsis line-clamp-6">
                        Adipisicing labore est ea consectetur ea consectetur nisi voluptate ex. Ea labore aute aliqua occaecat laboris tempor ad deserunt. Aliquip laborum sint magna quis. Non officia in do deserunt adipisicing ullamco in quis et elit proident nostrud. Aliqua cupidatat nostrud sint consectetur in excepteur proident occaecat labore ullamco qui excepteur. Elit labore qui Lorem amet officia qui ut fugiat elit ad do enim excepteur ut aliquip. Eiusmod enim proident incididunt officia duis tempor cupidatat do sit adipisicing. Labore enim culpa culpa est proident tempor ad exercitation elit fugiat anim tempor minim sit eiusmod.
                    </p>

                    <div className="flex justify-end w-full">
                        <LearnMoreButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default function Work() {
    return (
        <>
            <div
                id="myworksection"
                className='flex justify-center'
            >
                <div className="
                    w-11/12 max-w-5xl"
                >
                    <div className="grid grid-cols-2 pb-4 gap-8">
                        <div>
                            <h1 className="text-8xl font-bold pb-9">
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
                        {ShowcasedProject}

                    </div>
                    <h2 className="text-3xl font-semibold py-4">
                        Check out my other <span className=" underline underline-offset-4 decoration-slate-400">Projects</span>
                    </h2>
                    <div className="flex overflow-scroll">
                        <div className="flex gap-6 pt-4">
                            {PROJECT_DETAILS.map((componentDetails, i) => (
                                <>
                                    <DataAnalyticsCard key={i} {...componentDetails} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}