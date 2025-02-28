import {History, Info, Mail, Mic, Send, UserRound, X} from 'lucide-react';
import {useEffect, useState} from "react";
import GradientText from "../../components/GradientText/GradientText.tsx";
import {useNavigate} from "react-router-dom";
import Timeline, {IStep} from "../../components/Timeline.tsx";
import {WelcomeText} from "../../components/WelcomeText.tsx";
import axios from "axios";
import {BASE_URL} from "@/data/data.ts";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,} from "@/components/ui/sheet"
import {WordRotate} from "@/components/magicui/word-rotate.tsx";


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

const HistorySlideShow = ({isHistoryVisible, onClose}: {
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

function LoadingText() {
    return <WordRotate
        className="text-xl text-white"
        duration={7000}
        words={["Thinking...", "Categorizing...", "Querying data...", "Generating..."]}
    />
}

function Home() {
    const navigate = useNavigate();
    const [promptText, setPromptText] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('Good Morning');
    const [isTimelineVisible, setIsTimelineVisible] = useState<boolean>(false);
    const [isWelcomeMsgVisible, setIsWelcomeMsgVisible] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);
    const [timelines, setTimelines] = useState<IStep[][]>([]);
    const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);

    console.log(timelines)

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
    useEffect(() => {
        if (isWelcomeMsgVisible) {
            setTimeout(() => {
                setIsWelcomeMsgVisible(!isTimelineVisible);
            }, 800);
        } else {
            setIsWelcomeMsgVisible(!isTimelineVisible);
        }
    }, [isTimelineVisible]);

    return (
        <div className="flex flex-col h-full w-fullflex-1 min-h-[100vh]">
            <div className="w-full">
                <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
                    <img src="/Logo.svg" alt="My Image" width={120}/>
                    <div className={'flex items-center justify-center gap-6 cursor-pointer'}>
                        <Info color={'white'} width={24}
                              onClick={() => navigate("/info")}
                        />
                        <History color={'white'} width={24}
                                 onClick={() => {
                                     setIsHistoryVisible(!isHistoryVisible);
                                 }}
                        />
                        <div
                            className={'flex items-center justify-center bg-[#353c52] text-white text-[13px] w-fit px-3 py-2 rounded-full gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
                            onClick={() => {
                                navigate("/auth/signup")
                            }}
                        >
                            <UserRound height={20} width={20}/>
                            Sign up
                        </div>
                    </div>
                </header>
                <WelcomeText welcomeMsgVisible={isWelcomeMsgVisible} timelineVisible={isTimelineVisible}
                             greeting={greeting}/>
                <div
                    className={`absolute w-[100vw] flex items-center justify-center transition-all duration-500 ${
                        isTimelineVisible ? "top-[100px]" : "top-[550px]"}`}
                >
                    <GradientText
                        colors={["#6074ff", "#9a57ff", "#af49ff", "#c951bf", "#ee3e61", "#f92e3d"]}
                        animationSpeed={3}
                        showBorder={true}
                        className="border-0 p-[1px] border-white rounded-[20px] bg-[#161c2e]"
                    >
                        <div
                            className={'bg-[#161c2e] px-5 py-2 rounded-[20px] border-0 border-[#333848] w-[740px] flex justify-around items-center'}>
                            <img src="/Compass.svg" alt="My Image" height={32} width={32}
                                 className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out mr-1"/>
                            <input
                                type="text"
                                value={promptText}
                                onChange={(e) => setPromptText(e.target.value)}
                                placeholder="Type something..."
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[550px]"
                            />
                            <Mic color={'#f2ddcc'} height={22} width={22}
                                 className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-1"/>
                            <Send color={'#f2ddcc'} height={22} width={22}
                                  className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-2"
                                  onClick={() => {
                                      if (!isTimelineVisible)
                                          setIsTimelineVisible(true);

                                      console.log(BASE_URL)

                                      setLoading(true);
                                      axios.post(`${BASE_URL}/llm/ask`, {
                                          msg: promptText,
                                          chat_id: 'abc'
                                      }).then((response) => {
                                          console.log(response.data);
                                          setLoading(false);
                                          setTimelines(p => [response.data.data.timeline, ...p]);
                                      }).catch((error) => {
                                          console.error(error);
                                          setLoading(false);
                                      });
                                  }}
                            />

                            <Mail color={'#f2ddcc'} height={22} width={22}
                                  className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-2"
                                  onClick={() => navigate("/letter")}
                            />
                        </div>
                    </GradientText>
                </div>
            </div>

            {!isWelcomeMsgVisible &&
                <div
                    className={'flex flex-col items-center justify-center transition-all duration-500 mt-22 overflow-auto'}>
                    <div className="divide-y mt-3 divide-gray-700">
                        {loading && <LoadingText/>}

                        {!loading && timelines.length === 0 ?
                            <div className="w-full py-5 text-center text-2xl text-white">No data found</div> :
                            timelines.map((timeline, index) => (
                                <Timeline timelineData={timeline} key={index}/>
                            ))}
                    </div>
                </div>
            }
            <HistorySlideShow isHistoryVisible={isHistoryVisible}
                              onClose={(title?: string) => {
                                  setIsHistoryVisible(false)
                                  setPromptText(title ? title : '');
                              }}
            />
        </div>
    )
}

export default Home
