import React from 'react';
import RequireAccess from '../utils/RequireAccess';
import type { RouteObject } from 'react-router-dom';


const Home = React.lazy(()=>import("../page/home"));
const Login = React.lazy(()=>import("../page/login"));
const NotFound = React.lazy(()=>import("../page/404"));

// const router = createBrowserRouter([
//     {
//         path:"/",
//         element: <RequireAccess allowed={true} redirectTo='/login'> <Home/> </RequireAccess>
//     },
//     {
//         path:"/login",
//         element: <RequireAccess allowed={false} redirectTo='/'> <Login/></RequireAccess>
//     },
//     {
//         path:"*",
//         element:<NotFound/>
//     }
// ])

// export default router

export const staticRouters:RouteObject[]=[
    {
        path:"/",
        element: <RequireAccess allowed={true} redirectTo='/login'> <Home/> </RequireAccess>
    },
    {
        path:"/login",
        element: <RequireAccess allowed={false} redirectTo='/dashboard'> <Login/></RequireAccess>
    },
    {
        path:"*",
        element:<NotFound/>
    }
]