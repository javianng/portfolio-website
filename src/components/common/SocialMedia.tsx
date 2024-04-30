import Link from "next/link";
import { FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {socialMediaProfiles.map((profile, index) => (
        <TooltipProvider key={index}>
          <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>
              <Link
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-transparent bg-brand-50 shadow-md duration-200 hover:border-brand-200">
                  <img
                    src={profile.image}
                    alt={profile.websiteName}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{profile.websiteName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      {/* resume */}

      <TooltipProvider>
        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <Link
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-transparent bg-brand-50 shadow-md duration-200 hover:border-brand-200">
                <FileText className="h-6 w-6 text-black" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>My Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const socialMediaProfiles = [
  {
    website: "https://x.com/j_avianzz",
    websiteName: "X",
    image: "/logos/x.svg",
  },
  {
    website: "https://www.linkedin.com/in/javianngzh/",
    websiteName: "LinkedIn",
    image: "/logos/linkedin.svg",
  },
  {
    website: "https://github.com/javianng",
    websiteName: "GitHub",
    image: "/logos/github.svg",
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
  {
    website: "https://medium.com/@javianngzh",
    websiteName: "Medium",
    image: "/logos/medium.svg",
  },
  {
    website: "https://www.kaggle.com/javianng",
    websiteName: "Kaggle",
    image: "/logos/kaggle.svg",
  },
  {
    website: "mailto:javian.ng.z.h@gmail.com",
    websiteName: "Email",
    image: "/logos/gmail.svg",
  },
];
