import { ArrowDownIcon } from '@heroicons/react/24/outline'

type NextButtonType = {
    url: string;
};

export default function NextButton({ url }: NextButtonType) {
    return (
        <button
            type="button"
            className="flex justify-center items-center
                    animate-bounce"
        >
            <ArrowDownIcon className="w-7 animate-pulse" />
        </button >
    )
}