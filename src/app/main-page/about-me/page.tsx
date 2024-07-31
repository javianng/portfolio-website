"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "~/components/ui/badge";
import { SKILLSETS_DATA } from "./skillsets-data";
import { TESTIMONIAL_DATA } from "./testimonial-data";
import { ScrollArea } from "~/components/ui/scroll-area";
import { containerVariants, itemVariantsLeft } from "~/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-start justify-start bg-white p-4 text-justify dark:bg-neutral-700">
        {/* about me */}
        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full pb-10 sm:w-4/5 lg:w-3/5"
        >
          <motion.h1 variants={itemVariantsLeft} className="h1" id="about me">
            about me
          </motion.h1>
          <motion.p variants={itemVariantsLeft} className="p">
            For as long as I could remember, I love building things. It started
            with building LEGO creations and evolved into coding with Scratch,
            where I spent weeks perfecting my own FPS game while other kids were
            playing Call of Duty. Fast forward to today, I&apos;ve had the
            privilege to build software for early-stage startups like LFG, as
            well as for school projects and personal endeavors.
          </motion.p>
          <motion.p variants={itemVariantsLeft} className="p">
            I&apos;ve always been drawn to people and the pursuit of knowledge,
            particularly in understanding industry trends and developing soft
            skills. This curiosity sparked my journey of self-discovery, pushing
            me to take on challenging roles - leading clubs, collaborating with
            international developers... Just a year into university, I was
            already immersed in full-stack development. Today, my main focus is
            leveraging the powerful tools at my disposal to bridge gaps and
            solve problems, ultimately prioritizing what matters most — the
            people.
          </motion.p>
          <motion.p variants={itemVariantsLeft} className="p">
            When I&apos;m not building new tools or taking on new commitments,
            you can find me on the golf course, photographing life or exploring
            life with my partner in crime. Whether it&apos;s coding or any other
            interest, feel free to reach out to me!
          </motion.p>
        </motion.article>
        {/* testimonial */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full pb-10 sm:w-4/5 lg:w-3/5"
        >
          <motion.h2 variants={itemVariantsLeft} className="h2">
            what others say about me
          </motion.h2>
          <motion.div variants={containerVariants} className="grid gap-3 pt-3">
            {TESTIMONIAL_DATA.map(
              ({ image, quote, personel, organisation }) => (
                <motion.div variants={itemVariantsLeft} key={personel}>
                  <div className="flex gap-2">
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={`${personel} from ${organisation}`}
                      className="aspect-square w-16 rounded-md shadow-md"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="large">{personel}</p>
                      <p className="small">{organisation}</p>
                    </div>
                  </div>
                  <blockquote className="blockquote">{quote}</blockquote>
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.section>
        {/* skillsets */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="w-full pb-10 sm:w-4/5 lg:w-3/5"
          variants={containerVariants}
        >
          <motion.h2 className="h2" variants={itemVariantsLeft}>
            skillsets
          </motion.h2>
          <motion.div variants={itemVariantsLeft}>
            <Accordion type="single" collapsible className="w-full">
              {SKILLSETS_DATA.map(({ category, description, skills }) => (
                <AccordionItem key={category} value={category}>
                  <AccordionTrigger>{category}</AccordionTrigger>
                  <AccordionContent>
                    <p>{description}</p>
                  </AccordionContent>
                  <AccordionContent className="flex flex-wrap gap-2">
                    {skills.map(({ name, link }) => (
                      <Link
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge variant="outline">{name}</Badge>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.section>
      </main>
    </ScrollArea>
  );
}
