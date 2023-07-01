import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

type PageLayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
};

const PageLayout = (props: PageLayoutProps) => {
    const {
        children,
        title = "Javian Ng",
        description = "Developer, Business Analyst, Car Enthusiast",
        className = "text-[#2C3333]"
    } = props;

    return (
        <div className={className}>
            <Head>
                <title>{title}</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content={description} name="description" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default PageLayout;