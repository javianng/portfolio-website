import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";

import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/expertise/Expertise";

import Work from "~/components/homepage/work/Work";
import Testimony from "~/components/homepage/Testimony";
import Experience from "~/components/homepage/experience/Experience";
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
        <Testimony />
        <StartAProject />
      </main>
    </PageLayout>
  );
};

export default Home;