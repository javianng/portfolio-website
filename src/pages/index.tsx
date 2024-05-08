import { type NextPage } from "next";
import Work from "~/components/homepage/Work";
import AboutMe from "~/components/homepage/AboutMe";
import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise";
import PageLayout from "~/components/common/PageLayout";
import Experience from "~/components/homepage/Experience";
import Testimonials from "~/components/homepage/Testimonials";
import StartAProject from "~/components/homepage/StartAProject";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
      <AboutMe />
      <Expertise />
      <Work />
      <Experience />
      <Testimonials />
      <StartAProject />
    </PageLayout>
  );
};

export default Home;
