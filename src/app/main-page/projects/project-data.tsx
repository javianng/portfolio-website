import { type ReactNode } from "react";

export interface ProjectFull {
  slug: string;
  title: string;
  description: string;
  main_image: string;
  tags: string[];
  content: ReactNode;
}

export interface ProjectGrid {
  slug: string;
  title: string;
  description: string;
  main_image: string;
  hover_image: string;
}

export interface ProjectNav {
  slug: string;
  title: string;
}

export const PROJECT_DATA_FULL: ProjectFull[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "This is a description for Project One. Veniam sint excepteur sit et sunt Lorem consectetur ullamco cupidatat ad. Officia aliqua reprehenderit nostrud mollit occaecat veniam et aliqua ipsum voluptate quis et ex cillum. Nisi elit officia cupidatat ut sunt cillum incididunt nostrud. Irure adipisicing adipisicing nostrud commodo in et est duis laborum magna. Magna fugiat minim sint Lorem laborum ex pariatur irure Lorem laborum irure fugiat. Laboris veniam ut mollit consectetur irure consectetur. Ullamco pariatur duis velit labore dolor esse elit cillum veniam mollit. Ipsum nostrud dolor aliquip. Eu cupidatat amet duis cupidatat esse ad eu exercitation qui enim. Laboris voluptate et duis cupidatat amet tempor exercitation reprehenderit. Quis aute laborum amet enim fugiat mollit aliqua ipsum veniam qui nisi consectetur irure aliqua exercitation. Quis occaecat anim velit aute irure nisi deserunt et. Lorem commodo incididunt veniam sint. Esse culpa ad dolore est est cupidatat amet irure est eiusmod occaecat nulla reprehenderit fugiat.",
    main_image: "/test1.jpg",
    tags: ["Next.js", "React", "TailwindCSS"],
    content: "This is some content for Project One.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "This is a description for Project Two.",
    main_image: "/images/project-two-main.jpg",
    tags: ["TypeScript", "Framer Motion"],
    content: "This is some content for Project Two.",
  },
];

export const PROJECT_DATA_GRID: ProjectGrid[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "This is a description for Project One. Veniam sint excepteur sit et sunt Lorem consectetur ullamco cupidatat ad. Officia aliqua reprehenderit nostrud mollit occaecat veniam et aliqua ipsum voluptate quis et ex cillum. Nisi elit officia cupidatat ut sunt cillum incididunt nostrud. Irure adipisicing adipisicing nostrud commodo in et est duis laborum magna. Magna fugiat minim sint Lorem laborum ex pariatur irure Lorem laborum irure fugiat. Laboris veniam ut mollit consectetur irure consectetur. Ullamco pariatur duis velit labore dolor esse elit cillum veniam mollit. Ipsum nostrud dolor aliquip. Eu cupidatat amet duis cupidatat esse ad eu exercitation qui enim. Laboris voluptate et duis cupidatat amet tempor exercitation reprehenderit. Quis aute laborum amet enim fugiat mollit aliqua ipsum veniam qui nisi consectetur irure aliqua exercitation. Quis occaecat anim velit aute irure nisi deserunt et. Lorem commodo incididunt veniam sint. Esse culpa ad dolore est est cupidatat amet irure est eiusmod occaecat nulla reprehenderit fugiat.",
    main_image: "/test1.jpg",
    hover_image: "/test2.jpg",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "This is a description for Project Two.",
    main_image: "/images/project-two-main.jpg",
    hover_image: "/images/project-two-hover.jpg",
  },
];

export const PROJECT_DATA_NAV: ProjectNav[] = [
  {
    slug: "project-one",
    title: "Project One",
  },
  {
    slug: "project-two",
    title: "Project Two",
  },
];
