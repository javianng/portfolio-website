import Link from "next/link";
import Head from "next/head";
import { CircleX } from "lucide-react";
import { PageLayoutProps } from "~/components/common/PageLayout";
import ErrorPage from "~/components/common/ErrorPage";

export default function Page404(props: PageLayoutProps) {
  const {
    title = "Javian Ng",
    description = "Part-Time Developer, Part-Time Business Analyst, Full-Time Curious Adventurer",
  } = props;

  // Render the 404 page
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={description} name="description" />
      </Head>
      <main className="flex h-screen items-center justify-center bg-brand-300">
        <ErrorPage />
      </main>
    </>
  );
}
