import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";


export default function App() {
    return (
         <BrowserRouter>
         <Routes>
             <Route path="/" element={<Login />}/>
             <Route path="/register" element={<Register />}/>
         </Routes>
         </BrowserRouter>        
    );

}