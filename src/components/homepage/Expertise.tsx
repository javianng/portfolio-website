import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageContainer from "~/components/common/PageContainer";
import TitleContainer from "~/components/common/TitleContainer";
import {
  EXPERTISE_COMPONENT_DETAILS,
  EXPERTISE_COMPONENT_DETAILS_TYPE,
  TECH_STACK_DETAILS,
  TECH_STACK_DETAILS_TYPE,
} from "../../data/ExpertiseDetails";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export default function Expertise() {
  return (
    <PageContainer>
      <TitleContainer id="Expertise" className="text-center">
        My Expertise
      </TitleContainer>
      <section className="grid grid-cols-1 gap-4">
        {EXPERTISE_COMPONENT_DETAILS.map((componentDetails, i) => (
          <ExpertiseComponent key={i} {...componentDetails} />
        ))}
      </section>
    </PageContainer>
  );
}

function TechStackIcon({
  name,
  logo,
  description,
  website,
  isDetailedView,
}: TECH_STACK_DETAILS_TYPE & { isDetailedView: boolean }) {
  return isDetailedView ? (
    <Link
      href={String(website)}
      target="_blank"
      rel="noopener noreferrer"
      className={`grid w-full grid-cols-4 items-center gap-3 px-4 sm:grid-cols-5 ${
        isDetailedView
          ? "duration-200 hover:bg-brand-100 dark:hover:bg-brand-300"
          : ""
      }`}
    >
      <p className="font-bold">{name}</p>
      <div
        className={`mx-3 flex h-14 w-14 items-center justify-center  p-2 duration-200   ${
          isDetailedView ? "" : " bg-brand-50 shadow-md hover:bg-brand-100"
        }`}
      >
        <Image
          src={String(logo)}
          alt={String(name)}
          width={40}
          height={40}
          className="h-full w-full"
        />
      </div>
      <p className="col-span-2 sm:col-span-3">{description}</p>
    </Link>
  ) : (
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
                className="h-full w-full"
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

  const [isDetailedView, setIsDetailedView] = useState(false);

  const relevantTechStacks = TECH_STACK_DETAILS.filter((tech) =>
    tech.category.includes(name)
  );

  const handleOnClick = () => {
    setIsDetailedView(!isDetailedView);
  };

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
      onClick={handleOnClick}
    >
      <div className="group border-2 border-brand-300 p-3 tracking-tight transition delay-75 duration-200 ease-in-out hover:bg-brand-50 dark:border-brand-200 dark:hover:bg-neutral-800">
        <div
          className={`flex flex-col gap-6 px-3 py-8 ${
            isDetailedView
              ? "items-start sm:flex-col"
              : "justify-between sm:flex-row"
          }  sm:gap-2`}
        >
          <div
            className={`w-full ${isDetailedView ? "sm:w-full" : "sm:w-[66%]"}`}
          >
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
            className={`grid gap-3 ${
              isDetailedView
                ? "grid-cols-1 pt-4 "
                : "grid-cols-4 place-items-center sm:grid-flow-col sm:grid-rows-3"
            }`}
            style={isDetailedView ? {} : { direction: "rtl" }}
          >
            {relevantTechStacks.map((componentDetails, i) => (
              <TechStackIcon
                key={i}
                {...componentDetails}
                isDetailedView={isDetailedView}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
