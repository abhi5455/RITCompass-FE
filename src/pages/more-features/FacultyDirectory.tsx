"use client"

import {useState} from "react"
import {ChevronDown, House} from "lucide-react"
import {useNavigate} from "react-router-dom";

const departments = [
    {
        id: "cse",
        name: "Computer Science & Engineering (CSE)",
        faculty: [
            {
                id: 1,
                name: "Dr. Sarah Johnson",
                designation: "Professor",
                phone: "+1 (555) 123-4567",
                email: "sarah.johnson@college.edu",
            },
            {
                id: 2,
                name: "Dr. Michael Chen",
                designation: "Associate Professor",
                phone: "+1 (555) 234-5678",
                email: "michael.chen@college.edu",
            },
            {
                id: 3,
                name: "Prof. Emily Rodriguez",
                designation: "Assistant Professor",
                phone: "+1 (555) 345-6789",
                email: "emily.rodriguez@college.edu",
            },
        ],
    },
    {
        id: "ec",
        name: "Electronics & Communication (ECE)",
        faculty: [
            {
                id: 4,
                name: "Dr. James Wilson",
                designation: "Department Chair",
                phone: "+1 (555) 456-7890",
                email: "james.wilson@college.edu",
            },
            {
                id: 5,
                name: "Dr. Aisha Patel",
                designation: "Professor",
                phone: "+1 (555) 567-8901",
                email: "aisha.patel@college.edu",
            },
        ],
    },
    {
        id: "mechanical",
        name: "Mechanical Engineering (ME)",
        faculty: [
            {
                id: 6,
                name: "Prof. David Kim",
                designation: "Associate Professor",
                phone: "+1 (555) 678-9012",
                email: "david.kim@college.edu",
            },
            {
                id: 7,
                name: "Dr. Lisa Thompson",
                designation: "Professor",
                phone: "+1 (555) 789-0123",
                email: "lisa.thompson@college.edu",
            },
        ],
    },
    {
        id: "civil",
        name: "Civil Engineering (CE)",
        faculty: [
            {
                id: 8,
                name: "Dr. Robert Garcia",
                designation: "Department Chair",
                phone: "+1 (555) 890-1234",
                email: "robert.garcia@college.edu",
            },
            {
                id: 9,
                name: "Prof. Jennifer Lee",
                designation: "Assistant Professor",
                phone: "+1 (555) 901-2345",
                email: "jennifer.lee@college.edu",
            },
        ],
    },
    {
        id: "eee",
        name: "Electrical & Electronics Engineering (EEE)",
        faculty: [
            {
                id: 10,
                name: "Dr. Thomas Brown",
                designation: "Professor",
                phone: "+1 (555) 012-3456",
                email: "thomas.brown@college.edu",
            },
            {
                id: 11,
                name: "Dr. Maria Gonzalez",
                designation: "Associate Professor",
                phone: "+1 (555) 123-4567",
                email: "maria.gonzalez@college.edu",
            },
        ],
    },
]

export default function FacultyDirectory() {
    const navigate = useNavigate()
    const [openDepartment, setOpenDepartment] = useState<string | null>(null)
    const toggleDepartment = (departmentId: string) => {
        setOpenDepartment(openDepartment === departmentId ? null : departmentId)
    }

    return (
        <div className="min-h-screen bg-[#0f172a] text-white">
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
            </header>
            {/* Faculty Directory with Departments */}
            <div className="container mx-auto px-4 pb-16 pt-[100px]">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Faculty Directory
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explore our esteemed faculty members, their designations, contact details, and areas of
                        expertise
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">

                    {/* Custom Accordion */}
                    <div className="space-y-4">
                        {departments.map((department) => (
                            <div
                                key={department.id}
                                className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50 transition-all duration-300"
                            >
                                {/* Custom AccordionTrigger */}
                                <div
                                    className="px-6 py-4 hover:bg-slate-700/50 transition-colors cursor-pointer flex justify-between items-center"
                                    onClick={() => toggleDepartment(department.id)}
                                >
                                    <div className="flex items-center">
                                        <span className="text-lg font-medium">{department.name}</span>
                                        <span className="ml-2 text-sm text-slate-400">{department.faculty.length}</span>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300 ${
                                            openDepartment === department.id ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>

                                {/* Custom AccordionContent with smooth transition */}
                                <div
                                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                                        openDepartment === department.id ? "pt-2 max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    {department.faculty.map((faculty) => (
                                        <div key={faculty.id}
                                             className="bg-slate-700/50 border border-slate-600 rounded-lg">
                                            <div className="p-4">
                                                <div className="flex items-start gap-4">
                                                    {/* Custom Avatar */}
                                                    <div
                                                        className="h-14 w-14 border-2 border-[#f2ddcc] rounded-full overflow-hidden flex items-center justify-center bg-slate-700">
                                                        {faculty?.image ? (
                                                            <img
                                                                src={faculty.image || "/placeholder.svg"}
                                                                alt={faculty.name}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        ) : (
                                                            <span className="text-[#f2ddcc] font-medium">
                                            {faculty.name.split(" ").map((n) => n[0]).join("")}
                                        </span>
                                                        )}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h3 className="font-medium text-white">{faculty.name}</h3>
                                                        <p className="text-sm text-slate-300">{faculty.designation}</p>
                                                        <div className="pt-1 space-y-1">
                                                            <p className="text-xs text-slate-400">{faculty.phone}</p>
                                                            <p className="text-xs text-[#6d94ff]">{faculty.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

