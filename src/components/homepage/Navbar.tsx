const NAVBAR_COMPONENT_DETAILS = [
    {
        name: "HOME",
        href: ""
    },
    {
        name: "EXPERTISE",
        href: ""
    },
    {
        name: "WORK",
        href: ""
    },
    {
        name: "EXPERIENCE",
        href: ""
    },
    {
        name: "CONTACT",
        href: ""
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
        <div className="flex justify-center font-semibold text-sm">
            {NAVBAR_COMPONENT_DETAILS.map((componentDetails, i) => (
                <>
                    <NavbarComponent key={i} {...componentDetails} />

                    <p>-</p>
                </>
            ))}
        </div>
    )
}