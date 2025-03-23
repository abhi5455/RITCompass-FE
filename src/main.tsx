import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './global.css'
import SignUp from "./pages/signup/SignUp.tsx";
import Home from "./pages/home/Home.tsx";
import Info from "./pages/info/Info.tsx";
import LetterPage from "@/pages/letter/Letter.tsx";
import Login from "@/pages/login/Login.tsx";
import NotFound from "@/components/404Page.tsx";
import FacultyDirectory from "@/pages/more-features/FacultyDirectory.tsx";
import BusDirectory from "@/pages/more-features/BusDirectory.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/auth/signup" element={<SignUp/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/letter" element={<LetterPage/>}/>
                <Route path="/bus-info" element={<BusDirectory/>}/>
                <Route path="/faculty-info" element={<FacultyDirectory/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);


