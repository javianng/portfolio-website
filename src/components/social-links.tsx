import Link from "next/link";
import { Button } from "./ui/button";

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

const SOCIAL_DETAILS = [
  {
    website: "https://x.com/j_avianzz",
    websiteName: "X",
    image: "/logos/x.svg",
  },
  {
    website: "mailto:javian.ng.z.h@gmail.com",
    websiteName: "Email",
    image: "/logos/gmail.svg",
  },
  {
    website: "https://www.kaggle.com/javianng",
    websiteName: "Kaggle",
    image: "/logos/kaggle.svg",
  },
  {
    website: "https://github.com/javianng",
    websiteName: "GitHub",
    image: "/logos/github.svg",
  },
  {
    website: "https://medium.com/@javianngzh",
    websiteName: "Medium",
    image: "/logos/medium.svg",
  },
  {
    website: "https://t.me/javianng",
    websiteName: "Telegram",
    image: "/logos/telegram.svg",
  },
  {
    website: "https://www.instagram.com/javian.ng.z.h/",
    websiteName: "Instagram",
    image: "/logos/instagram.svg",
  },
];
