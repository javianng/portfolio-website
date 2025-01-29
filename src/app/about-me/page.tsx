"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { containerVariants, itemVariantsLeft } from "~/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";
import { LIFE_DATA } from "./life-data";
import { SKILLSETS_DATA } from "./skillsets-data";
import { TESTIMONIAL_DATA } from "./testimonial-data";

// Separate components for better organization
const AboutSection = () => (
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
      With over 7 million data points analyzed and automated pipelines boosting
      data accuracy by 250&#37;, I have a track record of impactful solutions.
      As a Machine Learning and Software Engineering Intern at Parametriks, I
      built scalable backends and integrated AWS tools like Bedrock and
      SageMaker, reducing client risks by 30&#37;. My work at the Singapore
      Immunology Network involved developing bioinformatics pipelines critical
      to advancing cancer vaccine research.
    </motion.p>
    <motion.p variants={itemVariantsLeft} className="p">
      Currently pursuing a B.Sc. in Business Analytics at the National
      University of Singapore, I combine technical expertise with leadership as
      President of the NUS Computing Club. My experience spans international
      collaborations and leading high-impact projects.
    </motion.p>
    <motion.p variants={itemVariantsLeft} className="p">
      Outside of work, you&apos;ll find me on the golf course / driving range,
      exploring the engineering marvels of cars, or lost in a good book.
      I&apos;m always up for connecting with like-minded professionals—whether
      for innovative collaborations or simply sharing stories over a cup of
      coffee.
    </motion.p>
    <motion.div variants={itemVariantsLeft} className="pt-6">
      <LifeDialog />
    </motion.div>
  </motion.article>
);

const LifeDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="secondary">learn more</Button>
    </DialogTrigger>
    <DialogContent className="h-[90vh] w-full max-w-[70vw]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Camera size={18} />
          snippets of my life
        </DialogTitle>
        <DialogDescription>
          &quot;The most important thing is to enjoy your life—to be happy -
          it&apos;s all that matters.&quot; - Steve Jobs
        </DialogDescription>
      </DialogHeader>
      <ScrollArea>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {LIFE_DATA.map((item, index) => (
            <figure
              key={index}
              className="flex flex-col bg-neutral-100 dark:bg-neutral-800"
            >
              <div className="overflow-clip">
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  width={600}
                  height={600}
                  className="aspect-square w-fit object-cover duration-200 hover:scale-105"
                />
              </div>
              <figcaption className="p-3">
                <p className="large pb-1">{item.title}</p>
                <p className="small">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

const TestimonialSection = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full pb-10 sm:w-4/5 lg:w-3/5"
  >
    <motion.h2 variants={itemVariantsLeft} className="h2">
      what others say about me
    </motion.h2>
    <motion.div variants={containerVariants} className="grid gap-12 pt-3">
      {TESTIMONIAL_DATA.map(({ image, quote, personel, organisation, alt }) => (
        <motion.div variants={itemVariantsLeft} key={personel}>
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={100}
              height={100}
              alt={alt ?? `${personel} from ${organisation}`}
              className="aspect-square h-16 w-16 rounded-md shadow-md"
            />
            <div className="flex flex-col justify-center">
              <p className="large">{personel}</p>
              <small className="font-light leading-tight">{organisation}</small>
            </div>
          </div>
          <blockquote className="blockquote font-extralight">
            {quote}
          </blockquote>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const SkillsetsSection = () => (
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
);

export default function AboutPage() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-start justify-start bg-white p-4 text-justify dark:bg-neutral-700">
        <AboutSection />
        <TestimonialSection />
        <SkillsetsSection />
      </main>
    </ScrollArea>
  );
}
