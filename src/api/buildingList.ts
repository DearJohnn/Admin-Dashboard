import type React from "react";
import { post } from "../utils/http/request";

interface searchType{
    page:number;
    pageSize:number;
    buildingName?:string;
    buildingManager?:string;
}

export function getBuildingList(data:searchType){
    return post("/buildingList",data)
}

export function deleteBuilding(id:React.Key){
    return post("/deleteBuilding",id)
}

export function editBuilding(id:React.Key){
    return post("/editBuilding",id)
}