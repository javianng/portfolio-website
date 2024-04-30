export default function PageContainer({ children }: PageLayoutProps) {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 max-w-7xl py-3">{children}</div>
    </div>
  );
}

type PageLayoutProps = {
  children: React.ReactNode;
};
