import { CodeXml } from "lucide-react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 bg-brand-300 pb-12 pt-44 text-white sm:pb-32 dark:bg-neutral-900">
      <CodeXml className="h-14 w-14 transition ease-in-out hover:text-brand-100" />
      <p className="pt-9 text-center text-lg font-thin">
        Don&apos;t watch the clock; do what it does. Keep coding, living and
        killing it one tick at a time
      </p>
      <SocialMedia />
      <p className="font-thin">Handcrafted by me &#169; twentytwentythree</p>
    </footer>
  );
}
