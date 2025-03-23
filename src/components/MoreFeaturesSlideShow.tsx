import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {X, Lightbulb} from "lucide-react";

const moreFeaturesData = [
    {
        name: 'Bus Info',
        image: '/Bus.png',
        imageHeight: 70,
        imageWidth: 70,
        action: () => window.location.href = '/bus-info'
    },
    {
        name: 'Calendar',
        image: '/Calendar.png',
        imageHeight: 53,
        imageWidth: 53,
        action: () => window.open('https://drive.google.com/drive/folders/1woT0VLUqgWwqUclkNjNbasXYoqhj6ecJ', '_blank')
    },
    {
        name: 'Series Qs',
        image: '/QuestionPaper.png',
        imageHeight: 69,
        imageWidth: 69,
        action: () => window.open('https://drive.google.com/drive/folders/1rQNKqpFKu9tfD76teREh6BdbnOCMF_nB', '_blank')
    },
    {
        name: 'Faculty Info',
        image: '/Faculty.png',
        imageHeight: 58,
        imageWidth: 59,
        action: () => window.location.href = '/faculty-info'
    }
];

export const MoreFeaturesSlideShow = ({isMoreFeaturesVisible, onClose}: {
    isMoreFeaturesVisible: boolean,
    onClose: () => void
}) => {

    return (
        <Sheet open={isMoreFeaturesVisible} onOpenChange={() => onClose()}>
            <SheetContent className={'bg-[#0c1222] text-white min-w-[300px] max-w-[300px] py-3 pl-2 border-r border-gray-800'} style={{maxWidth: 300}}>
                <SheetHeader>
                    <SheetTitle className={'text-gray-300 flex justify-start items-center gap-3 pl-2'}>
                        <Lightbulb className="text-[#99a1af] opacity-70"/>
                        <span className="text-[#99a1af] opacity-70 font-medium">More Features</span>
                        <button
                            onClick={() => onClose()}
                            className="border-none outline-none absolute top-6 right-4 text-gray-400 hover:text-white p-1.5 rounded-lg transition hover:bg-gray-800/50"
                        >
                            <X size={18} className=""/>
                        </button>
                    </SheetTitle>
                    <SheetDescription className="text-[#f0f6fc] flex flex-wrap justify-center items-start px-2 gap-x-6 gap-y-8 mt-8 cursor-pointer">
                        <>
                            {moreFeaturesData.map((item, index) => (
                            <div key={index} className="relative flex flex-col justify-center items-center px-2 py-3 w-[100px] h-[109px] bg-[#1a2035] hover:bg-[#1f293d] rounded-md transition-all duration-200"
                                 onClick={item.action}
                            >
                                <img src={item.image} alt="Bus Image" height={item.imageHeight} width={item.imageWidth}
                                     className="mb-5 cursor-pointer hover:scale-[1.1] transition-transform duration-250 ease-in-out mr-1"/>
                                <div className="absolute bottom-2">{item.name}</div>
                            </div>
                            ))}
                        </>
                    </SheetDescription>

                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}