import {ArrowRight, House} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="flex min-h-[100vh] items-center justify-center">
            <div
                className={'absolute top-5 right-10 flex items-center justify-center bg-[#353c52] text-white text-[13px] w-fit px-3 py-2 rounded-full gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
                onClick={() => navigate("/")}
            >
                <House height={20} width={20} color="white"
                       className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-1"
                />
                Home
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

                        <div className={'text-[#bfc2ca] hover:text-white cursor-pointer'}
                             onClick={() => {
                                 navigate('/auth/signup')
                             }}
                        >
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}