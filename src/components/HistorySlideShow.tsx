import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {History, X, Trash2, AlignLeft} from "lucide-react";
import {useState} from "react";

const historyData = [
    {
        title: 'Request for Name Correction in Records'
    },
    {
        title: 'Apply for Hostel Admission'
    },
    {
        title: 'Request for Duplicate ID Card'
    },
    {
        title: 'Apply for Exam Registration'
    },
    {
        title: 'Request for Course Withdrawal'
    },
    {
        title: 'Apply for Internship Approval Letter'
    },
    {
        title: 'Request for Transfer Certificate'
    },
    {
        title: 'Apply for Late Fee Waiver'
    }
];

interface ExpandableButtonProps {
    title: string
    onDelete: (title: string) => void
    promptHistory: (title: string) => void
    index?: number
}

const ExpandableButton = ({title, onDelete, promptHistory, index}: ExpandableButtonProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            key={index}
            className={`
        bg-[#101524] hover:bg-[#1a2035] px-4 py-3 rounded-xl 
        flex justify-between items-center w-full cursor-pointer 
        border border-gray-800/50 transition-all duration-200 ease-in-out
        ${isHovered ? "items-start" : "items-center"}
      `}
            onClick={() => promptHistory(title)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
      <span
          className={`
          text-left pr-2 text-sm font-light
          ${isHovered ? "break-words w-[90%]" : "truncate w-[90%] whitespace-nowrap overflow-hidden text-ellipsis"}
        `}
      >
        {title}
      </span>
            <Trash2
                size={20}
                className={`
          text-[#99a1af] opacity-70 hover:text-red-500 flex-shrink-0
        `}
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(title)
                }}
            />
        </button>
    )
}


export const HistorySlideShow = ({isHistoryVisible, onClose}: {
    isHistoryVisible: boolean,
    onClose: (title?: string) => void
}) => {
    const handleDelete = (title: string) => {
        console.log(`Deleting item: ${title}`)
    }
    const handlePromptHistory = (title: string) => {
        onClose(title);
    }

    return (
        <Sheet open={isHistoryVisible} onOpenChange={() => onClose()}>
            <SheetContent className={'bg-[#0c1222] text-white w-fit pr-6 min-w-[320px] py-3 pl-2 border-r border-gray-800'}>
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
                        className={'text-[#f0f6fc] flex flex-col justify-center items-start px-2 gap-3 mt-8 cursor-pointer'}>
                        <>
                            {historyData.map((item, index) => (
                                <ExpandableButton key={index} index={index} title={item.title}
                                                  onDelete={handleDelete} promptHistory={handlePromptHistory} />
                            ))}
                        </>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}