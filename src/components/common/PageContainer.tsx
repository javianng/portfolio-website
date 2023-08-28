type PageLayoutProps = {
    children: React.ReactNode;
};

const PageContainer = (props: PageLayoutProps) => {
    const {
        children
    } = props;

    return (
        <div className="flex justify-center">
            <div className="w-11/12 max-w-7xl  py-3">
                {children}
            </div>
        </div>
    );
};

export default PageContainer;