import "~/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Work Experience - Javian Ng",
  description: "Explore Javian Ng's professional work experience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title:
      "Javian Ng - Full-Stack Web Developer, ML Data Scientist, Full-Time Adventurer",
    description:
      "I run on espressos and kopi-peng. Am either building a project, or taking on a new challenge.",
    url: "https://www.javianng.com",
    type: "website",
    images: [
      {
        url: "https://github.com/javianng/portfolio-website/blob/main/public/profilephoto.jpg?raw=true",
        width: 1200,
        height: 630,
        alt: "Javian Ng Profile Photo",
      },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100">
        <div className="container flex h-[90vh] gap-3">{children}</div>
        <footer className="container">
          <p className="font-thin">
            <small>handcrafted by me &#169; twentytwentyfour</small>
          </p>
        </footer>
      </body>
    </html>
  );
}
