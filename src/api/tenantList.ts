import type React from "react";
import { post } from "../utils/http/request";
import type { DataType } from "../page/tenant/interface";

interface searchType{
    page:number;
    pageSize:number;
    companyName?:string;
    contact?:string;
    tel?:string;
}

export function getTenantsList(data:searchType){
    return post("/tenantList",data)
}

export function deleteTenant(id:React.Key){
    return post("/deleteTenant",{id})
}

export function deleteSelectedTenant(ids:React.Key[]){
    return post("/batchDeleteTenants",{ids})
}

export function editTenant(data:DataType){
    return post("/editTenant",data)
}