import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import Github from "/public/logos/github.svg";
import Kaggle from "/public/logos/kaggle.svg";

type ButtonProp = {
  href?: string;
};

const ProjectSocialButton: React.FC<ButtonProp> = ({ href = "/" }) => {
  const isGithub = href.includes("github.com");
  const isKaggle = href.includes("kaggle.com");
  const logo = isGithub ? Github : isKaggle ? Kaggle : null;
  const altText = isGithub ? "Github" : "Kaggle";
  const buttonText = isGithub ? "Explore in Github" : "Explore in Kaggle";

  if (!logo) return null;

  return (
    <Link href={href} className="flex items-center gap-2">
      <Button variant={"ghost"} className="hover:bg-neutral-300">
        <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-md bg-white">
          <Image src={logo as string} alt={altText} className="h-6 w-6" />
        </div>
        {buttonText}
      </Button>
    </Link>
  );
};

ProjectSocialButton.propTypes = {
  href: PropTypes.string,
};

export default ProjectSocialButton;
