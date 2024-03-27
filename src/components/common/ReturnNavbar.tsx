import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeftFromLine } from "lucide-react";

type ReturnNavbar = {
  href?: string;
  displayText?: string;
};

export default function ReturnNavbar({ href, displayText }: ReturnNavbar) {
  return (
    <div className="bg-neutral-200 p-3">
      <Link href={href ?? "/"} className="flex items-center gap-2">
        <Button variant="ghost" className="bg-neutral-300">
          <ArrowLeftFromLine className="mr-2 h-5 w-5" />
          {displayText ?? "Back"}
        </Button>
      </Link>
    </div>
  );
}
