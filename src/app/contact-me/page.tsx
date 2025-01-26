import { MessageCircleQuestion } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "~/components/contact-form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { ScrollArea } from "~/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me for work opportunities or collaborations.",
};

export default function ContactPage() {
  return (
    <ScrollArea className="w-full rounded-md shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-start justify-start bg-white p-4 dark:bg-neutral-900">
        <div className="flex w-full flex-col sm:w-5/6 lg:w-3/5">
          <h1 className="h1" id="contact-me">
            contact me
          </h1>
          <Alert className="mt-4">
            <MessageCircleQuestion className="h-5 w-5" />
            <AlertTitle className="ml-2">
              interested in working together?
            </AlertTitle>
            <AlertDescription>
              we should queue up a time to chat.
            </AlertDescription>
          </Alert>
        </div>
        <section className="mt-6 w-full border-l-2 pl-5 sm:w-5/6 lg:w-3/5">
          <ContactForm />
        </section>
      </main>
    </ScrollArea>
  );
}
