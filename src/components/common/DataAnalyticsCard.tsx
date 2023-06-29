import Image, { StaticImageData } from 'next/image'
import LearnMoreButton from './LearnMoreButton';

type DataAnalyticsCardProp = {
    title: string;
    image: string | StaticImageData;
    description: string;
    link: string;
    color: string;
};

export default function DataAnalyticsCard({
    title,
    image,
    description,
    link,
    color,
}: DataAnalyticsCardProp) {
    return (
        <div className="w-96 h-[30rem] border-slate-950 border-2">
            <div className='p-3'>
                <div className='flex'>
                    <div className='grid grid-cols-1'>
                        <p className='my-[-4px] text-gray-500'>
                            &lt;h1&gt;
                        </p>
                        <div className='text-l border-l-[1.5px] ml-5 pl-4 py-3 border-gray-500'>
                            <h1 className={`${color} font-bold text-center underline underline-offset-8 text-lg my-2 py-1 text-ellipsis overflow-hidden line-clamp-1 decoration-4`}>
                                {title}
                            </h1>
                            <div className='h-44 object-contain flex'>
                                <Image
                                    src={image}
                                    width={500}
                                    height={500}
                                    alt={''}
                                    className="rounded-lg object-none"
                                />
                            </div>
                            <p className='py-2 h-32 text-ellipsis overflow-hidden line-clamp-5'>
                                {description}
                            </p>

                            <div className="flex justify-end w-full">
                                <LearnMoreButton />
                            </div>

                        </div>
                        <p className='my-[-4px] text-gray-500'>
                            &lt;h1/&gt;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}