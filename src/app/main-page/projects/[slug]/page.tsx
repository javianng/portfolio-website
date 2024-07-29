import { notFound } from "next/navigation";
import { type ProjectFull, PROJECT_DATA_FULL } from "../project-data";

export async function generateStaticParams() {
  return PROJECT_DATA_FULL.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: { slug: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params;

  const project = PROJECT_DATA_FULL.find(
    (project: ProjectFull) => project.slug === slug,
  );

  if (!project) {
    notFound(); // This triggers a 404 page
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.main_image} alt={project.title} />
      <p>{project.description}</p>
      <div>{project.content}</div>
    </div>
  );
};

export default ProjectPage;
