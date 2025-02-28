"use client"

import {useEffect, useRef, useState} from "react"
import {motion} from "framer-motion";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"


export interface IStep {
    title: string
    description: string
    responsible_authority: string
    expected_time: string
    related_links: string[] | string
}

export default function Timeline({timelineData}: {
    timelineData: IStep[]
}) {
    const timelineDiv = useRef<HTMLDivElement | null>(null);
    const [timelineDivHeight, setTimelineDivHeight] = useState<number>(20);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (timelineDiv.current) {
            if ("offsetHeight" in timelineDiv.current) {
                let lastElementHeight
                if ("offsetHeight" in lastElementRef.current!) {
                    lastElementHeight = lastElementRef.current.offsetHeight;
                }
                setTimelineDivHeight(timelineDiv.current.offsetHeight - lastElementHeight!);
            }
        }
    }, []);

    return (
        <div className="flex items-start justify-center px-4 pb-10 pt-10 overflow-scroll">
            <div className="w-full max-w-md">
                <div className="relative" ref={timelineDiv}>
                    <div className={`absolute left-6 w-0.5 bg-gray-700`} style={{minHeight: `${timelineDivHeight}px`}}/>
                    {timelineData.map((data, index) => (
                        <motion.div key={index} className="relative mb-8 last:mb-0"
                                    ref={index === timelineData.length - 1 ? lastElementRef : null}
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <div className="flex items-start">
                                <div
                                    className={`z-10 flex items-center justify-center w-14 h-12 rounded-full text-white font-bold bg-blue-500`}
                                >
                                    {index + 1}
                                </div>

                                <div className="ml-4 p-4 w-full rounded-lg bg-[#1e293b]">
                                    <h3 className="text-lg font-medium text-white">{data.title}</h3>
                                    <p className="mt-1 text-sm text-gray-300">{data.description}</p>

                                    <div className="w-full flex items-center justify-between text-white text-sm mt-3">
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-user-round">
                                                <circle cx="12" cy="8" r="5"/>
                                                <path d="M20 21a8 8 0 0 0-16 0"/>
                                            </svg>
                                            <span>{data.responsible_authority}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-hourglass">
                                                <path d="M5 22h14"/>
                                                <path d="M5 2h14"/>
                                                <path
                                                    d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/>
                                                <path
                                                    d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
                                            </svg>
                                            <span>{data.expected_time}</span>
                                        </div>
                                    </div>
                                    {data.related_links ?
                                        <div>
                                            {[...data.related_links].map((link, index) =>
                                                <TooltipProvider key={index}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="text-white mx-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round"
                                                                 className="lucide lucide-link">
                                                                <path
                                                                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                                                <path
                                                                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                                            </svg>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a href={link}>{link}</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            )}
                                        </div> :
                                        <div></div>
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

