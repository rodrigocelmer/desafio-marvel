import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marvel from "./pages/Marvel";

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/marvel" element={<Marvel/>}/>
            </Routes>
        </BrowserRouter>
    )
}