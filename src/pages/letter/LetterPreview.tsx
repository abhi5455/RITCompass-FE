import {ArrowLeft} from "lucide-react";
import {useRef, useState} from "react";
import "./letter.css";
import {cn} from "@/lib/utils.ts";
import {useReactToPrint} from "react-to-print";

export interface ILetterType {
    from: string;
    date: string;
    to: string;
    subject: string;
    salutation: string;
    body: string;
    content: string;
    closing: string;
    signature: string;
}

export default function LetterPreview({letterData, setPreviewOpen}: {
    letterData: ILetterType,
    setPreviewOpen: (open: boolean) => void
}) {
    const [selectedFont, setSelectedFont] = useState<'caveat' | 'grape-nuts-regular' | 'indie-flower-regular'>('caveat');
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div className="w-full">
            <h1 className="mx-auto w-[80%] max-w-[900px] text-3xl flex items-center justify-center text-white relative text-center">
                <button className="cursor-pointer hover:text-red-500" onClick={() => {
                    setPreviewOpen(false);
                }}><ArrowLeft className="absolute left-0"/></button>
                Letter Preview
            </h1>

            <div className="w-full flex justify-center gap-3 mt-5 mb-5">
                <button
                    className={cn(`cursor-pointer caveat bg-gray-500 rounded-full px-5 p-3`, selectedFont === 'caveat' && 'bg-white')}
                    onClick={() => setSelectedFont('caveat')}
                >
                    Font 1
                </button>
                <button
                    className={cn(`cursor-pointer grape-nuts-regular bg-gray-500 rounded-full px-5 p-3`, selectedFont === 'grape-nuts-regular' && 'bg-white')}
                    onClick={() => setSelectedFont('grape-nuts-regular')}
                >
                    Font 2
                </button>
                <button
                    onClick={() => setSelectedFont('indie-flower-regular')}
                    className={cn(`cursor-pointer indie-flower-regular bg-gray-500 rounded-full px-5 p-3`, selectedFont === 'indie-flower-regular' && 'bg-white')}>
                    Font 3
                </button>
            </div>

            <div
                className={cn("mx-auto rounded-md relative mt-10 w-[80%] max-w-[900px] max-h-[80%] overflow-auto p-6 bg-white flex flex-col", selectedFont)}
            >
                <div ref={contentRef} className="w-full">
                    <div className="px-2 mb-4">
                        {letterData.to}
                    </div>
                    <div className="px-2 mb-4">
                        {letterData.date}
                    </div>
                    <div className="px-2 mb-4">
                        {letterData.from}
                    </div>
                    <div className="flex gap-3 mb-4 px-2">
                        <b>subject:</b> {letterData.subject}
                    </div>
                    <div className="px-2 mb-4">{letterData.salutation}</div>
                    <div className="w-full px-2 mb-4">{letterData.body}</div>
                    <div className="w-full px-2 mb-4">{letterData.closing}</div>
                    <div className="px-2 mb-4">{letterData.signature}</div>
                </div>
                <button
                    className="px-8 py-3 rounded-md bg-[#131b30] text-white cursor-pointer hover:scale-95 transition-transform"
                    onClick={() => reactToPrintFn()}
                >
                    Print
                </button>
            </div>
        </div>
    )
}