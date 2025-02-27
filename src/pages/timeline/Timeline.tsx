"use client"

import {useEffect, useRef, useState} from "react"
import { motion } from "framer-motion";

interface Step {
    title: string
    description: string
    completed: boolean
    active: boolean
}

export default function Timeline() {
    const [timelineData, setTimelineData] = useState<Step[]>([
        {
            title: "Draft a letter",
            description: "Simply draft a letter and include the details for submitting the letter.",
            completed: false,
            active: true,
        },
        {
            title: "Get forwarded from advisor",
            description: "Get the letter signed and approved from the advisor",
            completed: false,
            active: false,
        },
        {
            title: "Get forwarded from HOD",
            description: "Get the letter signed and approved from the HOD",
            completed: false,
            active: false,
        },
        {
            title: "Get signed from Principal",
            description: "Get the letter signed and approved from the Principal",
            completed: false,
            active: false,
        },
    ])

    const timelineDiv = useRef<HTMLDivElement | null>(null);
    const [timelineDivHeight, setTimelineDivHeight] = useState<number>(20);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (timelineDiv.current) {
            if ("offsetHeight" in timelineDiv.current) {
                let lastElementHeight
                if ("offsetHeight" in lastElementRef.current) {
                    lastElementHeight = lastElementRef.current.offsetHeight;
                }
                setTimelineDivHeight(timelineDiv.current.offsetHeight - lastElementHeight);
            }
        }
    }, []);

    return (
        <div className="flex items-start justify-center px-4 pb-4 pt-10 max-h-[520px] overflow-scroll">
            <div className="w-full max-w-md">
                <div className="relative" ref={timelineDiv}>
                    <div className={`absolute left-6 w-0.5 bg-gray-700`} style={{ minHeight: `${timelineDivHeight}px` }}/>
                    {timelineData.map((data, index) => (
                        <motion.div key={index} className="relative mb-8 last:mb-0"
                             ref={index === timelineData.length - 1 ? lastElementRef : null}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex items-start">
                                <div
                                    className={`z-10 flex items-center justify-center w-14 h-12 rounded-full text-white font-bold bg-blue-500`}
                                >
                                    {index + 1}
                                </div>

                                <div className="ml-4 p-4 w-full rounded-lg bg-[#1e293b]" >
                                    <h3 className="text-lg font-medium text-white">{data.title}</h3>
                                    <p className="mt-1 text-sm text-gray-300">{data.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

