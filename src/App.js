import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./pages/Appetizer/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import Wallet from "./pages/Wallet/index.js";
import { AuthProvider } from "./contexts/AuthContext.js";


export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/entry" element={<Entry />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );

}