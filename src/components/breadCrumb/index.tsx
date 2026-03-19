import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import type { MenuItem } from "../navLeft";
import { Breadcrumb } from "antd";

function findBreadCrumbPath(path:string,menuItems:MenuItem[]):string[]{
    const pathSegments:string[]=[];
    function findPath(currentPath:string,menuItems:MenuItem[]):string[]{
        for(let item of menuItems){
            if(currentPath.startsWith(item.key)){
                pathSegments.push(item.label);
                if(item.children){
                    findPath(currentPath,item.children)
                }
                break;
            }
        }
        return pathSegments
    }

    return findPath(path,menuItems)
}


function MyBreadCrumb(){
    const location = useLocation();
    const {menuList} = useSelector((state:any)=>state.authSlice)
    const breadList = findBreadCrumbPath(location.pathname,menuList).map(item=>({title:item}));
    return <Breadcrumb items={breadList} className="mt mb"/>
}

export default MyBreadCrumb;