import Link from "next/link";
import { CircleX } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-brand-300">
      <Link href="/">
        <div className="flex w-fit items-center gap-3 rounded-md bg-brand-100 p-4 text-brand-300 shadow-md transition duration-150 hover:bg-brand-50">
          <CircleX />
          <p>
            Error 404! Page not found. <br /> Return to Home?
          </p>
        </div>
      </Link>
    </div>
  );
}
