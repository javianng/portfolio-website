import StartAProject from "../homepage/StartAProject";
import Footer from "./Footer";
import PageContainer from "./PageContainer";
import ReturnNavbar from "./ReturnNavbar";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function SubpageLayout(props: PageLayoutProps) {
  const {
    children,
    className = "text-brand-300 bg-neutral-50 dark:bg-brand-300 dark:text-brand-50",
  } = props;

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
}
