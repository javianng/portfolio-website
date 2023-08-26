import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import PageContainer from "../common/PageContainer";
import TitleContainer from "../common/TitleContainer";
import { TESTIMONIAL_DETAILS } from "./TestimonialDetails";

type CarouselCardProps = {
    reference: string,
    image: string | StaticImageData;
    quote: ReactNode;
    personel: string;
    organisation: string;
}

function CarouselCard({
    reference,
    image,
    quote,
    personel,
    organisation }: CarouselCardProps) {
    return (
        <div id={reference} className="carousel-item w-full">
            <div>
                <div className="flex flex-col items-center">
                    <div className="avatar pb-8">
                        <div className=" w-36 mask mask-squircle outline-2 ">
                            <Image src={image} alt={""} />
                        </div>
                    </div>
                    {quote}
                    <p className="pt-5 font-extrabold">
                        {personel}
                    </p>
                    <p>
                        {organisation}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <PageContainer>
            <div className='flex justify-center'>
                <TitleContainer
                    id='Testimonials'
                >
                    Testimonials
                </TitleContainer>
            </div>
            <p className="text-center py-4">
                Some nice things people have said about me...
            </p>
            <div className="carousel w-full py-9">
                {TESTIMONIAL_DETAILS.map((cardDetails, i) => (
                    <CarouselCard key={i} {...cardDetails} />
                ))}
            </div>
            <div className="flex justify-center w-full gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>
            <div className="h-[5vh]" />
        </PageContainer>
    )
}
