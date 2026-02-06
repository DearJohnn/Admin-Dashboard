import axios from "axios";
import type { AxiosInstance,InternalAxiosRequestConfig,AxiosResponse } from "axios";

const http:AxiosInstance = axios.create({
    baseURL:"https://www.demo.com",
    timeout:5000
})

//Requset Interceptor
http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    return config
})

//Response Interceptor

http.interceptors.response.use((response:AxiosResponse)=>{
    return response
})

export default http