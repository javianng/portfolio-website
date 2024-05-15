import Image from "next/image";
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
              I am a <strong>Full-Stack Web Developer</strong> with a robust
              background in <strong>Machine Learning and Data Science</strong>.
              My passion for technology drives me to constantly explore new
              realms, making me a quick learner and highly adaptable
              professional. I thrive on challenges and love turning complex
              problems into clean, user-friendly solutions.
            </p>
            <br />
            <p>
              Currently, I am expanding my expertise through a research data
              science internship focused on cancer research. This opportunity
              allows me to apply my{" "}
              <strong>analytical skills and machine learning knowledge</strong>{" "}
              to make meaningful contributions to critical health issues. It's
              an exhilarating experience that has deepened my understanding of
              bioinformatics and its impact on medical advancements.
            </p>
            <br />
            <p>
              With an entrepreneurial mindset, I have initiated and led various
              projects that bridge the gap between data-driven insights and
              functional web applications. My goal is always to innovate and
              optimize, ensuring that every project not only meets but exceeds
              expectations.
            </p>
            <br />
            <p>
              Whether I'm coding, crunching data, or collaborating on
              breakthrough research, I bring a blend of expertise, dedication,
              and a forward-thinking approach to everything I do. Let's connect
              and explore how we can create something great together!
            </p>
            <div className="mt-9 flex">
              <div className="flex w-full justify-center py-9 lg:justify-start">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
