import profilePhoto from 'src/assets/profilephoto.jpg'
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
                                As a budding business analyst and software developer, I am keen to take on new challenges and entrepreunear ventures. Feel free to reach out to me using the links below.
                            </p>
                            <div className='flex justify-start mt-9'>
                                <div className='grid grid-flow-col gap-3'>
                                    <SocialIcon url="https://twitter.com/j_avianzz" />
                                    <SocialIcon url="https://www.linkedin.com/in/javianngzh/" />
                                    <SocialIcon url="https://github.com/javianng" />
                                    <SocialIcon url="mailto:javian.ng.z.h@gmail.com" />
                                    <SocialIcon url="https://t.me/javianng" />
                                </div>
                            </div>

                        </div>
                        <Image
                            src={profilePhoto}
                            alt="Javian Ng"
                            className='object-contain ml-9 justify-end w-1/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}