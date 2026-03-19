import type { MenuItem } from "../components/navLeft";
import type { RouteObject } from "react-router-dom";
import { routerMap } from "../router/routerMap";

export function generateRoutes(menu:MenuItem[]):RouteObject[]{
    return menu.map((item:MenuItem)=>{
        let hasChildren=item.children
        let routerObj:RouteObject = {
            path:item.key,
            element:hasChildren?null:routerMap[item.key]
        }
        if(item.children){
            routerObj.children=generateRoutes(item.children)
        }
        return routerObj
    })
}