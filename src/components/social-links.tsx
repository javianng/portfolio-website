import { ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function SocialList() {
  return (
    <div className="flex flex-col items-start">
      {SOCIAL_DETAILS.map(({ website, websiteName }) => (
        <Button
          key={websiteName}
          variant="free"
          size="free"
          className="underline-animation rounded-none py-1 font-thin"
        >
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <p className="lowercase">{websiteName}</p>
          </Link>
        </Button>
      ))}
      <Button
        variant="free"
        size="free"
        className="underline-animation rounded-none py-1 font-thin"
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className="lowercase">resume</p>
        </Link>
      </Button>
    </div>
  );
}

export function SocialIconList() {
  return (
    <div className="flex flex-col items-start gap-2">
      {SOCIAL_DETAILS.map(({ website, websiteName, image }) => (
        <TooltipProvider key={websiteName}>
          <Tooltip>
            <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 ring-offset-white transition-colors hover:bg-neutral-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-50 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800/80 dark:focus-visible:ring-neutral-300">
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src={image}
                  alt={websiteName}
                  width={50}
                  height={50}
                  className="aspect-square h-7 w-7"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{websiteName}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 ring-offset-white transition-colors hover:bg-neutral-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-50 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800/80 dark:focus-visible:ring-neutral-300">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ScrollText className="aspect-square h-7 w-7" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">resume</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const SOCIAL_DETAILS = [
  {
    website: "https://x.com/j_avianzz",
    websiteName: "X",
    image: "/logos/x.png",
  },
  {
    website: "/main-page/contact-me",
    websiteName: "Email",
    image: "/logos/gmail.png",
  },
  {
    website: "https://www.kaggle.com/javianng",
    websiteName: "Kaggle",
    image: "/logos/kaggle.png",
  },
  {
    website: "https://github.com/javianng",
    websiteName: "GitHub",
    image: "/logos/github.png",
  },
  {
    website: "https://medium.com/@javianngzh",
    websiteName: "Medium",
    image: "/logos/medium.png",
  },
  {
    website: "https://t.me/javianng",
    websiteName: "Telegram",
    image: "/logos/telegram.png",
  },
  {
    website: "https://www.instagram.com/javian.ng.z.h/",
    websiteName: "Instagram",
    image: "/logos/instagram.png",
  },
];
