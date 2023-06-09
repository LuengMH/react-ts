import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import User from "../views/User";
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/user',
        element: <User />
    },
]

export default routes;