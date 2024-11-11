import { GeistSans } from "geist/font/sans";
import { Menu } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { SocialList } from "~/components/social-links";
import { ThemeProvider } from "~/components/theme-provider";
import ThemeSwitcher from "~/components/theme-switcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import { PROJECT_DATA } from "./projects/project-data";

const HOME_LINKS = [
  { href: "/", title: "Back to Main" },
  { href: "/about-me", title: "About Me" },
  { href: "/work-experience", title: "Work Experience" },
  { href: "/contact-me", title: "Contact Me" },
];

export const metadata: Metadata = {
  title: "Javian Ng",
  description: "Explore Javian Ng's professional working experience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title:
      "Javian Ng - Full-Stack Web Developer, Machine Learning Engineer, Full-Time Adventurer",
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
    <html lang="en" className={GeistSans.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <div className="container flex h-[90vh] gap-3">
              {/* Small Screen */}
              <aside
                className="absolute bottom-16 right-10 z-50 opacity-80 sm:hidden"
                id="sheet"
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon">
                      <Menu size={16} strokeWidth={1} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="flex flex-col items-start overflow-scroll"
                  >
                    <SheetHeader>
                      <SheetTitle className="text-start">javian ng</SheetTitle>
                      <SheetDescription>
                        welcome to my personal website
                      </SheetDescription>
                    </SheetHeader>

                    <p className="p">home</p>
                    {HOME_LINKS.map((link) => (
                      <Link
                        href={link.href}
                        key={link.href}
                        className="underline-animation font-light"
                      >
                        {link.title}
                      </Link>
                    ))}

                    <p className="p">projects</p>
                    <Link
                      href="/projects"
                      className="underline-animation font-light"
                    >
                      all projects
                    </Link>
                    {PROJECT_DATA.slice(0, 3).map((project) => (
                      <Link
                        href={`/projects/${project.slug}`}
                        key={project.slug}
                        className="underline-animation font-light"
                      >
                        {project.title}
                      </Link>
                    ))}

                    <Link href="/blog" className="p underline-animation">
                      blog
                    </Link>

                    <SheetFooter className="pt-8">
                      <SocialList />
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </aside>

              {/* Normal Layout */}
              <aside
                className="hidden w-80 flex-col justify-between rounded-md bg-white p-10 shadow-md dark:bg-neutral-900 sm:flex"
                id="sidebar"
              >
                <ScrollArea>
                  <Accordion type="single" collapsible defaultValue="home">
                    {/* Home */}
                    <AccordionItem value="home">
                      <AccordionTrigger>home</AccordionTrigger>
                      {HOME_LINKS.map((link) => (
                        <AccordionContent key={link.href}>
                          <Link
                            href={link.href}
                            className="underline-animation"
                          >
                            {link.title}
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>

                    {/* Projects */}
                    <AccordionItem value="projects">
                      <AccordionTrigger>projects</AccordionTrigger>
                      <AccordionContent>
                        <Link href="/projects" className="underline-animation">
                          all projects
                        </Link>
                      </AccordionContent>
                      {PROJECT_DATA.slice(0, 3).map((project) => (
                        <AccordionContent key={project.slug}>
                          <Link
                            href={`/projects/${project.slug}`}
                            className="underline-animation"
                          >
                            {project.title}
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>

                    {/* Blog */}
                    <Link href="/blog">
                      <AccordionItem value="blog">
                        <p className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                          blog
                        </p>
                      </AccordionItem>
                    </Link>
                  </Accordion>
                </ScrollArea>
                <SocialList />
              </aside>

              <div className="flex w-full sm:w-[calc(100%_-_20rem)]">
                {children}
              </div>
            </div>
            <footer className="container flex justify-between">
              <p className="font-thin">
                <small>handcrafted by me &#169; twentytwentyfour</small>
              </p>
              <ThemeSwitcher />
            </footer>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
