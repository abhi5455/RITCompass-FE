import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './global.css'
import SignUp from "./pages/signup/SignUp.tsx";
import Home from "./pages/home/Home.tsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);


