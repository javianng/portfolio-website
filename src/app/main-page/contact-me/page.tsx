import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <>
      <main className="flex h-full min-h-[90vh] w-full gap-3">
        <main className="w-full rounded-lg bg-white p-10 shadow-md">
          <h1 className="h1 text-end">contact me</h1>
        </main>
        <aside className="flex w-fit flex-col justify-end gap-4 rounded-lg bg-white px-4 py-10 shadow-md">
          <Button size="icon">tweet</Button>
          <Button size="icon">tweet</Button>
          <Button size="icon">tweet</Button>
          <Button size="icon">tweet</Button>
          <Button size="icon">tweet</Button>
          <Button size="icon">tweet</Button>
        </aside>
      </main>
    </>
  );
}
