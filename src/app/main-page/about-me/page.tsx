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
            for as long as i can remember, i&apos;ve loved building things. it
            started with building lego creations and evolved into coding with
            scratch, where i spent weeks perfecting my own fps game while other
            kids my age were busy playing online games such as call of duty.
            fast forward to today, i&apos;ve had the privilege of building
            software for early-stage startups like lfg, as well as for school
            projects and personal endeavours.
          </motion.p>
          <motion.p variants={itemVariantsLeft} className="p">
            i&apos;ve always been drawn to people and the pursuit of knowledge,
            particularly in understanding industry trends and developing soft
            skills. this curiosity sparked my journey of self-discovery, pushing
            me to take on challenging roles — leading clubs, collaborating with
            international developers and spearheading novel initiatives… just a
            year into university, i was already immersed in full-stack
            development. today, my main focus is leveraging the powerful tools
            at my disposal to bridge gaps and solve problems, ultimately
            prioritising what matters most to me — people.
          </motion.p>
          <motion.p variants={itemVariantsLeft} className="p">
            when i&apos;m not building new tools or taking on new commitments,
            you can find me on the golf course, photographing life, or exploring
            life with my partner in crime. whether it&apos;s project
            development, coding or any other interests, i&apos;d love to have a
            chat to see how our passions and dreams can best align to create
            something amazing!
          </motion.p>
          {/* dialog */}
          <motion.div variants={itemVariantsLeft} className="pt-6">
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
                    &quot;The most important thing is to enjoy your life—to be
                    happy - it&apos;s all that matters.&quot; - Steve Jobs
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
                            alt={item.title}
                            width="600"
                            height="600"
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
          </motion.div>
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
                  <div className="flex items-center gap-2">
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={`${personel} from ${organisation}`}
                      className="aspect-square h-16 w-16 rounded-md shadow-md"
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
