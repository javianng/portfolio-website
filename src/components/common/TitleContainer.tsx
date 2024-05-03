import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/**
 * TitleContainer is a component that renders the title.
 *
 * @param {ReactNode} children - The content to be displayed within the title.
 * @param {string} id - The optional id for the title element.
 * @param {string} className - The optional className for the title element.
 */

export default function TitleContainer({
  children,
  id = "",
  className = "",
}: TitleProps & { className?: string }) {
  return (
    <h1
      className={`overflow-clip pb-9 text-5xl font-bold sm:text-8xl ${className}`}
      id={id}
    >
      {children}
    </h1>
  );
}
