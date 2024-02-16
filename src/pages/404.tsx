import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-brand-300">
      <Link href="/">
        <div
          className="alert alert-error w-fit bg-brand-100 text-brand-300 shadow-xl
                transition duration-150 hover:bg-brand-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Error 404! Page not found. <br /> Return to Home?
          </span>
        </div>
      </Link>
    </div>
  );
}
