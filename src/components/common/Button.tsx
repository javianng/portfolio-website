import Link from "next/link";

type ButtonProp = {
  href?: string;
  displayText?: string;
};

export default function Button({ href, displayText }: ButtonProp) {
  return (
    <div>
      <Link href={href ?? "/"}>
        <button className="btn bg-brand-50">{displayText ?? "Button"}</button>
      </Link>
    </div>
  );
}
