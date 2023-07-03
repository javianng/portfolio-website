import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";

import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise/Expertise";
import Work from "~/components/homepage/Work/Work";
import Contact from "~/components/homepage/Contact";
import Experience from "~/components/homepage/Experience";

import NextButton from "~/components/common/Button";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="m-4">
        <main>
          <HomePage />

          <div className="flex justify-center h-[10vh] mt-5">
            <NextButton url="#Expertise" />
          </div>

          <Expertise />

          <div className="flex justify-center h-[10vh] mt-5">
            <NextButton url="#Work" />
          </div>

          <Work />

          <div className="flex justify-center h-[10vh] mt-5">
            <NextButton url="#Experience" />
          </div>

          <Experience />

          <div className="flex justify-center h-[10vh] mt-5">
            <NextButton url="#Contact" />
          </div>

          <Contact />
        </main>

      </div>
    </PageLayout>
  );
};

export default Home;