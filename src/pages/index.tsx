import { type NextPage } from "next";
import AboutMe from "~/components/homepage/AboutMe";
import HomePage from "~/components/homepage/HomePage";
import Work from "~/components/homepage/Work";
import PageLayout from "~/components/common/PageLayout";
import StartAProject from "~/components/homepage/StartAProject";
import Expertise from "~/components/homepage/Expertise";
import Experience from "~/components/homepage/Experience";
import Testimonials from "~/components/homepage/Testimonials";

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
