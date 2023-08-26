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
        className = "text-brand-300 bg-gray-50",
        href,
    } = props;

    return (
        <div className={className}>
            <ReturnNavbar href={href ?? "/"} />
            <PageContainer>
                <div className="h-[5vh]" />
                {children}
            </PageContainer>
            <StartAProject />
            <Footer />
        </div >
    );
}