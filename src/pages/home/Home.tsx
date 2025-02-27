import {Info, Mic, NotebookPen, Send, UserRound} from 'lucide-react';
import {useEffect, useState} from "react";
import GradientText from "../../components/GradientText/GradientText.tsx";
import {useNavigate} from "react-router-dom";
import Timeline from "../../components/Timeline.tsx";
import {WelcomeText} from "../../components/WelcomeText.tsx";
import axios from "axios";
import {BASE_URL} from "../../data/data.ts";

function Home() {
    const navigate = useNavigate();
    const [promptText, setPromptText] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('Good Morning');
    const [isTimelineVisible, setIsTimelineVisible] = useState<boolean>(false);
    const [isWelcomeMsgVisible, setIsWelcomeMsgVisible] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);
    const [timelines, setTimelines] = useState([]);

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
        <div className="flex-1 min-h-[100vh]">
            <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
                <img src="/Logo.svg" alt="My Image" width={120}/>
                <div className={'flex items-center justify-center gap-6 cursor-pointer'}>
                    <Info color={'white'} width={24}
                          onClick={() => navigate("/info")}
                    />
                    <div
                        className={'flex items-center justify-center bg-[#353c52] text-white text-[13px] w-fit px-3 py-2 rounded-full gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
                        onClick={() => {
                            navigate("/signup")
                            console.log('wqasxzgkyuf')
                        }
                        }
                    >
                        <UserRound height={20} width={20}/>
                        Sign up
                    </div>
                </div>
            </header>
            <WelcomeText welcomeMsgVisible={isWelcomeMsgVisible} timelineVisible={isTimelineVisible}
                         greeting={greeting}/>
            <div className={`absolute w-[100vw] flex items-center justify-center transition-all duration-500 ${
                isTimelineVisible ? "top-[100px]" : "top-[550px]"}`}
            >
                <div className={'relative flex'}>
                <GradientText
                    colors={["#6074ff", "#9a57ff", "#af49ff", "#c951bf", "#ee3e61", "#f92e3d"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="border-0 p-[1px] border-white rounded-[20px] bg-[#161c2e]"
                >
                    <div
                        className={'bg-[#161c2e] px-5 py-2 rounded-[20px] border-0 border-[#333848] w-[710px] flex justify-around items-center'}>
                        <img src="/Compass.svg" alt="My Image" height={32} width={32}
                             className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out"/>
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
                                  }).catch((error) => {
                                      console.error(error);
                                      setLoading(false);
                                  });
                              }}
                        />
                    </div>
                </GradientText>
                {isTimelineVisible &&
                    <div className="relative group">
                        <div
                            className="absolute flex items-center justify-center transition-all duration-500 top-4 right-[-60px] hover:scale-[1.1] cursor-pointer duration-250 ease-in-out ml-2"
                        >
                            <NotebookPen color={'#f2ddcc'} height={22} width={22}/>
                        </div>
                        {/* Tooltip */}
                        <span
                            className="absolute top-[40px] right-[-150px] bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Draft a Letter
                            </span>
                    </div>
                }
                </div>
            </div>
            {!isWelcomeMsgVisible &&
                <div className={'flex items-center justify-center transition-all duration-500 mt-22'}>
                    {timelines.map((timeline, index) => (
                        <Timeline timelineData={timeline} key={index}/>
                    ))}
                    {loading && <div className="w-full py-5 text-center text-2xl text-white">Loading....</div>}
                </div>
            }
        </div>
    )
}

export default Home
