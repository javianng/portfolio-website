import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NextButton from "../../common/NextButton";
import { useInView } from "react-intersection-observer";
import PageContainer from "~/components/common/PageContainer";
import TitleContainer from "~/components/common/TitleContainer";
import {
  EXPERTISE_COMPONENT_DETAILS,
  EXPERTISE_COMPONENT_DETAILS_TYPE,
  TECH_STACK_DETAILS,
  TECH_STACK_DETAILS_TYPE,
} from "./ExpertiseDetails";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

function TechStackIcon({
  name,
  logo,
  category,
  description,
  website,
}: TECH_STACK_DETAILS_TYPE) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Link
            href={String(website)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-14 w-14 items-center justify-center bg-brand-50 p-2 shadow-md duration-200 hover:bg-brand-100">
              <Image
                src={String(logo)}
                alt={String(name)}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ExpertiseComponent({
  name,
  subtitle,
  description,
  icon,
}: EXPERTISE_COMPONENT_DETAILS_TYPE) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const relevantTechStacks = TECH_STACK_DETAILS.filter((tech) =>
    tech.category.includes(name)
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`group border-2 border-brand-300 p-3 tracking-tight transition delay-75 ease-in-out dark:border-brand-200`}
      >
        <div className="flex flex-col justify-between gap-6 px-3 py-8 sm:flex-row sm:gap-2">
          <div className="w-full sm:w-[66%]">
            <div className="flex pb-4 align-top">
              <div className="mr-4">{icon}</div>
              <div>
                <h2 className="mb-1 text-2xl font-bold underline decoration-brand-100 decoration-solid decoration-4 sm:mb-2 sm:text-4xl sm:decoration-8">
                  {name}
                </h2>
                <h3 className="text-2xl font-extralight sm:text-4xl">
                  {subtitle}
                </h3>
              </div>
            </div>
            <div className="flex">
              <div className="grid grid-cols-1">
                <p className="my-[-4px] font-mono text-brand-200 dark:text-brand-100">
                  &lt;h1&gt;
                </p>
                <p className="ml-5 border-l-[1.5px] border-brand-200 py-3 pl-4 dark:border-brand-100">
                  {description}
                </p>
                <p className="my-[-4px] font-mono text-brand-200 dark:text-brand-100">
                  &lt;h1/&gt;
                </p>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-4 place-items-center gap-3 sm:grid-flow-col sm:grid-rows-3"
            style={{ direction: "rtl" }}
          >
            {relevantTechStacks.map((componentDetails, i) => (
              <TechStackIcon key={i} {...componentDetails} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <PageContainer>
      <div className="flex justify-center">
        <TitleContainer id="Expertise">My Expertise</TitleContainer>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {EXPERTISE_COMPONENT_DETAILS.map((componentDetails, i) => (
          <ExpertiseComponent key={i} {...componentDetails} />
        ))}
      </div>
      <NextButton url="#Work" />
    </PageContainer>
  );
}
