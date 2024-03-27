import { Flame } from "lucide-react";
import PageContainer from "../common/PageContainer";

export default function StartAProject() {
  return (
    <PageContainer>
      <div className="h-28 sm:h-14">
        <div className="rounded-md bg-brand-100 py-8 shadow-md sm:py-14">
          <div className="mx-8 sm:mx-0">
            <div className="grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-3 sm:gap-0">
              <p className="text-2xl font-bold">Start a project</p>
              <p>
                Interested in working together? We should queue up a time to
                chat. I&apos;ll buy the coffee.
              </p>
              <a
                href="mailto:javian.ng.z.h@gmail.com"
                className="group flex rounded-md bg-slate-100 p-4 shadow-md transition hover:bg-red-100"
              >
                <Flame className="group h-6 pr-1 transition ease-in-out group-hover:text-red-400" />
                <p>Let&apos;s do this!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
