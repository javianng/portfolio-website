import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { CSSProperties, ReactNode } from "react";
import PageContainer from "../common/PageContainer";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TitleContainer from "../common/TitleContainer";
import { TESTIMONIAL_DETAILS } from "../../data/TestimonialDetails";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <PageContainer>
      <TitleContainer id="Testimonials" className="text-center">
        Testimonials
      </TitleContainer>
      <section className="pb-[4vh]">
        <p className="py-4 text-center">
          Some nice things people have said about me...
        </p>
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
          }}
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
      </section>
    </PageContainer>
  );
}

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
            <div className="w-36 rounded-md outline-2 ">
              <Image
                src={image}
                alt={personel + " " + organisation}
                className="rounded-md shadow-md"
              />
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
