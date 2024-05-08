import Image from "next/image";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { RocketIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { PROJECT_DETAILS } from "~/data/WorkDetails";
import ErrorPage from "~/components/common/ErrorPage";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";
import ProjectSocialButton from "~/components/common/ProjectSocialButton";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const project = useMemo(
    () => PROJECT_DETAILS.find((project) => project.link === `/work/${id}`),
    [id]
  );

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <SubpageLayout>
      <TitleContainer>{project.title}</TitleContainer>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} className="px-2 py-1 capitalize" variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <ProjectSocialButton href={project.projectSocialLink} />
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>{project.description}</AlertDescription>
      </Alert>
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={800}
        height={800}
        className="w-full shadow-md"
      />
      {project.children}
    </SubpageLayout>
  );
}
