import { SocialIcon } from "react-social-icons";
import NextButton from "../common/Button";
import PageContainer from "../common/PageContainer";
import profilePhoto from 'src/assets/profilephoto.jpg'
import Image from "next/image";

export default function AboutMe() {
    return (
        <PageContainer>
            <h1
                className="text-8xl font-bold py-4"
                id="AboutMe"
            >
                About Me
            </h1>

            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <Image
                        src={profilePhoto}
                        alt="Javian Ng"
                        className='max-w-sm rounded-lg shadow-xl'
                    />
                    <div>
                        <div>
                            <p><span className="waving">👋</span> Hi! I am Javian! </p>
                            <br />
                            <p>I am a Business Analytics Sophemore and a passionate developer and analyst based in Singapore.</p>
                            <br />
                            <p>
                                <span className="font-mono text-red-400">Hello World!</span> was when I found my passion for coding.
                            </p>
                            <br />
                            <p>
                                When I was a child, I was always tearing apart computers and putting them together, diving deep into window&apos;s shell only to break the computer... It was only after I came across CS50X on edX when my interest in programming peaked and now, I am a Business Analytics Sophemore.
                            </p>
                            <br />
                            <p>
                                I love new experiences that pushes my boundaries outside of my comfort zone. I love reading productivity and self-help books, and gathering new skillsets from MOOCs. I love travelling, taking photos and playing the guitar. Most of all, I love meeting people from all walks of life, to understand our different experiences and life lessons.
                            </p>
                            <br />
                            <p>
                                I am always down for a chat online or over a cup of coffee. Feel free to reach out to me using the links below! Interested in working together? We should queue up a time to chat. I&apos;ll buy the coffee.
                            </p>
                            <div className='flex justify-start mt-9'>
                                <div className='grid grid-flow-col gap-3'>
                                    <SocialIcon url="https://twitter.com/j_avianzz" className="hover:animate-bounce ease-in-out duration-300 transition" />
                                    <SocialIcon url="https://www.linkedin.com/in/javianngzh/" />
                                    <SocialIcon url="https://github.com/javianng" />
                                    <SocialIcon url="mailto:javian.ng.z.h@gmail.com" />
                                    <SocialIcon url="https://t.me/javianng" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NextButton url="#Expertise" />
        </PageContainer>
    )
}