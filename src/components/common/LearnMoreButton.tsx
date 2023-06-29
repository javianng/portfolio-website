import Link from "next/link";

type LearnMoreButtonProp = {
    onclicklocation?: string;
};

export default function LearnMoreButton({ onclicklocation }: LearnMoreButtonProp) {
    return (
        <Link href={onclicklocation ?? ""}>
            <button
                className="bg-slate-500 hover:bg-slate-700 text-white py-1 mt-2 px-4 rounded-lg"
            >
                Learn More
            </button>
        </Link>
    )
}