import {ArrowLeft} from "lucide-react";
import {useState} from "react";
import LetterPreview from "@/pages/letter/LetterPreview.tsx";

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

export default function LetterEditable({letterData, setEditableOpen}: {
    letterData: ILetterType,
    setEditableOpen: (open: boolean) => void
}) {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [finalData, setFinalData] = useState<ILetterType | null>(null);

    if (previewOpen && finalData) {
        return (
            <LetterPreview
                letterData={finalData}
                setPreviewOpen={setPreviewOpen}
            />)
    }

    return (
        <div className="w-full h-[100dvh] flex items-center justify-center flex-col">
            <h1 className="w-[80%] max-w-[900px] text-3xl flex items-center justify-center text-white relative text-center">
                <button className="cursor-pointer hover:text-red-500" onClick={() => {
                    setEditableOpen(false);
                }}><ArrowLeft className="absolute left-0"/></button>
                Edit Generated Letter
            </h1>

            <form
                className="rounded-md relative mt-10 w-[80%] max-w-[900px] max-h-[80%] overflow-auto p-6 bg-white flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.target as HTMLFormElement);
                    const data = {
                        from: formData.get("from")!.toString(),
                        date: formData.get("date")!.toString(),
                        to: formData.get("to")!.toString(),
                        subject: formData.get("subject")!.toString(),
                        salutation: formData.get("salutation")!.toString(),
                        body: formData.get("body")!.toString(),
                        content: formData.get("body")!.toString(),
                        closing: formData.get("closing")!.toString(),
                        signature: formData.get("signature")!.toString(),
                    };

                    setFinalData(data);
                    setPreviewOpen(true);
                }}
            >
                <textarea placeholder="From Address"
                          name="from"
                          value={letterData.from}
                          className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                          required
                />
                <input type="date" name="date" className="w-[40%] border py-2 px-2 mb-4 rounded-md"
                       value={letterData.date}
                       required
                />
                <textarea placeholder="To Address"
                          name="to"
                          value={letterData.to}
                          className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                          required
                />
                <div className="flex gap-3 ">
                    subject:
                    <textarea placeholder="Subject"
                              name="subject"
                              value={letterData.subject}
                              className="flex-1 py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                              required
                    />
                </div>
                <textarea placeholder="Salutation"
                          name="salutation"
                          value={letterData.salutation}
                          className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                          required
                />
                <textarea placeholder="Body"
                          name="body"
                          value={letterData.body}
                          className="w-full py-2 px-2 border mb-4 min-h-[200px] rounded-md"
                          required
                />
                <textarea placeholder="Closing"
                          name="closing"
                          className="w-full py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                          value={letterData.closing}
                          required
                />
                <textarea placeholder="Signature"
                          name="signature"
                          value={letterData.signature}
                          className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"
                          required
                />

                <button
                    className="px-8 py-3 rounded-md bg-[#131b30] text-white cursor-pointer hover:scale-95 transition-transform">
                    Preview Letter
                </button>
            </form>
        </div>
    )
}