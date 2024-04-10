import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";
import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise/Expertise";
import Testimonials from "~/components/homepage/Testimonial/Testimonials";
import Experience from "~/components/homepage/Experience/Experience";
import AboutMe from "~/components/homepage/AboutMe";
import StartAProject from "~/components/homepage/StartAProject";
import WorkV2 from "~/components/homepage/Work/WorkV2";

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
