import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PrivateRoutes/index";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;