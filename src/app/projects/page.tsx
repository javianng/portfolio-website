"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { containerVariants, itemVariantsBotton } from "~/components/animation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type Project, PROJECT_DATA } from "./project-data";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="h-full min-h-[90vh] bg-white dark:bg-neutral-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECT_DATA.map((project: Project) => (
            <motion.div variants={itemVariantsBotton} key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group h-fit">
                <Card className="aspect-square w-full rounded-none dark:bg-neutral-700">
                  <figure className="aspect-square w-full overflow-hidden rounded-none bg-black">
                    <Image
                      src={project.main_image}
                      alt={""}
                      width={800}
                      height={800}
                      className="h-full w-full rounded-none object-cover grayscale duration-200 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </figure>
                  <CardHeader>
                    <CardTitle className="line-clamp-1 h-[1.6rem]">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 h-16">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </ScrollArea>
  );
}
