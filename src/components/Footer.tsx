import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="footer bg-brand-300 flex justify-center items-center text-white text-lg text-center">
            <div className='w-1/3 pt-36 pb-24'>
                <div className='flex justify-center w-full'>
                    <CodeBracketIcon className='w-14' />
                </div>
                <p className='w-full pt-9 font-thin'>Don&apos;t watch the clock; do what it does. Keep coding, living and killing it one tick at a time</p>
                <div className='flex justify-center py-9 w-full'>
                    <div className='grid grid-flow-col gap-5'>
                        <SocialIcon
                            fgColor="#FFFFFF"
                            url="https://twitter.com/j_avianzz"
                            className="hover:animate-bounce"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            fgColor="#FFFFFF"
                            url="https://www.linkedin.com/in/javianngzh/"
                            className="hover:animate-bounce"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            fgColor="#FFFFFF"
                            url="https://github.com/javianng"
                            className="hover:animate-bounce"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            fgColor="#FFFFFF"
                            url="mailto:javian.ng.z.h@gmail.com"
                            className="hover:animate-bounce"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            fgColor="#FFFFFF"
                            url="https://t.me/javianng"
                            className="hover:animate-bounce"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                </div>
                <p className='w-full font-thin'>Handcrafted by me &#169; twentytwentythree</p>
            </div>
        </footer>
    )
}