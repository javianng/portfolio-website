import { SocialIcon } from "react-social-icons";
import NextButton from "../common/NextButton";
import PageContainer from "../common/PageContainer";
import profilePhoto from "/public/profilephoto.jpg";
import Image from "next/image";
import TitleContainer from "../common/TitleContainer";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

export default function AboutMe() {
  return (
    <PageContainer>
      <TitleContainer id={"AboutMe"}>About Me</TitleContainer>
      <div className="hero">
        <div className="hero-content flex-col p-0 lg:flex-row-reverse">
          <div className="max-w-sm">
            <Image
              src={profilePhoto}
              alt="Javian Ng"
              className="rounded shadow-xl"
            />
          </div>
          <div>
            <div>
              <p>
                <span className="wave">👋</span> Hi! I am Javian!{" "}
              </p>
              <br />
              <p>
                I am a Business Analytics Sophemore and a passionate developer
                and analyst based in Singapore.
              </p>
              <br />
              <p>
                <span className="font-mono text-red-400">Hello World!</span> was
                when I found my passion for coding.
              </p>
              <br />
              <p>
                When I was a child, I was always tearing apart computers and
                putting them together, diving deep into window&apos;s shell only
                to break the computer... It was only after I came across CS50X
                on edX when my interest in programming peaked and now, I am a
                Business Analytics Sophemore.
              </p>
              <br />
              <p>
                I love new experiences that pushes my boundaries outside of my
                comfort zone. I love reading productivity and self-help books,
                and gathering new skillsets from MOOCs. I love travelling,
                taking photos and playing the guitar. Most of all, I love
                meeting people from all walks of life, to understand our
                different experiences and life lessons.
              </p>
              <br />
              <p>
                I am always down for a chat online or over a cup of coffee. Feel
                free to reach out to me using the links below! Interested in
                working together? We should queue up a time to chat. I&apos;ll
                buy the coffee.
              </p>
              <div className="mt-9 flex justify-start">
                <div className="flex w-full justify-start py-9">
                  <div className="grid grid-flow-col gap-5">
                    <div className="tooltip" data-tip="twitter">
                      <SocialIcon
                        url="https://twitter.com/j_avianzz"
                        className="hover:animate-bounce"
                        style={{ height: 35, width: 35 }}
                      />
                    </div>
                    <div className="tooltip" data-tip="linkedin">
                      <SocialIcon
                        url="https://www.linkedin.com/in/javianngzh/"
                        className="hover:animate-bounce"
                        style={{ height: 35, width: 35 }}
                      />
                    </div>
                    <div className="tooltip" data-tip="github">
                      <SocialIcon
                        url="https://github.com/javianng"
                        className="hover:animate-bounce"
                        style={{ height: 35, width: 35 }}
                      />
                    </div>
                    <div className="tooltip" data-tip="email me!">
                      <SocialIcon
                        url="mailto:javian.ng.z.h@gmail.com"
                        className="hover:animate-bounce"
                        style={{ height: 35, width: 35 }}
                      />
                    </div>
                    <div className="tooltip" data-tip="telegram">
                      <SocialIcon
                        url="https://t.me/javianng"
                        className="h-6 w-6 hover:animate-bounce"
                        style={{ height: 35, width: 35 }}
                      />
                    </div>
                    <div className="tooltip" data-tip="my resume">
                      <a
                        href="/resume.pdf"
                        className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-slate-600 hover:animate-bounce"
                      >
                        <DocumentTextIcon className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextButton url="#Expertise" />
    </PageContainer>
  );
}
