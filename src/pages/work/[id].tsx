import Link from "next/link";
import { useRouter } from "next/router";
import { RocketIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import SubpageLayout from "~/components/common/SubpageLayout";
import TitleContainer from "~/components/common/TitleContainer";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { PROJECT_DETAILS } from "~/components/homepage/Work/WorkDetailsV2";
import ProjectSocialButton from "~/components/common/ProjectSocialButton";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const project = PROJECT_DETAILS.find(
    (project) => project.link === `/work/${id}`
  );

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-brand-300">
        <Link href="/">
          <div className="flex w-fit items-center gap-3 rounded-md bg-brand-100 p-4 text-brand-300 shadow-md transition duration-150 hover:bg-brand-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Error 404! Page not found. <br /> Return to Home?
            </span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <SubpageLayout href="/work">
      <TitleContainer>{project.title}</TitleContainer>
      <div className="pb-9">
        <div className="pb-9">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                className="px-2 py-1 capitalize"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <ProjectSocialButton href={project.projectSocialLink} />
      </div>
      <Alert>
        <RocketIcon className="h-5 w-5" />
        <AlertDescription>{project.description}</AlertDescription>
      </Alert>
      {project.children}
    </SubpageLayout>
  );
}
