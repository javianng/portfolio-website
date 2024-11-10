export interface Post {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
  url: string;
  labels?: string[]; // Add this line
  // ... other fields
}

const apiKey = "AIzaSyBLzqQrNSBRvW9DN5C4Tfrhz0iHxJuWw1g";
const blogId = "2220154526635563045";

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = (await response.json()) as { items: Post[] };
  return data.items;
}

// Fetch a single post by ID
export async function fetchPostById(postId: string): Promise<Post | null> {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch the post");
  }

  const post = (await res.json()) as Post;
  return post;
}
