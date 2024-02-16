import Image from "next/image";
import Button from "./Button";
import type { StaticImageData } from "next/image";

type ProjectCardProp = {
  title: string;
  image: string | StaticImageData;
  description: string;
  href?: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  href,
}: ProjectCardProp) {
  return (
    <div
      className="group card image-full h-fit bg-black 
                shadow-xl"
    >
      <figure>
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="aspect-square object-contain
                    transition duration-700 ease-in-out group-hover:scale-125 group-hover:opacity-25"
        />
      </figure>
      <div className="card-body">
        <div>
          <h1 className="my-2 line-clamp-1 overflow-hidden text-ellipsis break-all py-1 text-center text-lg font-bold underline decoration-4 underline-offset-8">
            {title}
          </h1>
        </div>
        <div className="h-36">
          <p className="line-clamp-5">{description}</p>
        </div>
        <div className="card-actions justify-end">
          <Button displayText="Learn More" href={href} />
        </div>
      </div>
    </div>
  );
}
