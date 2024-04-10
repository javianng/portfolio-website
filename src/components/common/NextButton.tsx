import { lazy, Suspense } from "react";
const ArrowDown = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.ArrowDown }))
);

type NextButtonType = {
  url: string;
};

export default function NextButton({ url }: NextButtonType) {
  return (
    <div className="flex justify-center">
      <a
        className="mt-5 flex h-[10vh] w-fit animate-bounce items-center justify-center"
        href={url}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ArrowDown className="w-7 animate-pulse dark:text-brand-50" />
        </Suspense>
      </a>
    </div>
  );
}
