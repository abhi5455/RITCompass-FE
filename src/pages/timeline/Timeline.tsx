"use client"

import { useState } from "react"

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
    ])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="relative">
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-700" />

                    {timelineData.map((data, index) => (
                        <div key={index} className="relative mb-8 last:mb-0">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

