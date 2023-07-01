import Image, { StaticImageData } from 'next/image'
import NetflixClonePreview from "src/assets/projectDocuments/NetflixCloneWebsite/screenshot.png"

export default function NetflixCloneWebsite() {
    return (
        <>
            <h1 className="font-bold text-xl">Netflix Clone Website</h1>
            <Image
                src={NetflixClonePreview}
                className="py-4"
                alt={"Netflix Clone Website"}
            />
            <h2 className="underline">
                About The Project
            </h2>
            <p>
                In this project, I work with HTML and CSS to clone Netflix. These projects are part of jouney to learning web development.
            </p>
        </>
    )
}