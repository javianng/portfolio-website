import Image from "next/image";
import PageContainer from "../../common/PageContainer";
import TitleContainer from "../../common/TitleContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TESTIMONIAL_DETAILS } from "./TestimonialDetails";
import type { CSSProperties, ReactNode } from "react";
import type { StaticImageData } from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselCardProps = {
  image: string | StaticImageData;
  quote: ReactNode;
  personel: string;
  organisation: string;
};

function CarouselCard({
  image,
  quote,
  personel,
  organisation,
}: CarouselCardProps) {
  return (
    <div className="carousel-item w-full justify-center py-9">
      <div>
        <div className="mx-16 flex flex-col items-center">
          <div className="avatar pb-8">
            <div className=" mask mask-squircle w-36 outline-2 ">
              <Image src={image} alt={personel + " " + organisation} />
            </div>
          </div>
          {quote}
          <p className="pt-5 font-extrabold">{personel}</p>
          <p>{organisation}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <PageContainer>
      <div className="flex justify-center">
        <TitleContainer id="Testimonials">Testimonials</TitleContainer>
      </div>
      <p className="py-4 text-center">
        Some nice things people have said about me...
      </p>
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        style={
          {
            "--swiper-pagination-color": "#395B64",
            "--swiper-navigation-color": "#395B64",
          } as CSSProperties
        }
      >
        {TESTIMONIAL_DETAILS.map((cardDetails, i) => (
          <SwiperSlide key={i}>
            <CarouselCard {...cardDetails} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[4vh]" />
    </PageContainer>
  );
}
