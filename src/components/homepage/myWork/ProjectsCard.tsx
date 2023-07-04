import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react';

type ProjectCardProp = {
    title: string;
    image: string | StaticImageData;
    description: string;
    color: string;
    id: string;
    modalContent: ReactNode;
};

export default function ProjectCard({
    title,
    image,
    description,
    color,
    id,
    modalContent,
}: ProjectCardProp) {
    return (
        // <div className="w-96 h-[31rem] border-slate-950 border-2">
        //     <div className='p-3'>
        //         <div className='flex'>
        //             <div className='grid grid-cols-1'>
        //                 <p className='my-[-4px] text-gray-500 font-mono'>
        //                     &lt;h1/&gt;
        //                 </p>
        //                 <div className='text-l border-l-[1.5px] ml-5 pl-4 py-3 border-gray-500'>


        // <p className='py-2 h-32 text-ellipsis overflow-hidden line-clamp-5'>
        //     {description}
        // </p>
        <div className="carousel-item card w-96 bg-black shadow-xl image-full group">
            <figure>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={''}
                    className="rounded-lg object-contain 
                    group-hover:scale-150 group-hover:opacity-25 ease-in-out transition duration-700 delay-75"
                />
            </figure>

            <div className="card-body">
                <div>
                    <h1 className={`${color} font-bold text-center underline underline-offset-8 text-lg my-2 py-1 text-ellipsis overflow-hidden line-clamp-1 decoration-4 break-all`}>
                        {title}
                    </h1>
                </div>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={''}
                    className="rounded-lg h-56 object-cover"
                />
                <div className=' h-36'>
                    <p className='line-clamp-5 break-all'>
                        {description}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <label htmlFor={id} className="btn bg-brand-50">Learn More</label>
                    <input type="checkbox" id={id} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 h-fit max-h-[5/6vh] max-w-none overflow-scroll">
                            {modalContent}
                            <div className="modal-action">
                                <label htmlFor={id} className="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}