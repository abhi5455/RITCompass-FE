import {BusFront, MapPin, Route, Clock, House} from "lucide-react"
import {useNavigate} from "react-router-dom";

const buses = [
    {
        busNo: "101",
        currentLocation: "Kottayam Bus Stand",
        route: "Kottayam Bus Stand → Nagampadam → Kanjikkuzhy → Ettumanoor",
        departure: "06:30 AM",
        arrival: "07:45 AM",
        lastUpdated: "2 mins ago",
    },
    {
        busNo: "102",
        currentLocation: "Ettumanoor",
        route: "Ettumanoor → Caritas Junction → Kanjikkuzhy → Kottayam Bus Stand",
        departure: "07:00 AM",
        arrival: "08:15 AM",
        lastUpdated: "15 mins ago",
    },
    {
        busNo: "103",
        currentLocation: "Changanassery",
        route: "Changanassery → Karukachal → Pampady → Kottayam Bus Stand",
        departure: "07:15 AM",
        arrival: "08:30 AM",
        lastUpdated: "1 min ago",
    },
    {
        busNo: "104",
        currentLocation: "Pala",
        route: "Pala → Bharananganam → Ettumanoor → Kottayam Bus Stand",
        departure: "08:00 AM",
        arrival: "09:30 AM",
        lastUpdated: "Just now",
    },
    {
        busNo: "105",
        currentLocation: "Vaikom",
        route: "Vaikom → Kaduthuruthy → Ettumanoor → Kanjikkuzhy → Kottayam Bus Stand",
        departure: "08:30 AM",
        arrival: "09:45 AM",
        lastUpdated: "3 mins ago",
    },
    {
        busNo: "106",
        currentLocation: "Pampady",
        route: "Pampady → Manarcad → Kanjikkuzhy → Kottayam Bus Stand",
        departure: "09:00 AM",
        arrival: "10:15 AM",
        lastUpdated: "7 mins ago",
    },
];


export default function BusDirectory() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-6">
            {/* Header */}
            <header className="fixed top-0 w-full flex flex-col items-center justify-between bg-[#0f172a] z-50">
                <div className="flex items-center justify-start w-full pl-15 mb-5 min-h-[80px] font-poppins">
                    <img src="/Logo.svg" alt="My Image" width={120}/>
                </div>
                <div
                    className={'absolute group top-4 right-15 flex items-center justify-center w-fit p-2 rounded-[20px] gap-2 cursor-pointer hover:scale-[1.05] transition-transform duration-250 ease-in-out'}
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

                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Bus Directory
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Find all available bus services, their current locations, and complete route information
                    </p>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-6xl mx-auto pt-[260px]">
                {/* Bus cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {buses.map((bus) => (
                        <div
                            key={bus.busNo}
                            className="bg-[#1a2234] rounded-lg p-6 border border-gray-700 transition-all flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full shadow-lg shadow-blue-500/20">
                                <BusFront className="h-7 w-7 text-white"/>
                                </div>
                                <h2 className="text-xl font-semibold">Bus {bus.busNo}</h2>
                            </div>

                            <div className="flex-1 flex flex-col justify-between space-y-4 text-gray-300">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-start gap-3 mb-5">
                                        <div
                                            className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-full shadow-lg shadow-purple-500/20 mt-0.5">
                                            <MapPin className="h-4 w-4 text-white"/>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center gap-3">
                                                <p className="text-sm text-gray-400">Current Location</p>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Clock className="h-3 w-3 mr-1"/>
                                                    <span>Updated {bus.lastUpdated}</span>
                                                </div>
                                            </div>
                                            <p>{bus.currentLocation}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div
                                            className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-full shadow-lg shadow-cyan-500/20 mt-0.5">
                                            <Route className="h-4 w-4 text-white"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Route</p>
                                            <p>{bus.route}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-700/50">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Departure</span>
                                        <span>{bus.departure}</span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-1">
                                        <span className="text-gray-400">Arrival</span>
                                        <span>{bus.arrival}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </main>
        </div>
    )
}

