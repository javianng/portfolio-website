import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        className = "text-brand-300 bg-gray-50"
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