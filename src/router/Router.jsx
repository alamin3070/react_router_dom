import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Contact from './../page/Contact';
import Profile from '../page/About';
import Notfound from "../page/Notfound";
import Layout from "../Layout/Layout";
import Profiledetails from './../page/Profiledetails';
import Shop from './../page/Shop';

export const router=createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children:[
            {
            path:"/",
            element: <Home />,    
            },
            {
                path:"home",
                element: <Home />,    
            },
            {
                path:"contact",
                element: <Contact />,    
            },
            {
                path:"about",
                element: <Profile />,    
            },
            {
                path:"shop",
                element: <Shop />,    
            },
            {
                path:"profiledetails",
                element: <Profiledetails />,    
            },
            {
                path:"profiledetails/:id",
                element: <Profiledetails />,    
            },
            {
                path:"*",
                element: <Notfound />,    
            }
        ]
    },
    
    
]);