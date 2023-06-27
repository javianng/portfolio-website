export default function HomePage() {
    return (
        <>
            <div className="bg-gray-200 h-[90vh] items-center justify-center align-middle flex w-full rounded-lg shadow-md">
                <div>
                    <div className="flex gap-x-3 items-center">
                        <div className="bg-black w-[5vh] h-[5vh] rounded-full hover:animate-ping delay-200"></div>
                        <div className="bg-black w-[4vh] h-[4vh] rounded-full"></div>
                        <div className="bg-black w-[3vh] h-[3vh] rounded-full"></div>
                        <div className="bg-black w-[2vh] h-[2vh] rounded-full"></div>
                        <div className="bg-black w-[1vh] h-[1vh] rounded-full"></div>
                        <div className="bg-black w-full h-1"></div>
                    </div>
                    <p className="font-bold text-8xl">
                        JAVIAN NG
                    </p>
                    <p className="font-semibold text-l text-end">
                        SOFTWARE DEVELOPER & BUSINESS ANALYST
                    </p>
                </div>
            </div>
        </>
    )
}