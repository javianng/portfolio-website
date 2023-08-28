import Link from "next/link";

export default function Page() {
    return (
        <div className="h-screen bg-brand-300 flex justify-center items-center">
            <Link href="/">
                <div className="alert alert-error w-fit bg-brand-100 text-brand-300 shadow-xl
                hover:bg-brand-50 transition duration-150"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error 404! Page not found. <br /> Return to Home?</span>
                </div>
            </Link>
        </div>
    )
}