import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <>
      <main className="flex h-full min-h-[90vh] w-full gap-3">
        <article className="w-full rounded-lg bg-white p-4 text-end shadow-md">
          <h1 className="h1">contact me</h1>
          <p className="p">
            Interested in working together? We should queue up a time to chat.
            I&apos;ll buy the coffee.
          </p>
        </article>

        <aside className="flex w-fit flex-col items-end justify-end gap-2 rounded-lg bg-white px-4 py-10 shadow-md">
          <Button size="free" variant="link" className="font-thin">
            email
          </Button>
          <Button size="free" variant="link" className="font-thin">
            telegram
          </Button>
          <Button size="free" variant="link" className="font-thin">
            whatsapp
          </Button>
        </aside>
      </main>
    </>
  );
}
