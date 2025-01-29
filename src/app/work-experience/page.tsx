"use client";

import { motion } from "framer-motion";
import { CalendarRange, MapPin } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type Section, WORK_DETAILS } from "./work-data";

const WorkSection = ({
  section,
  index,
  sectionRef,
}: {
  section: Section;
  index: number;
  sectionRef: (el: HTMLElement | null) => void;
}) => (
  <motion.section
    key={section.title}
    id={section.title}
    ref={sectionRef}
    className={`${section.className} ${
      index !== WORK_DETAILS.length - 1 && "mb-3"
    } min-h-[85vh] rounded-r-md border-l-4 bg-white p-4 shadow-md dark:bg-neutral-700`}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: false, amount: 0.1 }}
  >
    <div className="grid grid-cols-2">
      <h2 className="h3">{section.title}</h2>
      <div className="row-span-2 flex h-14 w-auto justify-end">
        <Image
          src={section.logo}
          alt={`${section.companyOrganization} logo`}
          width={1600}
          height={1600}
          className="object-contain object-right"
          priority={index < 2}
        />
      </div>
      <h3 className="h4">@ {section.companyOrganization}</h3>
    </div>
    <div className="p flex flex-col gap-1 pb-3">
      <div className="flex items-center gap-1">
        <CalendarRange className="h-4 w-4" aria-hidden="true" />
        <time dateTime={section.duration}>{section.duration}</time>
      </div>
      <div className="flex items-center gap-1">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        <p>{section.location}</p>
      </div>
    </div>
    <div className="flex flex-col sm:gap-3">
      {section.image && (
        <Image
          src={section.image}
          alt={`${section.title} at ${section.companyOrganization}`}
          className="h-auto w-full rounded-md object-cover shadow-md"
          width={800}
          height={800}
          priority={index === 0}
        />
      )}
      {section.detail}
    </div>
    <div className="flex flex-wrap gap-1.5 pt-3">
      {section.tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  </motion.section>
);

export default function WorkExperiencePage() {
  const [activeSection, setActiveSection] = useState<string>(
    WORK_DETAILS[0]?.title ?? "",
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });
    const currentRefs = sectionRefs.current;

    currentRefs.forEach((ref) => ref && observer.observe(ref));
    return () => currentRefs.forEach((ref) => ref && observer.unobserve(ref));
  }, [observerCallback]);

  return (
    <main className="flex flex-row gap-3">
      <nav className="hidden min-w-52 flex-col items-start rounded-md bg-white p-4 shadow-md dark:bg-neutral-900 xl:flex">
        <h2 className="pt-10 underline underline-offset-2">work experience</h2>
        {WORK_DETAILS.map((section) => (
          <Button
            key={section.title}
            variant="free"
            size="free"
            className="underline-animation-light rounded-none py-1 font-thin"
          >
            <a
              href={`#${section.title}`}
              className={`flex items-center text-wrap text-start ${
                activeSection === section.title && "font-normal"
              }`}
            >
              {section.companyOrganization}
            </a>
          </Button>
        ))}
      </nav>

      <ScrollArea>
        <h1 className="h1">work experience</h1>
        {WORK_DETAILS.map((section, index) => (
          <WorkSection
            key={section.title}
            section={section}
            index={index}
            sectionRef={(el) => {
              sectionRefs.current[index] = el;
            }}
          />
        ))}
      </ScrollArea>
    </main>
  );
}
