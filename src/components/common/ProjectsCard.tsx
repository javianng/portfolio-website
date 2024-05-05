import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

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
      <Card className="w-80 duration-200 group-hover:bg-brand-50 dark:border-2 dark:border-brand-50 dark:bg-transparent dark:group-hover:bg-brand-200">
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-40 overflow-hidden">
            <Image
              src={thumbnail ?? ""}
              alt={""}
              width={400}
              height={400}
              className="object-cover duration-300  group-hover:scale-110"
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
