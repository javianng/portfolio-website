import PropTypes from "prop-types";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeftFromLine } from "lucide-react";

type ReturnNavbarProps = {
  href?: string;
  displayText?: string;
};

const ReturnNavbar: React.FC<ReturnNavbarProps> = ({
  href = "/",
  displayText = "Back",
}) => {
  return (
    <div className="bg-neutral-200 p-3 dark:bg-brand-200">
      <Link href={href} className="flex items-center gap-2">
        <Button variant="ghost" className="bg-neutral-300 dark:bg-brand-300">
          <ArrowLeftFromLine className="mr-2 h-5 w-5" />
          {displayText}
        </Button>
      </Link>
    </div>
  );
};

ReturnNavbar.propTypes = {
  href: PropTypes.string,
  displayText: PropTypes.string,
};

export default ReturnNavbar;
