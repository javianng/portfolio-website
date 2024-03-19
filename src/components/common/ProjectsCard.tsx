import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
};

export default function ProjectCard({
  title,
  thumbnail,
  link,
  description,
}: ProjectCardProp) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-40 overflow-hidden">
          <Image src={thumbnail ?? ""} alt={""} width={400} height={400} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={link ?? ""}>
          <Button>View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
