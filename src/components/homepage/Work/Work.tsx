import test from "src/assets/projectDocuments/test.png"
import Image, { StaticImageData } from 'next/image'
import ProjectCard from "./ProjectsCard";

// Showcased Project

const ShowcasedProjectTitle = "Exercitation mollit minim voluptate veniam id amet irure velit."

const ShowcasedProjectCaption = "Exercitation mollit minim voluptate veniam id amet irure velit."

const ShowcasedProjectDescription = "Adipisicing labore est ea consectetur ea consectetur nisi voluptate ex. Ea labore aute aliqua occaecat laboris tempor ad deserunt. Aliquip laborum sint magna quis. Non officia in do deserunt adipisicing ullamco in quis et elit proident nostrud. Aliqua cupidatat nostrud sint consectetur in excepteur proident occaecat labore ullamco qui excepteur. Elit labore qui Lorem amet officia qui ut fugiat elit ad do enim excepteur ut aliquip. Eiusmod enim proident incididunt officia duis tempor cupidatat do sit adipisicing. Labore enim culpa culpa est proident tempor ad exercitation elit fugiat anim tempor minim sit eiusmod."

const ShowcasedProjectModal = (
    <>
    </>
)

const ShowcasedProject = (
    <div id="Showcased Project" className="h-fit">
        <h2 id="Project Title" className="font-semibold text-3xl overflow-hidden text-ellipsis line-clamp-2">
            {ShowcasedProjectTitle}
        </h2>
        <hr className="mt-3 mb-1 border-black" />
        <hr className="mb-3 border-black" />


        <div className="bg-gray-200 card">
            <div id="Project Description" className="p-4">
                <p className="overflow-hidden text-ellipsis line-clamp-2">
                    {ShowcasedProjectCaption}
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
                        {ShowcasedProjectDescription}
                    </p>

                    <div className="flex justify-end w-full pt-2">
                        <label htmlFor="0" className="btn">Learn More</label>
                        <input type="checkbox" id="0" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 h-fit max-h-[5/6vh] max-w-none overflow-scroll">
                                <>
                                    {ShowcasedProjectModal}
                                </>
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

// Other Project Details

const PROJECT_DETAILS = [
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        color: "decoration-[#2C49D8]",
        id: "1",
        modalContent:
            <>
                <h3 className="font-bold text-lg"> Hello!</h3>
                <p className="py-4">Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim. Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim.Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim.Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim.Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim.Aliquip amet ipsum in irure nulla cillum culpa duis duis. Aliquip ea culpa et tempor labore mollit est et sunt. Excepteur eiusmod nulla minim cupidatat ex culpa irure quis velit pariatur. Qui aliqua tempor nisi elit consectetur magna nisi dolor in duis laboris ullamco. Sit id eiusmod minim ad irure cillum tempor do ut est adipisicing elit cillum aute amet. Elit qui dolor ipsum aliquip sunt pariatur consequat aute labore non qui do minim.</p>
            </>,
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        color: "decoration-[#2C49D8]",
        id: "4",
        modalContent: <><h3 className="font-bold text-lg"> Hello!</h3><p className="py-4">This modal works with a hidden checkbox!</p></>,
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        color: "decoration-[#2C49D8]",
        id: "3",
        modalContent: <><h3 className="font-bold text-lg"> Hello!</h3><p className="py-4">This modal works with a hidden checkbox!</p></>,
    },
    {
        title: "Officia quis nisi excepteur adipisicing.",
        image: test,
        description: "Amet dolore est aute reprehenderit dolor consequat irure. Velit adipisicing sunt velit amet mollit cillum. Irure dolore nulla officia veniam pariatur ad anim eu minim qui laborum quis labore sit. Eiusmod duis est aliqua est laborum enim mollit officia voluptate sint.",
        color: "decoration-[#2C49D8]",
        id: "2",
        modalContent: <><h3 className="font-bold text-lg"> Hello!</h3><p className="py-4">This modal works with a hidden checkbox!</p></>,
    },
];

// Work

const Description = (
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
                        {Description}
                        {ShowcasedProject}
                    </div>
                    <h2 className="text-3xl font-semibold py-4">
                        Check out my other <span className=" underline underline-offset-4 decoration-slate-400">Projects</span>
                    </h2>
                    <div className="flex overflow-scroll h-fit">
                        <div className="flex gap-6 my-4">
                            {PROJECT_DETAILS.map((componentDetails, i) => (
                                <>
                                    <ProjectCard key={i} {...componentDetails} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}