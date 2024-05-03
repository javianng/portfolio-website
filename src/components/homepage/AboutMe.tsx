import Image from "next/image";
import NextButton from "../common/NextButton";
import SocialMedia from "../common/SocialMedia";
import PageContainer from "../common/PageContainer";
import profilePhoto from "/public/profilephoto.jpg";
import TitleContainer from "../common/TitleContainer";

export default function AboutMe() {
  return (
    <PageContainer>
      <TitleContainer id={"AboutMe"}>About Me</TitleContainer>
      <section className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
        <div className="max-w-sm">
          <Image
            src={profilePhoto}
            alt="Javian Ng"
            className="rounded-md shadow-md"
          />
        </div>
        <div>
          <div>
            <p>
              <span className="wave">👋</span> Hi! I am Javian!{" "}
            </p>
            <br />
            <p>
              I am a Business Analytics Sophemore and a passionate developer and
              analyst based in Singapore.
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
              to break the computer... It was only after I came across CS50X on
              edX when my interest in programming peaked and now, I am a
              Business Analytics Sophemore.
            </p>
            <br />
            <p>
              I love new experiences that pushes my boundaries outside of my
              comfort zone. I love reading productivity and self-help books, and
              gathering new skillsets from MOOCs. I love travelling, taking
              photos and playing the guitar. Most of all, I love meeting people
              from all walks of life, to understand our different experiences
              and life lessons.
            </p>
            <br />
            <p>
              I am always down for a chat online or over a cup of coffee. Feel
              free to reach out to me using the links below! Interested in
              working together? We should queue up a time to chat. I&apos;ll buy
              the coffee.
            </p>
            <div className="mt-9 flex">
              <div className="flex w-full justify-center py-9 lg:justify-start">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </section>
      <NextButton url="#Expertise" />
    </PageContainer>
  );
}
