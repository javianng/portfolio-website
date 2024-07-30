import Link from "next/link";
import { Link2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type Project, PROJECT_DATA } from "../project-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export async function generateStaticParams() {
  return PROJECT_DATA.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: { slug: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params;

  const project = PROJECT_DATA.find(
    (project: Project) => project.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <ScrollArea className="w-full rounded-md bg-white shadow-md dark:bg-neutral-700">
      <main className="flex h-full min-h-[90vh] flex-col gap-2 p-4">
        {/* breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/main-page">home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/main-page/projects">projects</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* title */}
        <h1 className="h1">{project.title}</h1>
        {/* details */}

        <blockquote className="blockquote">{project.description}</blockquote>

        <div className="flex flex-wrap gap-1 py-3">
          {project.tags.map((tag, index) => (
            <Badge variant="outline" key={index}>
              {tag}
            </Badge>
          ))}
        </div>

        <Link href={project.projectlink}>
          <Button
            size="free"
            variant="link"
            className="flex items-center gap-1"
          >
            <Link2 size={20} className="pt-0.5" />
            <p>project link</p>
          </Button>
        </Link>

        {/* content */}
        {project.content}
      </main>
    </ScrollArea>
  );
};

export default ProjectPage;
