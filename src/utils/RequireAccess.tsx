import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface RequireAccessProps{
    allowed:boolean,
    redirectTo:string,
    children:React.ReactNode
}


function RequireAccess({allowed,redirectTo,children}:RequireAccessProps){
    const {token}=useSelector((state:any)=>state.authSlice);
    const isLogin = token?true:false;
    const navigate = useNavigate();

    useEffect(()=>{
        //allowed mains if users need to login, isLogin mains if users has logined
        if(allowed!==isLogin){
            navigate(redirectTo)
        }
    },[allowed,isLogin,redirectTo])

    return allowed === isLogin?<>{children}</>:<></>
}

export default RequireAccess