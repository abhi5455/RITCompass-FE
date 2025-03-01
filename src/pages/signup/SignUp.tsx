import {House, ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="flex min-h-[100vh] items-center justify-center">
            <div
                className={'absolute group top-4 right-8 flex items-center justify-center w-fit p-2 rounded-[20px] gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
                onClick={() => navigate("/")}
            >
                <House height={25} width={25} color="white"
                       className=""
                />
                {/* Tooltip */}
                <span
                    className="absolute top-[40px] right-5 bg-[#4c5674] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Home
                </span>
            </div>
            <div className={'w-full flex items-center justify-center h-fit'}>
                <div
                    className="relative w-[400px] h-[500px] rounded-[20px] overflow-hidden shadow shadow-[0px_20px_50px_rgba(0, 102, 255, 0.3)]">

                    <img
                        src="/Signupbg.svg"
                        alt="My Image"
                        className="absolute object-cover w-full h-full z-0"
                    />
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

                        <div className={'text-[#bfc2ca] hover:text-white cursor-pointer'}
                             onClick={() => {
                                 navigate('/auth/login')
                             }}
                        >
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}