import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

type ReturnNavbar = {
    href?: string;
}

export default function ReturnNavbar({ href }: ReturnNavbar) {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <Link href={href ?? "/"}>
                    <label tabIndex={0} className="btn btn-ghost">
                        <ArrowLeftIcon className='w-5 h-5' />
                        Back
                    </label>
                </Link>
            </div>
        </div>
    )
}