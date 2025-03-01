import {shuffleArray} from "@/lib/utils.ts";

export const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const NO_PROMPT_YET_MESSAGES = shuffleArray([
    "Lost in college paperwork? Don't worry, I'm basically the GPS for bureaucracy. Ask away!",
    "Need a bonafide certificate? Or any other enquires? just ask me.",
    "College rules are like software licenses—nobody reads them, but I know them all!",
    "Applying for a scholarship? I got the cheat sheet for that (legally, of course).",
    "\"Forward your request to the HOD\"—I feel you. But at least I can tell you what\"s next!",
    "College procedures: A drama in five acts. Let\"s skip to the ending, shall we?",
    "Filling forms, getting approvals, running between offices... college is basically an MMORPG. Let me be your quest guide!",
    "Need info? I\"m like Google, but I won\"t suggest \"Did you mean…\" every time you type something weird.",
    "Waiting for approvals? Sadly, I can\"t speed up the process, but I can tell you what comes next!",
    "\"Sir, how do I get this certificate?\"; let me enlighten you.",
    "College bureaucracy is a maze. Good news: I have the map!",
    "Bonafide Certificate? Fee payment? Lost ID card? I have the steps, so you don't have to \"trial and error\" your way through.",
    "\"How do I...?\" Don't worry, I exist to answer exactly that.",
    "WARNING: Randomly asking seniors may lead to misinformation. Ask me instead.",
    "Bookmark this chat—I'm your college survival guide!",
    "Finding information shouldn't be harder than your midterms. That's where I come in!",
    "College admin loves paperwork. I love making it easier for you. Fair trade, right?",
    "Stuck in the great Approval Relay Race? I can tell you the next checkpoint!",
    "Where do I go next? No worries, I got the full map of college bureaucracy. Let's navigate!"
]);
