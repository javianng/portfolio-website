import { type ReactNode } from "react";

export interface Blog {
  slug: string;
  title: string;
  description: string;
  main_image: string;
  tags: string[];
  content: ReactNode;
}

export const BLOG_DATA: Blog[] = [
  {
    slug: "studygpt",
    title: "StudyGPT",
    description:
      "Helps students study by generating questions and providing feedback.",
    main_image: "/projects/studygpt/cover-studygpt.jpg",
    tags: ["Prompt Engineering", "ChatGPT"],
    content: <p>sads</p>,
  },
];
