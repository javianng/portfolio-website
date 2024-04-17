import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Kaggle from "/public/logos/kaggle.svg";
import { Button } from "../ui/button";

type ButtonProp = {
  href?: string;
};

const KaggleButton: React.FC<ButtonProp> = ({ href = "/" }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Button>
        <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-md bg-white">
          <Image src={Kaggle as string} alt={"Kaggle"} className="h-6 w-6" />
        </div>
        Explore in Kaggle
      </Button>
    </Link>
  );
};

KaggleButton.propTypes = {
  href: PropTypes.string,
};

export default KaggleButton;
