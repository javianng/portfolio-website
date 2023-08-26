import Link from "next/link";
import Image from "next/image";
import Kaggle from "src/assets/logos/Kaggle.svg";

type ButtonProp = {
    href?: string;
}

export default function KaggleButton({ href }: ButtonProp) {
    return (
        <div>
            <Link href={href ?? "/"}>
                <button className="btn bg-transparent btn-outline">
                    <div className="h-7 w-7 bg-white flex items-center justify-center rounded-md">
                        <Image src={Kaggle as string} alt={"Kaggle"} className="h-6 w-6" />
                    </div>
                    Explore in Kaggle
                </button>
            </Link>
        </div>
    )
}