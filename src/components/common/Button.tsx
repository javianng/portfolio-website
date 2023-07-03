import { ArrowDownIcon } from '@heroicons/react/24/outline'

type NextButtonType = {
    url: string;
};

export default function NextButton({ url }: NextButtonType) {
    return (
        <div className='flex justify-center'>
            <a
                type="button"
                className="flex justify-center items-center mt-5 h-[10vh]
                    animate-bounce w-fit"
                href={url}
            >
                <ArrowDownIcon className="w-7 animate-pulse" />
            </a >
        </div>
    )
}