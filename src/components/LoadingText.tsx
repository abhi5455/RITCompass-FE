import {WordRotate} from "@/components/magicui/word-rotate.tsx";

export function LoadingText() {
    return <WordRotate
        className="text-xl text-white"
        duration={5000}
        words={["Thinking...", "Categorizing...", "Querying data...", "Generating..."]}
    />
}