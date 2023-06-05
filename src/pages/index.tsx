import { type NextPage } from "next";
import Navbar from "~/components/homepage/Navbar";
import HomePage from "~/components/homepage/HomePage";
import Expertise from "~/components/homepage/Expertise";
import Work from "~/components/homepage/Work";
import Contact from "~/components/homepage/Contact";

const Home: NextPage = () => {
  return (
    <div className="m-4 bg-slate-300">
      <Navbar />
      <HomePage />
      <Expertise />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;