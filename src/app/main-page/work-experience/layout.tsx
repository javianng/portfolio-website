import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="flex h-full min-h-[90vh] w-full gap-3">
        <aside className="min-w-60 rounded-lg bg-white p-10 shadow-md">
          <Button className="w-full" variant="outline">
            <Link href={""}>sadasd</Link>
          </Button>
        </aside>
        <main className="w-full rounded-lg bg-white p-10 shadow-md">
          {children}
        </main>
      </main>
    </>
  );
}
