import Image, { StaticImageData } from 'next/image'
import GMailClonePreview from "src/assets/projectDocuments/GMailCloneWebsite/screenshot.png"

export default function GmailCloneWebsite() {
    return (
        <>
            <h1 className="font-bold text-xl">Gmail Clone Website</h1>
            <Image
                src={GMailClonePreview}
                className="py-4"
                alt={"Gmail Clone Website"}
            />
            <h2 className="underline">
                About The Project
            </h2>
            <p>
                In this project, I work with HTML and CSS to clone Gmail. These projects are part of jouney to learning web development.
            </p>
        </>
    )
}