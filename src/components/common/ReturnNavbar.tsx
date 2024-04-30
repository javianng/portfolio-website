import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { ArrowLeftFromLine, Grip } from "lucide-react";

export default function ReturnNavbar({
  displayText = "Back",
}: {
  displayText?: string;
}) {
  const router = useRouter();

  const goBack = (event: React.MouseEvent) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="bg-neutral-200 p-3 dark:bg-brand-200">
      {router.pathname === "/work" && (
        <Link href="/" className="flex items-center gap-2">
          <Button variant="ghost" className="bg-neutral-300 dark:bg-brand-300">
            <ArrowLeftFromLine className="mr-2 h-5 w-5" />
            {displayText}
          </Button>
        </Link>
      )}

      {router.pathname !== "/work" && (
        <div className="flex gap-2">
          <Link href="#" onClick={goBack} className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="bg-neutral-300 dark:bg-brand-300"
            >
              <ArrowLeftFromLine className="mr-2 h-5 w-5" />
              {displayText}
            </Button>
          </Link>
          <Link href="/work" className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="bg-neutral-300 dark:bg-brand-300"
            >
              <Grip className="mr-2 h-5 w-5" />
              More Projects
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
