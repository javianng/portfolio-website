import { CodeXml, FileText } from "lucide-react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 bg-brand-300 pb-12 pt-44 text-white sm:pb-32 dark:bg-neutral-900">
      <CodeXml className="h-14 w-14 transition ease-in-out hover:text-brand-100" />
      <p className="pt-9 text-center text-lg font-thin">
        Don&apos;t watch the clock; do what it does. Keep coding, living and
        killing it one tick at a time
      </p>
      <div>
        <div className="grid grid-flow-col gap-5">
          <div data-tip="twitter">
            <SocialIcon
              url="https://twitter.com/j_avianzz"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div data-tip="linkedin">
            <SocialIcon
              url="https://www.linkedin.com/in/javianngzh/"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div data-tip="github">
            <SocialIcon
              url="https://github.com/javianng"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div data-tip="email me!">
            <SocialIcon
              url="mailto:javian.ng.z.h@gmail.com"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div data-tip="telegram">
            <SocialIcon
              url="https://t.me/javianng"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div data-tip="my resume">
            <a
              href="/resume.pdf"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-neutral-600 hover:animate-bounce"
            >
              <FileText className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <p className="font-thin">Handcrafted by me &#169; twentytwentythree</p>
    </footer>
  );
}
