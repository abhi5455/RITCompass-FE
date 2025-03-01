import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {History, X} from "lucide-react";

const historyData = [
    {
        title: 'I want a Bonafied'
    },
    {
        title: 'Apply for scholarship'
    },
    {
        title: 'Apology letter'
    },
]


export const HistorySlideShow = ({isHistoryVisible, onClose}: {
    isHistoryVisible: boolean,
    onClose: (title?: string) => void
}) => {
    return (
        <Sheet open={isHistoryVisible} onOpenChange={() => onClose()}>
            <SheetContent className={'bg-[#0c1222] text-white w-fit pr-6 min-w-[320px] p-3 border-r border-gray-800'}>
                <SheetHeader>
                    <SheetTitle className={'text-gray-300 flex justify-start items-center gap-3 pl-2'}>
                        <History className="text-[#99a1af] opacity-70"/>
                        <span className="text-[#99a1af] opacity-70 font-medium">History</span>
                        <button
                            onClick={() => onClose()}
                            className="border-none outline-none absolute top-6 right-4 text-gray-400 hover:text-white p-1.5 rounded-lg transition hover:bg-gray-800/50"
                        >
                            <X size={18} className=""/>
                        </button>
                    </SheetTitle>
                    <SheetDescription
                        className={'text-[#f0f6fc] flex flex-col justify-center items-start px-2 gap-2.5 mt-8 cursor-pointer'}>
                        <>
                            {historyData.map((item, index) => (
                                <button key={index}
                                        className={'bg-[#101524] hover:bg-[#1a2035] px-4 py-2.5 rounded-xl flex justify-between items-center w-full cursor-pointer overflow-clip transition-colors duration-200 border border-gray-800/50'}
                                        onClick={() => onClose(item.title)}
                                >
                                    <span className="break-words text-left w-[90%] pr-2 text-sm font-light">{item.title}</span>
                                </button>
                            ))}
                        </>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}