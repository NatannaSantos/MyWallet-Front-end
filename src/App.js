import {BrowserRouter, Route, Routes} from "react-router-dom";
import Appetizer from "./pages/Appetizer/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import Wallet from "./pages/Wallet/index.js";


export default function App() {
    return (
         <BrowserRouter>
         <Routes>
             <Route path="/" element={<Login />}/>
             <Route path="/register" element={<Register />}/>
             <Route path="/wallet" element={<Wallet />} />
             <Route path="/appetizer" element={<Appetizer />} />
         </Routes>
         </BrowserRouter>        
    );

}