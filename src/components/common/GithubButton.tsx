import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Github from "/public/logos/Github.svg";
import { Button } from "../ui/button";

type ButtonProp = {
  href?: string;
};

const GithubButton: React.FC<ButtonProp> = ({ href = "/" }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Button>
        <Image
          src={Github as string}
          alt={"Github"}
          className="mr-2 h-7 w-7 rounded-md bg-white"
        />
        Explore in Github
      </Button>
    </Link>
  );
};

GithubButton.propTypes = {
  href: PropTypes.string,
};

export default GithubButton;
