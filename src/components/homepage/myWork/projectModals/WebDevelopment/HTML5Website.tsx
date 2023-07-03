import Image, { StaticImageData } from 'next/image'
import preview from "src/assets/projectDocuments/HTML5Website/HTML5WebsitePreview.png"

export default function HTML5Website() {
    return (
        <>
            <h1 className="font-bold text-xl">HTML 5 Website</h1>
            <Image
                src={preview}
                className="py-4"
                alt={"HTML5 Website"}
            />
            <h2 className="underline">
                About The Project
            </h2>
            <p>
                In this project, I experiment with HTML5 to build a portfolio page that is solely powered by HTML. I then host it on Github Pages. This is my very first step into web development and I hope to impart CSS and Javascript components into future web projects.
            </p>
        </>
    )
}