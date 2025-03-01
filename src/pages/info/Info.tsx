import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Info() {
    const navigate = useNavigate();

    return (
        <div className="flex-1 min-h-screen bg-gray-900 text-white pb-10">
            <header className="fixed top-0 w-full flex items-center justify-between px-10 py-5 font-poppins bg-gray-800">
                <img src="/Logo.svg" alt="My Image" width={120}/>
                <div
                    className={'absolute group top-4 right-8 flex items-center justify-center w-fit p-2 rounded-[20px] gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
                    onClick={() => navigate("/")}
                >
                    <House height={25} width={25} color="white"
                           className=""
                    />
                    <span
                        className="absolute top-[40px] right-5 bg-[#4c5674] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Home
                </span>
                </div>
            </header>

            <div className="flex flex-1 items-center justify-center pt-30">
                <div className="w-4/5 p-6 rounded-2xl bg-[#18213B] text-black shadow-lg">
                    <div className="flex items-center gap-4">
                        <div>
                            <span className="font-semibold text-[21px] text-[#2596be]">About</span>
                            <p className="mt-2 text-[15px] text-[#BFC2CA]">The Generalized Enquiry System (RITCOMPASS)
                                for RIT is a smart digital platform designed to help students navigate administrative
                                and academic procedures effortlessly. It acts as a campus-specific search engine,
                                providing clear, step-by-step guidance on tasks like applying for scholarships,
                                obtaining certificates, and other college-related queries. By offering structured and
                                accurate information, the system enhances accessibility, reduces confusion, and saves
                                time for students.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center mt-7">
                <div className="w-4/5 p-6 rounded-2xl bg-[#18213B] text-black shadow-lg">
                    <div className="flex items-center gap-4">
                        <div>
                            <span className="font-semibold text-[20px] text-[#2596be]">How to use?</span>
                            <p className="mt-2 text-[15px] text-[#BFC2CA]">Using the Generalized Enquiry System for RIT is simple and user-friendly. Upon opening the app, users can enter their query in the search bar, such as “How to apply for a scholarship” or “Steps to get a bonafide certificate.” The app will then display a structured, step-by-step guide outlining the necessary procedures, required documents, and approvals needed. Users can also explore categorized sections for frequently asked queries, view process flow diagrams for better understanding, and generate auto-filled request letters if applicable. For additional support, an interactive FAQ section and contact details of relevant authorities are available. The app ensures quick access to accurate college-related information, making administrative processes hassle-free for students and faculty alike.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-1 items-center justify-center mt-7">
                    <div className="w-4/5 p-6 rounded-2xl bg-[#18213B] text-black shadow-lg">
                        <div className="flex items-center gap-4">
                            <div>
                                <span className="font-semibold text-[20px] text-[#2596be]">Advantages of Signup</span>
                                <ul className={'text-[#BFC2CA] text[5px] mt-2 flex flex-col gap-2'}>
                                    <li><b>Personalized Experience</b>-Get tailored guidance based on your role</li>
                                    <li><b>Save & Track Queries</b>-Keep a track of your past queries and track the status of ongoing requests</li>
                                    <li><b>Faster access to information</b>-Recieve instant updates on procedural changes and announcements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}