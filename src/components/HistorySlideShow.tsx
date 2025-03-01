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
            <SheetContent className={'bg-[#101524] text-white w-fit pr-5 min-w-[300px] p-2'}>
                <SheetHeader>
                    <SheetTitle className={'text-gray-400 flex justify-start items-center gap-2'}>
                        <History/>
                        History
                        <button
                            onClick={() => onClose()}
                            className="border-none outline-none absolute top-3 right-3 text-gray-400 hover:text-white p-2 rounded-lg transition hover:bg-gray-700 mt-2"
                        >
                            <X size={20}/>
                        </button>
                    </SheetTitle>
                    <SheetDescription
                        className={'text-[#f0f6fc] flex flex-col justify-center items-start px-3 gap-3 mt-10 cursor-pointer'}>
                        <>
                            {historyData.map((item, index) => (
                                <button key={index}
                                        className={'bg-gray-800 px-3 py-2 rounded-lg flex justify-between items-center w-full cursor-pointer overflow-clip '}
                                        onClick={() => onClose(item.title)}
                                ><span className="break-words text-left w-[90%] pr-2">{item.title}</span>
                                </button>
                            ))}
                        </>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}