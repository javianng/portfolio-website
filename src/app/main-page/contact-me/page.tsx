import { MessageCircleQuestion } from "lucide-react";
import { ContactForm } from "~/components/contact-form";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-start justify-start bg-white p-4 text-justify dark:bg-neutral-900">
        <div className="flex w-full flex-col sm:w-5/6 md:w-3/5">
          <h1 className="h1" id="contact me">
            contact me
          </h1>
          <Alert>
            <MessageCircleQuestion size={20} />
            <AlertTitle> interested in working together? </AlertTitle>
            <AlertDescription>
              we should queue up a time to chat.
            </AlertDescription>
          </Alert>
          <p className="p"></p>
        </div>
        <section className="w-full border-l-2 pl-5 sm:w-5/6 md:w-3/5">
          <ContactForm />
        </section>
      </main>
    </ScrollArea>
  );
}
