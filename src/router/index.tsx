import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import RequireAccess from '../utils/RequireAccess';


const Home = React.lazy(()=>import("../page/home"));
const Login = React.lazy(()=>import("../page/login"));
const NotFound = React.lazy(()=>import("../page/404"));

const router = createBrowserRouter([
    {
        path:"/",
        element: <RequireAccess allowed={true} redirectTo='/login'> <Home/> </RequireAccess>
    },
    {
        path:"/login",
        element: <RequireAccess allowed={false} redirectTo='/'> <Login/></RequireAccess>
    },
    {
        path:"*",
        element:<NotFound/>
    }
])

export default router