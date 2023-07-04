import { MapPinIcon } from '@heroicons/react/24/outline'
import NextButton from '../../common/Button';
import { EXPERIENCE_DETAILS } from './ExperienceDetails';
import { ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";
import PageContainer from '~/components/common/PageContainer';
import TitleContainer from '~/components/common/TitleContainer';


type CardProps = {
    title: string;
    company_organisation: string;
    duration: string;
    className: string;
    location: string;
    detail: ReactNode;
    tags: string[];
    logo: ReactNode;
    image: string | StaticImageData;
}

function Card({
    title,
    company_organisation,
    duration,
    className,
    location,
    detail,
    tags,
    logo,
    image }: CardProps) {

    return (
        <div className={`card lg:card-side rounded-lg shadow-xl transition ease-in-out ${className}`}>
            <figure>
                <Image src={image} alt={company_organisation} className='object-cover h-full w-full' />
            </figure>
            <div className="card-body">
                <div className='w-16 pb-6'>
                    {logo}
                </div>
                <h3 className="pb-2 font-bold text-xl">{title}</h3>
                <h4 className="font-semibold">{company_organisation} | {duration}</h4>

                <div className='flex font-semibold items-center pb-4'>
                    <MapPinIcon className='h-4 pr-1' />
                    <h4> {location} </h4>
                </div>
                <div className="pb-6">{detail}</div>
                <div className="card-actions justify-end">
                    {tags.map((tag, i) => <div className='badge badge-ghost h-6 px-2' key={i}> {tag} </div>)}
                </div>
            </div>
        </div >
    )
}

export default function Experience() {
    return (
        <>
            <div className='flex justify-center text-center'>
                <TitleContainer
                    id='Experience'
                >
                    Professional<br />Experience
                </TitleContainer>
            </div>
            <PageContainer>
                <div className='flex flex-col gap-8'>
                    {EXPERIENCE_DETAILS.map((cardDetails, i) => (
                        <Card key={i} {...cardDetails} />
                    ))}
                </div>
                <NextButton url="#Testimonials" />
            </PageContainer>
        </>
    )
}