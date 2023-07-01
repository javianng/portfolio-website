import Image, { StaticImageData } from 'next/image'
import TwitterClonePreview from "src/assets/projectDocuments/TwitterCloneWebsite/screenshot.png"

export default function TwitterCloneWebsite() {
    return (
        <>
            <h1 className="font-bold text-xl">Twitter Clone Website</h1>
            <Image
                src={TwitterClonePreview}
                className="py-4"
                alt={"Twitter Clone Website"}
            />
            <h2 className="underline">
                About The Project
            </h2>
            <p>
                In this project, I work with HTML and CSS to clone Twitter. These projects are part of jouney to learning web development.
            </p>
        </>
    )
}