import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Programme from "../pages/Programme/Programme";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProgrammeDetails from "../pages/ProgrammeDetails/ProgrammeDetails";
import PrivatRoutes from "../routes/PrivatRoutes";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/programme',
                element: <Programme></Programme>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/programmesdetails/:id',
                element: <PrivatRoutes><ProgrammeDetails></ProgrammeDetails></PrivatRoutes> ,
                loader: () => fetch('/data.json')
            },
            {
                path: '/events',
                element: <PrivatRoutes><Events></Events></PrivatRoutes>
            },
            {
                path: '/gallery',
                element: <PrivatRoutes><Gallery></Gallery></PrivatRoutes>
            }
        ]
    
    }
]);

export default router;