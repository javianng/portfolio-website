import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "~/components/ui/badge";
import NextButton from "../../common/NextButton";
import { useInView } from "react-intersection-observer";
import PageContainer from "~/components/common/PageContainer";
import TitleContainer from "~/components/common/TitleContainer";
import {
  EXPERIENCE_DETAILS,
  EXPERIENCE_DETAILS_TYPE,
} from "./ExperienceDetails";

function Card({
  title,
  companyOrganization,
  duration,
  className,
  location,
  detail,
  tags,
  logo,
  image,
}: EXPERIENCE_DETAILS_TYPE) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
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
        className={`rounded-md shadow-md transition duration-150 hover:scale-105 hover:shadow-lg ${className}`}
      >
        <div className="p-4 lg:p-9">
          <div className="flex flex-col gap-9 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Image
                src={image}
                alt={companyOrganization}
                className="h-full rounded-md object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pb-5">{logo}</div>
              <h3 className="pb-2 text-xl font-bold">{title}</h3>
              <h4 className="font-semibold">
                {companyOrganization} | {duration}
              </h4>
              <div className="flex items-center pb-4 font-semibold">
                <MapPin className="h-4 w-4 pr-1" />
                <h4> {location} </h4>
              </div>
              <div className="pb-6">{detail}</div>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, i) => (
                  <Badge key={i} className="bg-neutral-800 px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
      <div className="flex justify-center text-center">
        <TitleContainer id="Experience">
          Professional
          <br />
          Experience
        </TitleContainer>
      </div>
      <PageContainer>
        <div className="flex flex-col gap-8">
          {EXPERIENCE_DETAILS.map((cardDetails, i) => (
            <Card {...cardDetails} key={i} />
          ))}
        </div>
        <NextButton url="#Testimonials" />
      </PageContainer>
    </>
  );
}
