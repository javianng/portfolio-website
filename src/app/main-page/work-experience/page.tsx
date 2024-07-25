import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Page() {
  return (
    <>
      <h1 className="h1 text-end">work experience</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>job 1</AccordionTrigger>
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
    </>
  );
}
