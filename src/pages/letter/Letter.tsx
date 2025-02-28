import {useState} from "react";
import {LetterLoader} from "@/components/LetterLoader.tsx";
import axios from "axios";
import {BASE_URL} from "@/data/data.ts";

export default function LetterPage() {
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full h-[100dvh] flex items-center justify-center flex-col">
            <h1 className="text-3xl text-white">Generate Letter</h1>

            <form
                className="rounded-md relative mt-10 w-[80%] max-w-[900px] max-h-[80%] overflow-auto p-6 bg-white flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    setLoading(true);

                    const formData = new FormData(e.target as HTMLFormElement);
                    const data = {
                        from: formData.get("from"),
                        date: formData.get("date"),
                        to: formData.get("to"),
                        salutation: formData.get("salutation"),
                        body: formData.get("body"),
                        signature: formData.get("signature"),
                    };

                    axios.post(`${BASE_URL}/letter/generate`, {
                        to: data.to,
                        from: data.from,
                        date: data.date,
                        prompt: 'The provided context is the rough body of the letter. Make the letter straight to the point and make the lang formal',
                        context: data.body
                    }).then((res) => {
                        console.log(res.data);
                        setLoading(false);
                    }).catch((err) => {
                        console.error(err);
                    });

                    console.log(data);

                }}
            >
                {loading ? <LetterLoader/> :
                    <>
                    <textarea placeholder="From Address"
                              name="from"
                              className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md mandatory" required/>
                        <input type="date" name="date" className="w-[40%] border py-2 px-2 mb-4 rounded-md mandatory"
                               required/>
                        <textarea placeholder="To Address"
                                  name="to"
                                  className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md mandatory" required/>
                        <div className="flex gap-3 ">
                            subject:
                            <textarea placeholder="Subject (filled by AI)"
                                      className="flex-1 py-2 px-2 border mb-4 min-h-[60px] rounded-md letter-text"
                                      disabled/>
                        </div>
                        <textarea placeholder="Salutation (optional)"
                                  name="salutation"
                                  className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
                        <textarea placeholder="Body (Type what you want the letter for, the rest we will handle)"
                                  name="body"
                                  className="w-full py-2 px-2 border mb-4 min-h-[200px] rounded-md mandatory" required/>
                        <textarea placeholder="Closing (will be filled by us)"
                                  className="w-full py-2 px-2 border mb-4 min-h-[60px] rounded-md letter-text"
                                  disabled/>
                        <textarea placeholder="Signature (optional)"
                                  name="signature"
                                  className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>

                        <button
                            className="px-8 py-3 rounded-md bg-[#131b30] text-white cursor-pointer hover:scale-95 transition-transform">Generate
                        </button>
                    </>
                }
            </form>
        </div>
    )
}