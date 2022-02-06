import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./pages/Entry/index.js";
import Outflow from "./pages/Outflow/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import Wallet from "./pages/Wallet/index.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { TransactionProvider } from "./contexts/TransactionContext.js";


export default function App() {
    return (
        <AuthProvider>
            <TransactionProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/entry" element={<Entry />} />
                        <Route path="/outflow" element={<Outflow />} />
                    </Routes>
                </BrowserRouter>
            </TransactionProvider>
        </AuthProvider>
    );

}