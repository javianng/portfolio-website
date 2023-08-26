import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="footer footer-center bg-brand-300 text-white text-lg pt-44 pb-32">
            <div>
                <CodeBracketIcon className='w-14 hover:text-brand-100 transition ease-in-out' />
                <p className='pt-9 font-thin'>Don&apos;t watch the clock; do what it does. Keep coding, living and killing it one tick at a time</p>
            </div>

            <div>
                <div className='grid grid-flow-col gap-5'>
                    <div className="tooltip" data-tip="twitter">
                        <SocialIcon
                            url="https://twitter.com/j_avianzz"
                            className="hover:animate-bounce bg-white rounded-full"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                    <div className="tooltip" data-tip="linkedin">
                        <SocialIcon
                            url="https://www.linkedin.com/in/javianngzh/"
                            className="hover:animate-bounce bg-white rounded-full"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                    <div className="tooltip" data-tip="github">
                        <SocialIcon
                            url="https://github.com/javianng"
                            className="hover:animate-bounce bg-white rounded-full"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                    <div className="tooltip" data-tip="email me!">
                        <SocialIcon
                            url="mailto:javian.ng.z.h@gmail.com"
                            className="hover:animate-bounce bg-white rounded-full"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                    <div className="tooltip" data-tip="telegram">
                        <SocialIcon
                            url="https://t.me/javianng"
                            className="hover:animate-bounce bg-white rounded-full"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                    <div className="tooltip" data-tip="my resume">
                        <a href="/resume.pdf" className="w-[35px] h-[35px] rounded-full bg-slate-600 flex items-center justify-center hover:animate-bounce">
                            <DocumentTextIcon className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </div>
                <p className='font-thin'>Handcrafted by me &#169; twentytwentythree</p>
            </div>
        </footer>
    )
}