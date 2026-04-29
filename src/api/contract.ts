import { post } from "../utils/http/request";

interface SearchData{
    contractId:string;
    person:string;
    phone:string;
    page:number;
    pageSize:number;
}

interface SearchData2{
    page:number;
    pageSize:number;
    no:string;
    status:string;
    startData:string;
    endData:string;
}

export function getContractList(data:SearchData){
    return post("/contractList",data)
}

export function getBillList(data:SearchData2){
    return post("/billList",data)
}