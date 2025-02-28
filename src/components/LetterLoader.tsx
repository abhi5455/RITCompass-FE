import {SparklesText} from "@/components/magicui/sparkles-text.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

export function LetterLoader() {
    return <div className="relative">
        <div className="absolute w-full h-full flex inset-0 items-center justify-center">
            <SparklesText text={"Generating Letter..."} className="text-3xl text-gray-500"/>
        </div>
        <Skeleton
            className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton className="w-[40%] border py-2 px-2 mb-4 rounded-md"/>
        <Skeleton
            className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton className="py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton
            className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton
            className="w-full py-2 px-2 border mb-4 min-h-[200px] rounded-md"/>
        <Skeleton
            className="w-full py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton
            className="w-[40%] py-2 px-2 border mb-4 min-h-[60px] rounded-md"/>
        <Skeleton
            className="px-8 py-3 rounded-md"/>
    </div>
}