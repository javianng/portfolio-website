import { GeistSans } from "geist/font/sans";
import Head from "next/head";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Head>
        <title content="Javian Ng" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer"
          name="description"
        />
        <meta
          property="og:image"
          content="https://github.com/javianng/portfolio-website/blob/main/public/profilephoto.jpg?raw=true"
        />
        <meta
          property="og:title"
          content="Javian Ng - Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer"
        />
        <meta
          property="og:description"
          content="I run on espressos and kopi-peng. Am either building a project, or taking on a new challenge."
        />
        <meta property="og:url" content="https://www.javianng.com/" />
      </Head>
      <body className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100">
        {children}
      </body>
    </html>
  );
}
