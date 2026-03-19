import { data, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"
import { generateRoutes } from "./utils/generatesRoutes"
import { staticRouters } from "./router"
import { createBrowserRouter } from "react-router-dom"
import { getMenu } from "./api/users"
import { useDispatch } from "react-redux"
import { setMenu } from "./store/login/authSlice"
import { useSelector } from "react-redux"

function App() {
  const {token} = useSelector((state:any)=>state.authSlice)
  const [routers,setRouter] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(()=>{

    async function loadData() {
      const {data:{data}} = await getMenu();
      if(data.length){
        dispatch(setMenu(data));
        const dynamicRouters = generateRoutes(data);
        const newRoutes=[...staticRouters];
        newRoutes[0].children=dynamicRouters;
        newRoutes[0].children[0].index=true;
        const router=createBrowserRouter(newRoutes);
        setRouter(router);
      }else{
        const router=createBrowserRouter(staticRouters);
        setRouter(router);
      }
    }
    loadData();
    
  },[token])

  if(routers){
    return (
        <RouterProvider router={routers}></RouterProvider>
    )
  }else{
    return <div>123</div>
  }
}

export default App
