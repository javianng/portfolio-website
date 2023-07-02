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

const NavbarComponent = ({ name, href }: NavbarComponentProps) => {
    return (
        <a
            href={href}
            className="flex w-36 justify-center uppercase"
        >
            {name}
        </a>
    )
}

export default function Navbar() {
    return (
        <>
            <header className="flex justify-center font-semibold text-sm sticky z-50 top-5 h-10">
                {NAVBAR_COMPONENT_DETAILS.map((componentDetails, i) => (
                    <>
                        <NavbarComponent key={i} {...componentDetails} />
                    </>
                ))}
            </header>
        </>
    )
}