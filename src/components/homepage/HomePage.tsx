import React from 'react'
import Wave from 'react-wavify'
import NextButton from '../common/Button'

export default function HomePage() {
    return (
        <>
            <div
                id='Home'
                className='h-[90vh] relative bg-brand-50'
            >
                <div className='h-[50vh] justify-end items-center flex flex-col'>
                    <p className="font-bold text-8xl">
                        JAVIAN NG
                    </p>
                    <p className="font-semibold text-l">
                        SOFTWARE DEVELOPER & BUSINESS ANALYST
                    </p>
                </div>

                {/* Waves Animation */}

                <div className='h-[40vh] w-full absolute'>
                    <Wave
                        className='w-full absolute h-[40vh]'
                        fill='#2C3333'
                        paused={false}
                        options={{
                            height: 1,
                            amplitude: 150,
                            speed: 0.05,
                            points: 3
                        }}
                    />
                    <Wave
                        className='w-full absolute h-[40vh] opacity-50'
                        fill='#A5C9CA'
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 130,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                    <Wave
                        className='w-full absolute h-[40vh] opacity-50'
                        fill='#E7F6F2'
                        paused={false}
                        options={{
                            height: 70,
                            amplitude: 120,
                            speed: 0.10,
                            points: 3
                        }}
                    />
                </div >
            </div>
            <NextButton url="#AboutMe" />
        </>
    )
}