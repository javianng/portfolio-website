import { notFound } from "next/navigation";
import { type Blog, BLOG_DATA } from "../blog-data";

export async function generateStaticParams() {
  return BLOG_DATA.map((blog) => ({
    slug: blog.slug,
  }));
}

interface ProjectPageProps {
  params: { slug: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params;

  const blog = BLOG_DATA.find((blog: Blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      {/* title */}
      <h1 className="h1">{blog.title}</h1>
      {/* details */}
    </div>
  );
};

export default ProjectPage;
