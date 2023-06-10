import profilephoto from 'src/assets/profilephoto.jpg'
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className='flex justify-center'>
                <div className="
                    w-11/12 max-w-5xl"
                >
                    <div className="grid grid-cols-2 mb-4">
                        <div>
                            <h1 className="text-8xl font-bold mb-9">
                                Contact Me
                            </h1>
                            <p>
                                Aliquip sint sunt voluptate consectetur eiusmod exercitation anim aliquip ut tempor. Voluptate aliquip pariatur qui ullamco fugiat proident irure excepteur deserunt anim eu reprehenderit cupidatat. Proident sint enim ut cupidatat nisi proident nostrud. Sunt cupidatat consequat anim in ut sit deserunt labore id nulla est tempor ullamco dolor. Adipisicing ut eiusmod aute. Ipsum qui non minim adipisicing id anim officia sunt nulla irure minim nulla in excepteur.
                            </p>


                        </div>
                        <div className='object-contain ml-9 justify-end '>
                            <Image
                                src={profilephoto}
                                alt=""
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}