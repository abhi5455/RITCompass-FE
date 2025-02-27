import {UserRound, Mic, Send} from 'lucide-react';
import {useEffect, useState} from "react";
import RotatingText from './components/RotatingText/RotatingText.tsx'
import GradientText from "./components/GradientText/GradientText.tsx";

function App() {
    const [promptText, setPromptText] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('Good Morning');

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting("Good Morning");
        } else if (hour >= 12 && hour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, []);

    return (
        <div className="flex-1 bg-[#101524] min-h-[100vh]">
            <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
                <img src="/Logo.svg" alt="My Image" width={120} />
                <div
                    className={'flex items-center justify-center bg-[#353c52] text-white text-[13px] w-fit px-3 py-2 rounded-full gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}>
                    <UserRound height={20} width={20}/>
                    Sign up
                </div>
            </header>
            <div className={'text-[#f2ddcc] text-[32px] flex flex-col items-center justify-center mt-15 w-full gap-2'}>
                <div
                    className="text-center mb-6 font-bold text-transparent text-5xl flex-col items-center justify-center mt-15 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text"
                >
                    <p className="mb-4">Hey {greeting}</p>
                    How can I help you Today?
                </div>

                <RotatingText
                    texts={['React', 'Bits', 'Is', 'Cool!']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </div>
            <div className={'absolute bottom-12 w-[100vw] flex items-center justify-center'}>

                <GradientText
                    colors={["#6074ff", "#9a57ff", "#af49ff", "#c951bf", "#ee3e61" , "#f92e3d"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="border-0 p-[1px] border-white rounded-[20px] bg-[#161c2e]"
                >
                <div className={'bg-[#161c2e] px-5 py-2 rounded-[20px] border-0 border-[#333848] w-[710px] flex justify-around items-center'}>
                    <img src="/Compass.svg" alt="My Image" height={32} width={32} className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out" />
                    <input
                        type="text"
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder="Type something..."
                        className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[550px]"
                    />
                    <Mic color={'#f2ddcc'} height={22} width={22} className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-1" />
                    <Send color={'#f2ddcc'} height={22} width={22} className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-2" />
                </div>
                </GradientText>
            </div>
        </div>
    )
}

export default App
