import Image, { StaticImageData } from 'next/image'
import Button from './Button';

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
            className="card bg-black shadow-xl image-full group 
                h-fit"
        >
            <figure>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={''}
                    className="object-contain aspect-square
                    group-hover:scale-125 group-hover:opacity-25 ease-in-out transition duration-700"
                />
            </figure>
            <div className="card-body">
                <div>
                    <h1 className="font-bold text-center underline underline-offset-8 text-lg my-2 py-1 text-ellipsis overflow-hidden line-clamp-1 decoration-4 break-all">
                        {title}
                    </h1>
                </div>
                <div className='h-36'>
                    <p className='line-clamp-5'>
                        {description}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Button displayText='Learn More' href={href} />
                </div>
            </div>
        </div>
    )
}