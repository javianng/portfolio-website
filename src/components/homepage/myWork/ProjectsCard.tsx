import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react';

type ProjectCardProp = {
    title: string;
    image: string | StaticImageData;
    description: string;
    color: string;
    id: string;
};

export default function ProjectCard({
    title,
    image,
    description,
    color,
}: ProjectCardProp) {
    return (
        <div
            className="carousel-item card bg-black shadow-xl image-full group 
                max-h-80"
        >
            <figure>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={''}
                    className="rounded-lg object-contain
                    group-hover:scale-125 group-hover:opacity-25 ease-in-out transition duration-700 delay-75"
                />
            </figure>
            <div className="card-body">
                <div>
                    <h1 className={`${color} font-bold text-center underline underline-offset-8 text-lg my-2 py-1 text-ellipsis overflow-hidden line-clamp-1 decoration-4 break-all`}>
                        {title}
                    </h1>
                </div>
                <div className=' h-36'>
                    <p className='line-clamp-5 break-all'>
                        {description}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <label className="btn bg-brand-50">Learn More</label>
                </div>
            </div>
        </div>
    )
}