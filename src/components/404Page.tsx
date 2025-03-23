import {useNavigate} from "react-router-dom";



export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0e1525] flex flex-col">
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        404 - Page Not Found
                    </span>
                </h1>
                <h2 className="text-2xl md:text-2xl font-bold mb-12">
                    <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                        Looks like you're lost
                    </span>
                </h2>
                <button
                    onClick={()=>(navigate("/"))}
                    className="cursor-pointer bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-[15px] text-[16px] font-medium hover:opacity-90 transition-opacity mb-12"
                >
                    Return Home
                </button>
            </main>
        </div>
    )
}

