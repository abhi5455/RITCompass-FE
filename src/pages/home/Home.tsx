import {HandHelping, History, Info, Mail, Mic, Send, UserRound} from 'lucide-react';
import {useEffect, useState} from "react";
import GradientText from "../../components/GradientText/GradientText.tsx";
import {useNavigate} from "react-router-dom";
import {WelcomeText} from "../../components/WelcomeText.tsx";
import axios from "axios";
import {BASE_URL, NO_PROMPT_YET_MESSAGES} from "@/data/data.ts";
import {HistorySlideShow} from "@/components/HistorySlideShow.tsx";
import {LoadingText} from "@/components/LoadingText.tsx";
import AIMessage from "@/components/AIMessage.tsx";
import {IReplyMsg} from "@/data/type.ts";
import {WordRotate} from "@/components/magicui/word-rotate.tsx";

function Header(props: { onClick: () => void | Promise<void>, onClick1: () => void, onClick2: () => void }) {
    return <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
        <img src="/Logo.svg" alt="My Image" width={120}/>
        <div className={"flex items-center justify-center gap-6 cursor-pointer"}>
            <Info color={"white"} width={24}
                  onClick={props.onClick}
            />
            <History color={"white"} width={24}
                     onClick={props.onClick1}
            />
            <div
                className={"flex items-center justify-center bg-[#353c52] text-white text-[13px] w-fit px-3 py-2 rounded-full gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out"}
                onClick={props.onClick2}
            >
                <UserRound height={20} width={20}/>
                Sign up
            </div>
        </div>
    </header>;
}

function Home() {
    const navigate = useNavigate();
    const [promptText, setPromptText] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('Good Morning');
    const [isTimelineVisible, setIsTimelineVisible] = useState<boolean>(false);
    const [isWelcomeMsgVisible, setIsWelcomeMsgVisible] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);
    const [replyMsgs, setReplyMsgs] = useState<IReplyMsg[]>([]);
    const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);


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
                <Header onClick={() => navigate("/info")} onClick1={() => {
                    setIsHistoryVisible(!isHistoryVisible);
                }} onClick2={() => {
                    navigate("/auth/signup")
                }}/>

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

                                      setLoading(true);
                                      axios.post(`${BASE_URL}/llm/ask`, {
                                          msg: promptText,
                                          chat_id: 'abc'
                                      }).then((response) => {
                                          console.log("RESPONSE:", response.data);
                                          setLoading(false);
                                          setReplyMsgs(p => [...response.data.data, ...p]);
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
                    {loading && <div className="text-center w-full py-5"><LoadingText/></div>}
                    {!loading && replyMsgs.length === 0 &&
                        <div className="w-3xl text-gray-500 flex gap-6 items-center mt-10">
                            <HandHelping/>
                            <WordRotate words={NO_PROMPT_YET_MESSAGES} duration={5000}/>
                        </div>
                    }
                    <div className="divide-y mt-3 divide-gray-700">
                        <AIMessage data={replyMsgs}/>
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
