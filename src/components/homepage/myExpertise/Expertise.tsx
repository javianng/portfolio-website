import PageContainer from '~/components/common/PageContainer';
import { ReactNode } from 'react';
import NextButton from '../../common/Button';
import { EXPERTISE_COMPONENT_DETAILS } from './ExpertiseDetails';
import TitleContainer from '~/components/common/TitleContainer';

type ExpertiseComponentProps = {
    name: string;
    decorationColor: string;
    subtitle: string;
    description: string;
    icon: ReactNode;
    color: string;
    logo: ReactNode;
};

const ExpertiseComponent = ({
    name,
    decorationColor,
    subtitle,
    description,
    icon,
    color,
    logo }: ExpertiseComponentProps) => {
    return (
        <div className={`group tracking-tight p-3 border-black border-2 ${color} transition delay-75 ease-in-out`}>
            <div className='px-3 py-8 flex justify-between'>
                <div>
                    <div className='flex align-top pb-4 brand'>
                        <div className='w-12 sm:w-16 mr-4'>
                            {icon}
                        </div>
                        <div>
                            <div className='m-2'></div>
                            <h2 className={`${decorationColor} font-bold underline decoration-solid
                                mb-1 sm:mb-2 
                                decoration-4 sm:decoration-8
                                text-2xl sm:text-4xl `}>
                                {name}
                            </h2>
                            <h3 className="font-bold
                                text-2xl sm:text-4xl">
                                {subtitle}
                            </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='grid grid-cols-1'>
                            <p className='my-[-4px] text-gray-500 font-mono'>
                                &lt;h1&gt;
                            </p>
                            <p className='border-l-[1.5px] ml-5 pl-4 py-3 border-gray-500'>
                                {description}
                            </p>
                            <p className='my-[-4px] text-gray-500 font-mono'>
                                &lt;h1/&gt;
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-3 place-items-center'>
                    {logo}
                </div>
            </div>
        </div>
    )
}

export default function Expertise() {
    return (
        <PageContainer>
            <div className='flex justify-center'>
                <TitleContainer
                    id='Expertise'
                >
                    My Expertise
                </TitleContainer>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {EXPERTISE_COMPONENT_DETAILS.map((componentDetails, i) => (
                    <ExpertiseComponent key={i} {...componentDetails} />
                ))}
            </div>
            <NextButton url="#Work" />
        </PageContainer>
    )
}