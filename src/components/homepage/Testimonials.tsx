import PageContainer from "../common/PageContainer";
import Image from "next/image";
import zenacademy from "src/assets/testimony/zenacademy.png"

export default function Testimonials() {
    return (
        <PageContainer>
            <h1
                className="text-8xl font-bold py-4 text-center"
                id="Testimonials"
            >
                Testimonials
            </h1>
            <p className="text-center py-4">
                Some nice things people have said about me...
            </p>
            <div className="carousel w-full py-9">
                <div id="item1" className="carousel-item w-full">
                    <div className="flex flex-col items-center">
                        <div className="avatar pb-8">
                            <div className=" w-36 mask mask-squircle outline-2 ">
                                <Image src={zenacademy} alt={""} />
                            </div>
                        </div>
                        <p>
                            &quot;A well-liked and hardworking fighter, Javian trained hard and persevered through the tough trainings which was physically and mentally exhausting. He gave his 100% during trainings and never had his head down despite losing to his well-experienced black-belt seniors numerous times, always standing back up to fight back.
                        </p>
                        <br />
                        <p>
                            His efforts none the less paid off when he represented the club in 4 separate tournaments in 2018, clinching 3 gold medals in the National Taekwondo Kyorugi Championships 2018 Ambassador Cup, Singapore National Games, Singapore Youth Olympic Festival and a bronze for the 6th Daedo Taekwondo Open Championships 2018. This attest for his passion and pursuit for excellence in things outside of academics.&quot;
                        </p>
                        <p className="pt-5 font-extrabold">
                            Zen Academy
                        </p>
                        <p>
                            Taekwondo Club
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
            </div>
            <div className="h-[5vh]" />
        </PageContainer>
    )
}
