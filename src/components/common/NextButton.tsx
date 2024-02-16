import { ArrowDownIcon } from "@heroicons/react/24/outline";

type NextButtonType = {
  url: string;
};

export default function NextButton({ url }: NextButtonType) {
  return (
    <div className="flex justify-center">
      <a
        type="button"
        className="mt-5 flex h-[10vh] w-fit animate-bounce
                    items-center justify-center"
        href={url}
      >
        <ArrowDownIcon className="w-7 animate-pulse" />
      </a>
    </div>
  );
}
