import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import type { StaticImageData } from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { ChevronRight } from "lucide-react";

type ProjectCardProp = {
  title: string;
  thumbnail: string | StaticImageData;
  link?: string;
  description?: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  thumbnail,
  link,
  description,
  tags,
}: ProjectCardProp) {
  return (
    <Link href={link ?? ""} className="group">
      <Card className="w-[350px] duration-200 group-hover:bg-brand-50 dark:border-2 dark:border-brand-50 dark:bg-transparent dark:group-hover:bg-brand-200">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-40 overflow-hidden">
            <Image
              src={thumbnail ?? ""}
              alt={""}
              width={400}
              height={400}
              className="duration-300 group-hover:scale-110"
            />
          </div>
        </CardContent>
        <CardFooter className="flex">
          <ChevronRight className="mr-2 opacity-20 duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          <p className="opacity-20 duration-200 group-hover:opacity-100">
            View
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
