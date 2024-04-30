import { type NextPage } from "next";
import AboutMe from "~/components/homepage/AboutMe";
import HomePage from "~/components/homepage/HomePage";
import WorkV2 from "~/components/homepage/Work/WorkV2";
import PageLayout from "~/components/common/PageLayout";
import StartAProject from "~/components/homepage/StartAProject";
import Expertise from "~/components/homepage/Expertise/Expertise";
import Experience from "~/components/homepage/Experience/Experience";
import Testimonials from "~/components/homepage/Testimonial/Testimonials";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
      <AboutMe />
      <Expertise />
      <WorkV2 />
      <Experience />
      <Testimonials />
      <StartAProject />
    </PageLayout>
  );
};

export default Home;
