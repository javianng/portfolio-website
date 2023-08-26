import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";

import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/myExpertise/Expertise";

import Work from "~/components/homepage/myWork/Work";
import Testimonials from "~/components/homepage/testimonials/Testimonials";
import Experience from "~/components/homepage/professionalExperience/Experience";
import AboutMe from "~/components/homepage/AboutMe";
import StartAProject from "~/components/homepage/StartAProject";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main>
        <HomePage />
        <AboutMe />
        <Expertise />
        <Work />
        <Experience />
        <Testimonials />
        <StartAProject />
      </main>
    </PageLayout>
  );
};

export default Home;