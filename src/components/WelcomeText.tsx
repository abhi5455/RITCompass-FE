import RotatingText from "./RotatingText/RotatingText.tsx";

export function WelcomeText(props: { welcomeMsgVisible: boolean, timelineVisible: boolean, greeting: string }) {
    return <>
        {props.welcomeMsgVisible &&
            <div
                className={`text-[#f2ddcc] text-[32px] flex flex-col items-center justify-center mt-15 w-full gap-2 transition-all duration-800 ${
                    props.timelineVisible ? "opacity-0" : "opacity-100"
                }`}>
                <div
                    className="text-center mb-6 font-bold text-transparent text-5xl flex-col items-center justify-center mt-15 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text"
                >
                    <p className="mb-4">Hey {props.greeting}</p>
                    How can I help you Today?
                </div>

                <RotatingText
                    texts={["Get Things Done Faster at RIT!", "Find What You Need, Instantly", "Get Info Fast, Move Ahead!", "Navigate RIT with Ease!"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-[#f2ddcc] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all text-[22px]"
                    staggerFrom={"last"}
                    initial={{y: "100%"}}
                    animate={{y: 0}}
                    exit={{y: "-120%"}}
                    staggerDuration={0.055}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{type: "spring", damping: 30, stiffness: 400}}
                    rotationInterval={5000}
                />
            </div>
        }
    </>;
}