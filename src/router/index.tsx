import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";

const baseRouter = () => {
    return <BrowserRouter>
    <Routes>    
        <Route path="/" element={<App />}>
            {/* 配置重定向 */}
            <Route path="/" element={<Navigate to={'/home'} />}>
            </Route>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
        </Route>
    </Routes>
</BrowserRouter>
}

export default baseRouter;