import { Flame } from "lucide-react";
import PageContainer from "../common/PageContainer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const EMAIL = "javian.ng.z.h@gmail.com";

const ProjectTitle = () => (
  <p className="text-2xl font-bold">Start a project</p>
);

const ProjectDescription = () => (
  <p>
    Interested in working together? We should queue up a time to chat. I&apos;ll
    buy the coffee.
  </p>
);

const ProjectAction = () => (
  <a
    href={`mailto:${EMAIL}`}
    className={`group flex rounded-md bg-neutral-100 p-4 shadow-md transition hover:bg-red-100 hover:text-brand-300 dark:bg-brand-300`}
  >
    <Flame className="group h-6 pr-1 transition ease-in-out group-hover:text-red-400" />
    <p>Let&apos;s do this!</p>
  </a>
);

export default function StartAProject() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <PageContainer>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { y: 50 },
          visible: { y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-28 sm:h-14">
          <div className="rounded-md bg-brand-100 py-8 shadow-md sm:py-14 dark:bg-brand-200">
            <div className="mx-8 sm:mx-0">
              <div className="grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-3 sm:gap-0">
                <ProjectTitle />
                <ProjectDescription />
                <ProjectAction />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}
