import {House, ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupType, setSignupType] = useState("signup");

    return (
        <div className="flex-1 min-h-[100vh]">
            <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
                <img src="/Logo.svg" alt="My Image" width={120}/>
                <div className={'flex gap-6'}>
                    <div className={'text-[#bfc2ca] hover:text-white cursor-pointer'}
                        onClick={()=>{
                            if(signupType === 'signup')
                                setSignupType("login");
                            else
                                setSignupType("signup");
                        }}
                    >
                        {signupType === 'signup' ? 'Login' : 'Sign up'}
                    </div>
                    <House height={25} width={25} color="white"
                           className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-1 mr-5"
                           onClick={() => navigate("/")}
                    />
                </div>
            </header>
            <div className={' w-full flex items-center justify-center mt-15'}>
                <div
                    className="relative w-[400px] h-[500px] rounded-[20px] overflow-hidden shadow shadow-[0px_20px_50px_rgba(0, 102, 255, 0.3)]">

                    <img
                        src="/Signupbg.svg"
                        alt="My Image"
                        className="absolute object-cover w-full h-full z-0"
                    />
                    {signupType === 'signup' ?
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-5">
                            <div className="flex flex-col items-center justify-center text-[#f0f6fc] text-[22px]">
                                Sign up
                            </div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[80%]"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create Password"
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[80%]"
                            />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[80%]"
                            />
                            <button
                                className={'mt-1 text-[#f0f6fc] bg-[#4c5674] px-5 py-3 rounded-full text-[15px] cursor-pointer flex gap-2 hover:scale-[1.05] transition-transform duration-200 ease-in-out'}>
                                Sign up
                                <ArrowRight width={15}/>
                            </button>
                        </div> :
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-5">
                            <div className="flex flex-col items-center justify-center text-[#f0f6fc] text-[22px]">
                                Login
                            </div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[80%]"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="border-none focus:outline-[#828bac] focus:outline-1 p-2 px-5 rounded-[12px] bg-[#0e131f] text-[#828bac] w-[80%]"
                            />
                            <button
                                className={'mt-1 text-[#f0f6fc] bg-[#4c5674] px-5 py-3 rounded-full text-[15px] cursor-pointer flex gap-2 hover:scale-[1.05] transition-transform duration-200 ease-in-out'}>
                                Login
                                <ArrowRight width={15}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}