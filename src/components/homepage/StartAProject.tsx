import PageContainer from "../common/PageContainer"
import { FireIcon } from '@heroicons/react/24/outline';

export default function StartAProject() {
    return (
        <PageContainer>
            <div className="h-14">
                <div className="card bg-brand-100 py-14">
                    <div className="grid grid-cols-3 place-items-center text-center">
                        <p className="text-2xl font-bold">
                            Start a project
                        </p>
                        <p>
                            Interested in working together? We should queue up a time to chat. I&apos;ll buy the coffee.
                        </p>
                        <a
                            href="mailto:javian.ng.z.h@gmail.com"
                            className="bg-slate-100 rounded-full flex p-4 group transition delay-100 ease-in-out 
                            hover:bg-red-100">
                            <FireIcon className="h-6 group transition delay-100 ease-in-out
                            group-hover:text-red-400" />
                            <p>
                                Let&apos;s do this!
                            </p>
                        </a>

                    </div>
                </div>
            </div>
        </PageContainer >
    )
}