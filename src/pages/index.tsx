import { type NextPage } from "next";

import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise";
import Work from "~/components/homepage/Work";
import Contact from "~/components/homepage/Contact";
import Experience from "~/components/homepage/Experience";

import NextButton from "~/components/Button";

const Home: NextPage = () => {
  return (
    <>
      <div className="m-4">
        <Navbar />
        <HomePage />

        <div className="flex justify-center h-[10vh] mt-5">
          <NextButton url="apple" />
        </div>

        <Expertise />

        <div className="flex justify-center h-[10vh] mt-5">
          <NextButton url="apple" />
        </div>

        <Work />

        <div className="flex justify-center h-[10vh] mt-5">
          <NextButton url="apple" />
        </div>

        <Experience />

        <div className="flex justify-center h-[10vh] mt-5">
          <NextButton url="apple" />
        </div>

        <Contact />

      </div>
      <Footer />
    </>
  );
};

export default Home;