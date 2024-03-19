import Link from "next/link";
import Image from "next/image";
import Github from "/public/logos/Github.svg";
import { Button } from "../ui/button";

type ButtonProp = {
  href?: string;
};

export default function GithubButton({ href }: ButtonProp) {
  return (
    <Link href={href ?? "/"} className="flex items-center gap-2">
      <Button>
        <Image
          src={Github as string}
          alt={"Github"}
          className="h-7 w-7 rounded-md bg-white"
        />
        Explore in Github
      </Button>
    </Link>
  );
}
