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

  const renderBackButton = (
    href: string,
    onClick?: (event: React.MouseEvent) => void
  ) => (
    <Link href={href} onClick={onClick} className="flex items-center gap-2">
      <Button variant="ghost" className="bg-neutral-300 dark:bg-brand-300">
        <ArrowLeftFromLine className="mr-2 h-5 w-5" />
        {displayText}
      </Button>
    </Link>
  );

  const renderMoreProjectsButton = () => (
    <Link href="/work" className="flex items-center gap-2">
      <Button variant="ghost" className="bg-neutral-300 dark:bg-brand-300">
        <Grip className="mr-2 h-5 w-5" />
        More Projects
      </Button>
    </Link>
  );

  return (
    <div className="bg-neutral-200 p-3 dark:bg-brand-200">
      {router.pathname === "/work" ? (
        renderBackButton("/")
      ) : (
        <div className="flex gap-2">
          {renderBackButton("#", goBack)}
          {renderMoreProjectsButton()}
        </div>
      )}
    </div>
  );
}
