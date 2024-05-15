import ErrorPage from "~/components/common/ErrorPage";
import { PageLayoutProps } from "~/components/common/PageLayout";

export default function Page404(props: PageLayoutProps) {
  return (
    <main className="flex h-screen items-center justify-center bg-brand-300">
      <ErrorPage />
    </main>
  );
}
