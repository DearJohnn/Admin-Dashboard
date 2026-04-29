import {post} from "../utils/http/request"

interface SearchData{
    equipmentName:string;
    manager:string;
    page:number;
    pageSize:number;
}

export function getEquipmentList(data:SearchData){
    return post("/equipmentList",data)
}