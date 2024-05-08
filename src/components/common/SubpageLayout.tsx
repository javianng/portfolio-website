import PropTypes from "prop-types";
import Footer from "./Footer";
import ReturnNavbar from "./ReturnNavbar";
import PageContainer from "./PageContainer";
import StartAProject from "../homepage/StartAProject";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const SubpageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "text-brand-300 bg-neutral-50 dark:bg-brand-300 dark:text-brand-50",
}) => {
  return (
    <div className={className}>
      <ReturnNavbar />
      <PageContainer>
        <div className="flex flex-col gap-4 pt-[5vh]">{children}</div>
      </PageContainer>
      <StartAProject />
      <Footer />
    </div>
  );
};

SubpageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SubpageLayout;
