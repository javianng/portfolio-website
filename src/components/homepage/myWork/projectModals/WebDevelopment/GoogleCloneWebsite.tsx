import Image, { StaticImageData } from 'next/image'
import GoogleClonePreview from "src/assets/projectDocuments/GoogleCloneWebsite/screenshot.png"

export default function GoogleCloneWebsite() {
    return (
        <>
            <h1 className="font-bold text-xl">Google Clone Website</h1>
            <Image
                src={GoogleClonePreview}
                className="py-4"
                alt={"Google Clone Website"}
            />
            <h2 className="underline">
                About The Project
            </h2>
            <p>
                In this project, I work with HTML and CSS to clone Google. These projects are part of jouney to learning web development.
            </p>
        </>
    )
}