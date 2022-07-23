import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CardHeroes from "./pages/CardHeroes";

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/heroes" element={<CardHeroes/>}/>
            </Routes>
        </BrowserRouter>
    )
}