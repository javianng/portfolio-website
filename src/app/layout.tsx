import "~/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "~/components/theme-provider";
import ThemeSwitcher from "~/components/theme-switcher";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <div className="container flex h-[90vh] gap-3">{children}</div>
            <footer className="container flex justify-between">
              <p className="font-thin">
                <small>handcrafted by me &#169; twentytwentyfour</small>
              </p>
              <ThemeSwitcher />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
