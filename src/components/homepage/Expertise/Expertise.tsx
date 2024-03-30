import PageContainer from "~/components/common/PageContainer";
import NextButton from "../../common/NextButton";
import TitleContainer from "~/components/common/TitleContainer";
import { EXPERTISE_COMPONENT_DETAILS } from "./ExpertiseDetails";
import type { ReactNode } from "react";

type ExpertiseComponentProps = {
  name: string;
  decorationColor: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  logo: ReactNode;
};

function ExpertiseComponent({
  name,
  decorationColor,
  subtitle,
  description,
  icon,
  logo,
}: ExpertiseComponentProps) {
  return (
    <div
      className={`group border-2 border-brand-300 p-3 tracking-tight transition delay-75 ease-in-out dark:border-brand-200`}
    >
      <div className="flex justify-between px-3 py-8">
        <div>
          <div className="brand flex pb-4 align-top">
            <div className="mr-4">{icon}</div>
            <div>
              <h2
                className={`${decorationColor} mb-1 text-2xl font-bold
                                underline decoration-solid 
                                decoration-4 sm:mb-2
                                sm:text-4xl sm:decoration-8 `}
              >
                {name}
              </h2>
              <h3
                className="text-2xl
                                font-bold sm:text-4xl"
              >
                {subtitle}
              </h3>
            </div>
          </div>
          <div className="flex">
            <div className="grid grid-cols-1">
              <p className="my-[-4px] font-mono text-neutral-300 dark:text-brand-100">
                &lt;h1&gt;
              </p>
              <p className="ml-5 border-l-[1.5px] border-neutral-300 py-3 pl-4 dark:border-brand-100">
                {description}
              </p>
              <p className="my-[-4px] font-mono text-neutral-300 dark:text-brand-100">
                &lt;h1/&gt;
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-3 place-items-center">{logo}</div>
      </div>
    </div>
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
