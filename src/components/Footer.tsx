import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="footer footer-center bg-brand-300 text-white text-lg pt-44 pb-32">
            <div>
                <CodeBracketIcon className='w-14 hover:text-brand-100 transition ease-in-out' />
                <p className='pt-9 font-thin'>Don&apos;t watch the clock; do what it does. Keep coding, living and killing it one tick at a time</p>
            </div>

            <div>
                <div className='grid grid-flow-col gap-5 pb-8'>
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
                <p className='font-thin'>Handcrafted by me &#169; twentytwentythree</p>
            </div>
        </footer>
    )
}