import { MapPinIcon } from '@heroicons/react/24/outline'
import NextButton from '../../common/Button';
import { EXPERIENCE_DETAILS } from './ExperienceDetails';
import { ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";

type CardProps = {
    id: number;
    title: string;
    company_organisation: string;
    duration: string;
    bg_color: string;
    location: string;
    detail: ReactNode;
    tags: string[];
    logo: string | StaticImageData;
}

export function Card({
    id,
    title,
    company_organisation,
    duration,
    bg_color,
    location,
    detail,
    tags,
    logo }: CardProps) {
    if (id % 2 == 1) {
        return (
            <div className="mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="flex items-center order-1 bg-brand-300 w-8 h-8 card">
                    <h1 className="mx-auto text-white font-semibold text-lg">{id}</h1>
                </div>
                <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${bg_color}`}>
                    <div className='w-12'>
                        <Image src={logo} alt={'Company Logo'} />
                    </div>
                    <h3 className="py-2 font-bold text-white text-xl">{title}</h3>
                    <h4 className="font-semibold text-white text-sm">{company_organisation} | {duration}</h4>
                    <div className='flex items-center py-1'>
                        <MapPinIcon className='h-4 text-white pr-1' />
                        <h4 className="font-semibold text-white text-sm"> {location} </h4>
                    </div>
                    <hr className='py-1 my-1' />
                    <div className="text-sm leading-snug tracking-wide text-white text-opacity-100">{detail}h</div>
                    <div className="mt-3 flex flex-wrap gap-1">
                        {tags.map((tag, i) => <div className='badge badge-ghost' key={i}> {tag} </div>)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="flex items-center order-1 bg-brand-300 w-8 h-8 card">
                <h1 className="mx-auto text-white font-semibold text-lg">{id}</h1>
            </div>
            <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${bg_color}`}>
                <div className='w-12'>
                    <Image src={logo} alt={'Company Logo'} />
                </div>
                <h3 className="py-2 font-bold text-white text-xl">{title}</h3>
                <h4 className="font-semibold text-white text-sm">{company_organisation} | {duration}</h4>
                <div className='flex items-center py-1'>
                    <MapPinIcon className='h-4 text-white pr-1' />
                    <h4 className="font-semibold text-white text-sm"> {location} </h4>
                </div>
                <hr className='py-1 my-1' />
                <div className="text-sm leading-snug tracking-wide text-white text-opacity-100">{detail}</div>
                <div className="mt-3 flex flex-wrap gap-1">
                    {tags.map((tag, i) => <div className='badge badge-ghost' key={i}> {tag} </div>)}
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <>
            <h1
                className="flex justify-center text-8xl font-bold mb-9 text-center"
                id='Experience'
            >
                Professional<br />Experience
            </h1>
            <div className="mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                    {EXPERIENCE_DETAILS.map((cardDetails, i) => (
                        <Card key={i} {...cardDetails} />
                    ))}
                </div>
            </div>
            <NextButton url="#Testimonials" />
        </>
    )
}