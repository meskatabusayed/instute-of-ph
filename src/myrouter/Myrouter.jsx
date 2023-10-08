import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Programme from "../pages/Programme/Programme";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProgrammeDetails from "../pages/ProgrammeDetails/ProgrammeDetails";


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
                element: <ProgrammeDetails></ProgrammeDetails>,
                loader: () => fetch('/data.json')
            },
        ]
    
    }
]);

export default router;