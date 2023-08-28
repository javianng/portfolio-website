const NAVBAR_COMPONENT_DETAILS = [
    {
        name: "Home",
        href: "#Home"
    },
    {
        name: "About Me",
        href: "#AboutMe"
    },
    {
        name: "Expertise",
        href: "#Expertise"
    },
    {
        name: "Work",
        href: "#Work"
    },
    {
        name: "Experience",
        href: "#Experience"
    },
    {
        name: "Testimonials",
        href: "#Testimonials"
    },
];

type NavbarComponentProps = {
    name: string;
    href: string;
};

function NavbarComponent({ name, href }: NavbarComponentProps) {
    return (
        <li>
            <a
                href={href}
                className="flex w-36 justify-center uppercase"
            >
                {name}
            </a>
        </li>
    )
}

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NAVBAR_COMPONENT_DETAILS.map(({ name, href }: NavbarComponentProps, i) => (
                            <li>
                                <a
                                    href={href}
                                    className="flex w-36 justify-start uppercase"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NAVBAR_COMPONENT_DETAILS.map(({ name, href }: NavbarComponentProps, i) => (
                        <li>
                            <a
                                href={href}
                                className="flex w-36 justify-center uppercase"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end"></div>
        </div>
    )
}