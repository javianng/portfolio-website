import test from "src/assets/projectDocuments/test.png"
import DataAnalyticsCard from "../common/DataAnalyticsCard";

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

export default function Work() {
    return (
        <>
            <div className='flex justify-center'>
                <div className="
                    w-11/12 max-w-5xl"
                >
                    <div className="grid grid-cols-2 pb-4 gap-8">
                        <div>
                            <h1 className="text-8xl font-bold pb-9">
                                My<br />Work
                            </h1>
                            <p>
                                Aliquip sint sunt voluptate consectetur eiusmod exercitation anim aliquip ut tempor. Voluptate aliquip pariatur qui ullamco fugiat proident irure excepteur deserunt anim eu reprehenderit cupidatat. Proident sint enim ut cupidatat nisi proident nostrud. Sunt cupidatat consequat anim in ut sit deserunt labore id nulla est tempor ullamco dolor. Adipisicing ut eiusmod aute. Ipsum qui non minim adipisicing id anim officia sunt nulla irure minim nulla in excepteur.
                            </p>
                        </div>
                        <div className="text-3xl">
                            FEATURED PROJECT
                        </div>
                    </div>
                    <h2 className="text-3xl py-4">
                        CHECK OUT MY OTHER PROJECTS
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