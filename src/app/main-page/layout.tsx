import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import { SocialList } from "~/components/social-links";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const HOME_LINKS = [
  { href: "/main-page", title: "Back to Main" },
  { href: "/main-page/about-me", title: "About Me" },
  { href: "/main-page/work-experience", title: "Work Experience" },
  { href: "/main-page/contact-me", title: "Contact Me" },
];

const PROJECTS = [
  { id: 1, title: "Project #1" },
  { id: 2, title: "Project #2" },
  { id: 3, title: "Project #3" },
  { id: 4, title: "Project #4" },
];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <aside className="absolute bottom-16 right-10 z-50 opacity-80 sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon">
              <div>
                <Menu size={16} strokeWidth={1} />
              </div>
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
            {PROJECTS.map((project) => (
              <p className="font-light" key={project.id}>
                {project.title}
              </p>
            ))}
            <SheetFooter className="pt-8">
              <SocialList />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </aside>
      <aside className="hidden w-80 flex-col justify-between rounded-md bg-white p-10 shadow-md sm:flex">
        <ScrollArea>
          <Accordion type="single" collapsible defaultValue="home">
            {/* home */}
            <AccordionItem value="home">
              <AccordionTrigger>home</AccordionTrigger>
              {HOME_LINKS.map((link) => (
                <AccordionContent key={link.href}>
                  <Link href={link.href} className="underline-animation">
                    {link.title}
                  </Link>
                </AccordionContent>
              ))}
            </AccordionItem>
            {/* projects */}
            <AccordionItem value="projects">
              <AccordionTrigger>projects</AccordionTrigger>
              {PROJECTS.map((project) => (
                <AccordionContent key={project.id}>
                  {project.title}
                </AccordionContent>
              ))}
            </AccordionItem>
            {/* blog */}
            <Link href={"/blog"}>
              <AccordionItem value="blog">
                <AccordionTrigger>blog</AccordionTrigger>
              </AccordionItem>
            </Link>
          </Accordion>
        </ScrollArea>
        <SocialList />
      </aside>
      {children}
    </>
  );
}
