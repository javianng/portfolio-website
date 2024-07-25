import Link from "next/link";
import { SocialList } from "~/components/social-links";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <aside className="flex w-80 flex-col justify-between rounded-md bg-white p-10 shadow-md">
        <ScrollArea>
          <Accordion type="single" collapsible defaultValue="home">
            <AccordionItem value="home">
              <AccordionTrigger>home</AccordionTrigger>
              <AccordionContent>
                <Link href="/main-page" className="hover:underline">
                  back to main
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link className="hover:underline" href={"/main-page/about-me"}>
                  about me
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link
                  className="hover:underline"
                  href={"/main-page/work-experience"}
                >
                  work experience
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link
                  className="hover:underline"
                  href={"/main-page/contact-me"}
                >
                  contact me
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="projects">
              <AccordionTrigger>projects</AccordionTrigger>
              <AccordionContent>project #1</AccordionContent>
              <AccordionContent>project #2</AccordionContent>
              <AccordionContent>project #3</AccordionContent>
              <AccordionContent>project #4</AccordionContent>
            </AccordionItem>
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
