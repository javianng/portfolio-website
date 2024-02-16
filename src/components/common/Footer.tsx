import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-brand-300 pb-12 pt-44 text-white sm:pb-32">
      <div>
        <CodeBracketIcon className="w-14 transition ease-in-out hover:text-brand-100" />
        <p className="pt-9 text-lg font-thin">
          Don&apos;t watch the clock; do what it does. Keep coding, living and
          killing it one tick at a time
        </p>
      </div>

      <div>
        <div className="grid grid-flow-col gap-5 pb-5">
          <div className="tooltip" data-tip="twitter">
            <SocialIcon
              url="https://twitter.com/j_avianzz"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="tooltip" data-tip="linkedin">
            <SocialIcon
              url="https://www.linkedin.com/in/javianngzh/"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="tooltip" data-tip="github">
            <SocialIcon
              url="https://github.com/javianng"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="tooltip" data-tip="email me!">
            <SocialIcon
              url="mailto:javian.ng.z.h@gmail.com"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="tooltip" data-tip="telegram">
            <SocialIcon
              url="https://t.me/javianng"
              className="rounded-full bg-white hover:animate-bounce"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="tooltip" data-tip="my resume">
            <a
              href="/resume.pdf"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-slate-600 hover:animate-bounce"
            >
              <DocumentTextIcon className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        <p className="font-thin">Handcrafted by me &#169; twentytwentythree</p>
      </div>
    </footer>
  );
}
