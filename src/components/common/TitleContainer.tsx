import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  id?: string;
};

export default function TitleContainer(props: TitleProps) {
  return (
    <h1
      className="overflow-clip pb-9 text-5xl font-bold sm:text-8xl"
      id={props.id ?? ""}
    >
      {props.children}
    </h1>
  );
}
