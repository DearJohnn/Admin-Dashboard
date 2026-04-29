import {post,get} from "../utils/http/request"

interface LoginData{
    username:string,
    password:string
}

interface SearchData{
    accountName:string
}

export function login(data:LoginData){
    return post("/login",data)
}

export function getMenu(){
    return get("/menu")
}

export function getAccountList(data:SearchData){
    return post("/accountList",data)
}