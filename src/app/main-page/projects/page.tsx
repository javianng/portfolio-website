"use client";

import Link from "next/link";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type ProjectGrid, PROJECT_DATA_GRID } from "./project-data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

export default function Page() {
  const firstSixProjects = PROJECT_DATA_GRID.slice(0, 6);

  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="grid-cols-1bg-white grid h-full min-h-[90vh] md:grid-cols-2 lg:grid-cols-3">
        {firstSixProjects.map((project: ProjectGrid) => (
          <Link
            href={`/main-page/projects/${project.slug}`}
            key={project.slug}
            className="h-fit"
          >
            <Card className="aspect-square w-full rounded-none">
              <figure
                className="aspect-square w-full rounded-none bg-cover bg-center transition-all duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${project.main_image})`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundImage =
                    `url(${project.hover_image})`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundImage =
                    `url(${project.main_image})`;
                }}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 h-16">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </main>
    </ScrollArea>
  );
}
