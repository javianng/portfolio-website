import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-lg shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-end justify-start text-balance bg-white p-4 text-end">
        <h1 className="h1 text-end">work experience</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="justify-end gap-5">
              job 1
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src={"/profilephoto.jpg"}
                alt={""}
                width={1600}
                height={1600}
                className="max-w-sm pt-8"
              />
            </AccordionContent>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </ScrollArea>
  );
}
