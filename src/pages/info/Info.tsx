import {House} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function Info(){
    const navigate = useNavigate();


    return(
        <div className="flex-1 min-h-[100vh]">
            <header className="flex items-center justify-between px-10 pl-15 min-h-[80px] font-poppins">
                <img src="/Logo.svg" alt="My Image" width={120}/>
                <House height={25} width={25} color="white"
                       className="cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out ml-1 mr-5"
                       onClick={() => navigate("/")}
                />
            </header>
            <div className="flex flex-1 items-center justify-center mt-10">
                <div className="flex items-center justify-center text-white text-[18px]">
                    Hii Hellooo
                </div>
            </div>
        </div>
    )
}