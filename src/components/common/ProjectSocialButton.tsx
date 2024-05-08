import Link from "next/link";
import { Button } from "../ui/button";
import Github from "/public/logos/github.svg";
import Kaggle from "/public/logos/kaggle.svg";
import Image, { StaticImageData } from "next/image";

type ButtonProp = {
  href?: string;
};

type SocialPlatform = {
  logo: StaticImageData;
  altText: string;
  buttonText: string;
};

const platforms: Record<string, SocialPlatform> = {
  "github.com": {
    logo: Github,
    altText: "Github",
    buttonText: "Explore in Github",
  },
  "kaggle.com": {
    logo: Kaggle,
    altText: "Kaggle",
    buttonText: "Explore in Kaggle",
  },
};

export default function ProjectSocialButton({ href = "/" }: ButtonProp) {
  const platform = Object.entries(platforms).find(([domain]) =>
    href.includes(domain)
  )?.[1];

  if (!platform) return null;

  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className="flex items-center gap-2 hover:bg-neutral-300"
      >
        <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-md bg-white">
          <Image
            src={platform.logo}
            alt={platform.altText}
            className="h-6 w-6"
          />
        </div>
        {platform.buttonText}
      </Button>
    </Link>
  );
}
