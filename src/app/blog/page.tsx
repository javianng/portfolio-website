"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { containerVariants, itemVariantsBotton } from "~/components/animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Skeleton } from "~/components/ui/skeleton";
import { fetchPosts, type Post } from "~/lib/fetchPosts";

const BlogPostCard = ({ post }: { post: Post }) => {
  const publishDate = new Date(post.published);
  const formattedDate = publishDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group block h-full transition-transform hover:scale-[1.02]"
      aria-label={`Read ${post.title}`}
    >
      <Card className="h-full w-full rounded-none dark:bg-neutral-700">
        <CardHeader className="space-y-2">
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription>published on {formattedDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose-sm prose-neutral dark:prose-invert line-clamp-3 border-l pl-3"
          />
        </CardContent>
        <CardFooter>
          <ChevronRight
            className="text-neutral-600 duration-300 group-hover:translate-x-3 dark:text-neutral-400"
            aria-hidden="true"
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
    {Array.from({ length: 4 }).map((_, i) => (
      <Card
        key={i}
        className="h-[250px] w-full rounded-none dark:bg-neutral-700"
      >
        <CardHeader className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchBlogPosts();
  }, [fetchBlogPosts]);

  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="h-full min-h-[90vh] bg-white dark:bg-neutral-900">
        <header className="border-b p-6 text-center">
          <h1 className="h1 mb-2">the clueless developer</h1>
          <p className="font-light text-neutral-600 dark:text-neutral-400">
            just some of the things i am passionate about
          </p>
        </header>

        {error ? (
          <div
            className="flex min-h-[200px] items-center justify-center p-4 text-red-500"
            role="alert"
          >
            <p className="text-center">{error}</p>
          </div>
        ) : isLoading ? (
          <LoadingSkeleton />
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"
          >
            {posts.map((post) => (
              <motion.div
                variants={itemVariantsBotton}
                key={post.id}
                className="h-full"
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
    </ScrollArea>
  );
}
