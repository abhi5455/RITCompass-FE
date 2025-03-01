import Timeline from "@/components/Timeline.tsx";
import {IReplyMsg} from "@/data/type.ts";
import {BotMessageSquare} from "lucide-react";
import {memo} from "react";

interface AIMsgProp {
    data: IReplyMsg[];
}

function Message({message}: { message: string }) {
    return <div className="text-white flex gap-6 max-w-3xl">
        <div
            className="aspect-square flex items-center justify-center w-14 h-14 rounded-full bg-blue-500"
        >
            <BotMessageSquare className="size-7 scale-x-[-1]"/>
        </div>
        <p className="text-xl pt-3">{message}</p>
    </div>
}

function AIMessage({data}: AIMsgProp) {
    return <div className="pt-5 divide-y divide-gray-700 space-y-6">
        {data.map((msg, index) => {
            return <div key={index} className="pb-4">
                {msg.type === "timeline" ?
                    <Timeline steps={msg.timeline!} remark={msg.remarks}/> :
                    <Message message={msg.message!}/>
                }
            </div>
        })}
    </div>
}

export default memo(AIMessage);