import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { ScrollArea } from "~/components/ui/scroll-area";
import { fetchPostById, type Post } from "~/lib/fetchPosts";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await fetchPostById(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read the full post: ${post.title}`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const postId = params.id;
  let post: Post | null = null;

  try {
    post = await fetchPostById(postId);
  } catch (error) {
    console.error(error);
  }

  if (!post) {
    notFound();
  }

  return (
    <ScrollArea className="w-full rounded-md bg-white shadow-md dark:bg-neutral-700">
      <main className="flex h-full min-h-[90vh] flex-col gap-2 p-4">
        {/* breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/blog">all blogs</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* title */}
        <h1 className="h1">{post.title}</h1>

        {/* details */}
        <p className="text-neutral-300` border-l py-1 pl-2 text-sm">
          Published on {new Date(post.published).toLocaleDateString()}
        </p>

        {post.labels && post.labels.length > 0 && (
          <div className="flex flex-wrap gap-1 py-3">
            {post.labels.map((label) => (
              <Badge key={label}>{label}</Badge>
            ))}
          </div>
        )}

        {/* text content */}
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="nested-style max-w-none"
        />
      </main>
    </ScrollArea>
  );
}
