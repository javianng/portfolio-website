import Link from "next/link";
import Image from "next/image";
import Github from "src/assets/logos/Github.svg";

type ButtonProp = {
    href?: string;
}

export default function GithubButton({ href }: ButtonProp) {
    return (
        <div>
            <Link href={href ?? "/"}>
                <button className="btn bg-transparent btn-outline">
                    <Image src={Github as string} alt={"Github"} className="h-7 w-7 bg-white rounded-md" />
                    Explore in Github
                </button>
            </Link>
        </div>
    )
}