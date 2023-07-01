const NAVBAR_COMPONENT_DETAILS = [
    {
        name: "HOME",
        href: "#Home"
    },
    {
        name: "EXPERTISE",
        href: "#Expertise"
    },
    {
        name: "WORK",
        href: "#Work"
    },
    {
        name: "EXPERIENCE",
        href: "#Experience"
    },
    {
        name: "CONTACT",
        href: "#Contact"
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
            className="flex w-36 justify-center"
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