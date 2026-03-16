import Mock from "mockjs"
Mock.setup({
    timeout:"200-600"
})

Mock.mock("https://www.demo.com/login","post",(options:any)=>{
    const {username,password}=JSON.parse(options.body);

    if(username==="admin2026"&&password==="admin123456"){
        return {
            code:200,
            message:"login success",
            data:{
                username:"admin2026",
                token:"admin123456"
            }
        }
    }else if(username==="manager2026"&&password==="manager123456"){
        return {
            code:200,
            message:"login success",
            data:{
                username:"manager2026",
                token:"manager123456"
            }
        }
    }else if(username=="user2026"&&password==="user123456"){
        return {
            code:200,
            message:"login success",
            data:{
                username:"user2026",
                token:"user123456"
            }
        }
    }else{
        return{
            code:401,
            message: "Incorrect username or password",
            data:{}
        }
    }
    
})