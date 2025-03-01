"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {Clock, User, Link2, BadgeInfo} from "lucide-react"

interface IStep {
    title: string
    description: string
    responsible_authority: string
    expected_time: string
    related_links: string[] | string
}

interface TimelineProps {
    steps: IStep[],
    remark?: string
}

export default function Timeline({ steps, remark}: TimelineProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="w-full max-w-3xl mx-auto">
            {steps.map((step, index) => (
                <div key={index} className="flex relative">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                        <motion.div
                            className="absolute left-7 top-[63px] w-[2px] bg-blue-500"
                            initial={{ height: 0 }}
                            animate={isVisible ? { height: "calc(100% - 70px)" } : { height: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.4 }}
                            style={{ zIndex: 0 }}
                        />
                    )}

                    <div className="flex flex-col items-center mr-6 z-10">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white font-bold text-xl"
                        >
                            {index + 1}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.4 }}
                        className="bg-gray-800 rounded-lg p-5 mb-8 w-full"
                    >
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 mb-4">{step.description}</p>

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{step.responsible_authority}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{step.expected_time}</span>
                            </div>
                        </div>

                        {(Array.isArray(step.related_links) ? step.related_links.length > 0 : step.related_links) && (
                            <div className="mt-3 pt-3 border-t border-gray-700">
                                <div className="flex items-center gap-2">
                                    <Link2 size={16} className="text-gray-400" />
                                    {Array.isArray(step.related_links) ? (
                                        <div className="flex flex-wrap gap-2">
                                            {step.related_links.map((link, linkIndex) => (
                                                <a key={linkIndex} href={link} className="text-blue-400 hover:text-blue-300 hover:underline">
                                                    {link.replace(/^https?:\/\//, "").split("/")[0]}
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <a href={step.related_links} className="text-blue-400 hover:text-blue-300 hover:underline">
                                            {step.related_links.replace(/^https?:\/\//, "").split("/")[0]}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            ))}

            {remark &&
                <div className="text-white flex gap-6 max-w-3xl">
                    <div
                        className="aspect-square flex items-center justify-center w-14 h-14 rounded-full bg-blue-500"
                    >
                        <BadgeInfo className="size-7 scale-x-[-1]"/>
                    </div>
                    <p className="text-xl pt-3">{remark}</p>
                </div>
            }
        </div>
    )
}

