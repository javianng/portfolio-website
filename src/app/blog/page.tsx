"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { fetchPosts, type Post } from "~/lib/fetchPosts";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="h-full min-h-[90vh] bg-white dark:bg-neutral-900">
        <h1 className="h1 p-4 text-end">the clueless developer</h1>
        <h2 className="pr-4 text-end font-thin">
          just some of the things i am passionate about
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 pt-8"
        >
          {posts.map((post) => (
            <motion.div variants={itemVariantsBotton} key={post.id}>
              <Link href={`/blog/${post.id}`} className="group">
                <Card className="w-full rounded-none dark:bg-neutral-700">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      Published on{" "}
                      {new Date(post.published).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      className="line-clamp-5 border-l pl-3"
                    />
                  </CardContent>
                  <CardFooter>
                    <ChevronRight className="duration-300 group-hover:translate-x-3" />
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </ScrollArea>
  );
}
