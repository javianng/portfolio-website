import Link from "next/link";
import { House } from "lucide-react";
import { Button } from "~/components/ui/button";

const NotFoundPage = () => {
  return (
    <main>
      <h1 className="h1">error 404</h1>
      <h2 className="h2">page not found</h2>
      <p className="p">oops! the page you are looking for does not exist.</p>
      <Button variant="link" size="free">
        <Link href="/main-page" className="flex items-center gap-1 pt-5">
          <House size={16} />
          <p>head back to main page?</p>
        </Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;
