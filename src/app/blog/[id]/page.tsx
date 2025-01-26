import parse from "html-react-parser";
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

// Helper function to create a clean description from HTML content
function createMetaDescription(htmlContent: string): string {
  // Remove HTML tags and get first 155 characters
  return htmlContent
    .replace(/<[^>]*>/g, "")
    .slice(0, 155)
    .trim();
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  try {
    const post = await fetchPostById(params.id);
    if (!post) return { title: "Post Not Found" };

    const description = createMetaDescription(post.content);

    return {
      title: post.title,
      description,
      openGraph: {
        title: post.title,
        description,
        type: "article",
        publishedTime: post.published,
        tags: post.labels,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return { title: "Error Loading Post" };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  let post: Post | null = null;

  try {
    post = await fetchPostById(params.id);
  } catch (error) {
    console.error("Failed to fetch post:", error);
    throw error;
  }

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.published);
  const formattedDate = publishDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ScrollArea className="w-full rounded-md bg-white shadow-md dark:bg-neutral-700">
      <main className="mx-auto flex h-[90vh] max-w-4xl flex-col gap-4 p-6">
        <nav aria-label="Breadcrumb navigation">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  href="/blog"
                  className="hover:underline"
                  aria-label="Back to all blogs"
                >
                  all blogs
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <header className="mb-6 border-b pb-4">
            <h1 className="h1 mb-3">{post.title}</h1>
            <time
              dateTime={post.published}
              className="block border-l py-1 pl-3 text-sm text-neutral-600 dark:text-neutral-300"
            >
              published on {formattedDate}
            </time>
          </header>

          {post.labels && post.labels.length > 0 && (
            <div
              className="mb-8 flex flex-wrap gap-2"
              role="list"
              aria-label="Post categories"
            >
              {post.labels.map((label) => (
                <Badge
                  key={label}
                  role="listitem"
                  variant="secondary"
                  className="text-sm"
                >
                  {label}
                </Badge>
              ))}
            </div>
          )}

          <div className="nested-style pb-16">{parse(post.content)}</div>
        </article>
      </main>
    </ScrollArea>
  );
}
