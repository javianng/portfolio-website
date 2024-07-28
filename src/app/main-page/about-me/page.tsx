"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "~/components/ui/badge";
import { SKILLSETS_DATA } from "./skillsets-data";
import { ScrollArea } from "~/components/ui/scroll-area";
import { containerVariants, itemVariants } from "~/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-end justify-start bg-white p-4 text-justify">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full pb-10 sm:w-4/5 md:w-3/5"
        >
          <motion.h1
            variants={itemVariants}
            className="h1 text-end"
            id="about me"
          >
            about me
          </motion.h1>
          <motion.p variants={itemVariants} className="p">
            I am a <strong>Full-Stack Web Developer</strong> with a robust
            background in <strong>Machine Learning and Data Science</strong>. My
            passion for technology drives me to constantly explore new realms,
            making me a quick learner and highly adaptable professional. I
            thrive on challenges and love turning complex problems into clean,
            user-friendly solutions.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            Currently, I am expanding my expertise through a research data
            science internship focused on cancer research. This opportunity
            allows me to apply my{" "}
            <strong>analytical skills and machine learning knowledge</strong> to
            make meaningful contributions to critical health issues. It&apos;s
            an exhilarating experience that has deepened my understanding of
            bioinformatics and its impact on medical advancements.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            With an entrepreneurial mindset, I have initiated and led various
            projects that bridge the gap between data-driven insights and
            functional web applications. My goal is always to innovate and
            optimize, ensuring that every project not only meets but exceeds
            expectations.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            Whether I&apos;m coding, crunching data, or collaborating on
            breakthrough research, I bring a blend of expertise, dedication, and
            a forward-thinking approach to everything I do. Let&apos;s connect
            and explore how we can create something great together!
          </motion.p>
        </motion.article>

        <motion.section
          initial="hidden"
          animate="visible"
          className="w-full sm:w-3/5"
          variants={containerVariants}
        >
          <motion.h2 className="h2 text-end" variants={itemVariants}>
            skillsets
          </motion.h2>
          <motion.div variants={itemVariants}>
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
