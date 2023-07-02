import { CodeBracketIcon } from '@heroicons/react/24/outline';
import LinkedIn from "src/assets/Icons/367593_linkedin_business_network_social_icon.svg"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer bg-brand-300 flex justify-center items-center text-white text-lg text-center">
            <div className='w-1/3 pt-48 pb-24'>
                <div className='flex justify-center w-full'>
                    <CodeBracketIcon className='w-10' />
                </div>
                <p className='w-full'>Don't watch the clock; do what it does. Keep coding, living and killing it one tick at a time</p>
                <div>
                    <LinkedIn />
                </div>
                <p className='w-full'>Handcrafted by me &#169; twentytwentythree</p>
            </div>
        </footer>
    )
}