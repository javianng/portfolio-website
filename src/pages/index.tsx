import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";

import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise/Expertise";
import Work from "~/components/homepage/Work/Work";
import Contact from "~/components/homepage/Contact";
import Experience from "~/components/homepage/Experience/Experience";
import AboutMe from "~/components/homepage/AboutMe";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main>
        <HomePage />
        <AboutMe />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
    </PageLayout>
  );
};

export default Home;