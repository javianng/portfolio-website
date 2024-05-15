export default function PageContainer({ children }: PageLayoutProps) {
  return (
    <section className="flex justify-center">
      <div className="w-11/12 max-w-7xl py-3">{children}</div>
    </section>
  );
}

type PageLayoutProps = {
  children: React.ReactNode;
};
