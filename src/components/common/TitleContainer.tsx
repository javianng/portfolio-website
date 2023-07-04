import { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
    id: string;
};

export default function TitleContainer(props: TitleProps) {
    return (
        <h1
            className="font-bold pb-9 text-6xl sm:text-8xl"
            id={props.id}
        >
            {props.children}
        </h1>
    )
}