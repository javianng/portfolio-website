import { type NextPage } from "next";
import Work from "~/components/homepage/Work";
import AboutMe from "~/components/homepage/AboutMe";
import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise";
import PageLayout from "~/components/common/PageLayout";
import Experience from "~/components/homepage/Experience";
import Testimonials from "~/components/homepage/Testimonials";
import StartAProject from "~/components/homepage/StartAProject";
import NextButton from "~/components/common/NextButton";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
      <NextButton url="#AboutMe" />
      <AboutMe />
      <NextButton url="#Expertise" />
      <Expertise />
      <NextButton url="#Work" />
      <Work />
      <NextButton url="#Experience" />
      <Experience />
      <NextButton url="#Testimonials" />
      <Testimonials />
      <StartAProject />
    </PageLayout>
  );
};

export default Home;
