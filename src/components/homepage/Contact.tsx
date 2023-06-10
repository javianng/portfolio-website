import profilephoto from 'src/assets/profilephoto.jpg'
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
    return (
        <>
            <div className='flex justify-center pb-6'>
                <div className="
                    w-11/12 max-w-5xl"
                >
                    <div className="flex mb-4">
                        <div className='w-1/2'>
                            <h1 className="text-8xl font-bold mb-9 ">
                                My Contact
                            </h1>
                            <p>
                                Aliquip sint sunt voluptate consectetur eiusmod exercitation anim aliquip ut tempor. Voluptate aliquip pariatur qui ullamco fugiat proident irure excepteur deserunt anim eu reprehenderit cupidatat. Proident sint enim ut cupidatat nisi proident nostrud. Sunt cupidatat consequat anim in ut sit deserunt labore id nulla est tempor ullamco dolor. Adipisicing ut eiusmod aute. Ipsum qui non minim adipisicing id anim officia sunt nulla irure minim nulla in excepteur.
                            </p>

                        </div>
                        <div className='object-contain ml-9 justify-end w-1/2'>
                            <Image
                                src={profilephoto}
                                alt=""
                                className=''
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='grid grid-flow-col gap-3'>
                            <SocialIcon url="https://twitter.com/jaketrent" />
                            <SocialIcon url="https://www.linkedin.com/in/javianngzh/" />
                            <SocialIcon url="https://github.com/javianng" />
                            <SocialIcon url="mailto:javian.ng.z.h@gmail.com" />
                            <SocialIcon url="https://t.me/javianng" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}