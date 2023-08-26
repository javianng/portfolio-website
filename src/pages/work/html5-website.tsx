import GithubButton from "~/components/common/GithubButton";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";

const TAGS = [
    'HTML5', 'Frontend',
]

export default function HTML5Website() {
    return (
        <SubpageLayout href="/work">
            <TitleContainer>
                HTML5 Website
            </TitleContainer>
            <div className="pb-9">
                <div className="pb-9">
                    <div className="flex gap-2 flex-wrap">
                        {TAGS.map((TagDetails, i) => (
                            <div key={i} className="font-medium text-lg sm:text-2xl badge badge-ghost p-4 capitalize">
                                {TagDetails}
                            </div>
                        ))}
                    </div>
                </div>
                <GithubButton href="https://github.com/javianng/frontend-projects/tree/main/HTML5_Portfolio" />
            </div>
            <div>
                <div className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p>
                        <span>
                            In this project, I experiment with HTML5 to build a portfolio page that is solely powered by HTML. I then host it on Github Pages. This is my very first step into web development and I hope to impart CSS and Javascript components into future web projects.
                        </span>
                    </p>
                </div>
            </div>

            <iframe src="/html5-porfolio-website.html" className="w-full h-[90vh]" />
        </SubpageLayout>
    )
}