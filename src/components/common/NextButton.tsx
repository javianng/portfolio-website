import { ArrowDown } from "lucide-react";

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
        <ArrowDown className="w-7 animate-pulse" />
      </a>
    </div>
  );
}
