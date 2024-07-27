import Image from "next/image";
import { CalendarRange, MapPin } from "lucide-react";

import { ScrollArea } from "~/components/ui/scroll-area";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-lg shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-end justify-start text-balance bg-white p-4 text-end">
        <h1 className="h1 text-end">work experience</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="justify-end gap-5">
              <div>Data Scientist Intern @ Parametriks aug 2024 - jan 2025</div>
            </AccordionTrigger>
            <AccordionContent>
              <AspectRatio ratio={16 / 9} className="flex bg-slate-500">
                <Image
                  src={"/profilephoto.jpg"}
                  alt={""}
                  width={1600}
                  height={1600}
                  className="object-contain object-right"
                />
              </AspectRatio>
            </AccordionContent>
            <AccordionContent className="flex items-center gap-1 text-neutral-600">
              <MapPin size={16} />
              singapore
              <CalendarRange size={16} />
              date date - date date
            </AccordionContent>
            <AccordionContent className="flex items-center gap-1 text-neutral-600"></AccordionContent>
            <AccordionContent className="flex items-center gap-1 text-neutral-600">
              asdsda
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </ScrollArea>
  );
}
