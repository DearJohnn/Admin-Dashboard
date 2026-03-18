import { message } from "antd";
import Mock from "mockjs"
Mock.setup({
    timeout:"200-600"
})
//login
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

const adminMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {
        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {
                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",
            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Requests",
        "key": "/repair"
    },
    {
        "icon": "DollarOutlined",
        "label": "Financial Management",
        "key": "/finance",
        "children": [
            {
                "icon": "ProfileOutlined",
                "label": "Contract Management",
                "key": "/finance/contract",
            },
            {
                "icon": "FrownOutlined",
                "label": "Contract Details",
                "key": "/finance/surrender",
            },
            {
                "icon": "FileTextOutlined",
                "label": "Billing Management",
                "key": "/finance/bill",
            }
        ]
    },
    {
        "icon": "AuditOutlined",
        "label": "Leasing Management",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "Operations Management",
        "key": "/operation",
        "children": [
            {
                "icon": "FundViewOutlined",
                "label": "Overview",
                "key": "/operation/all",
            },
            {
                "icon": "ReadOutlined",
                "label": "Article Publishing",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "Comments",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "PrinterOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "System Settings",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "Profile",
        "key": "/personal",
    }
]

const userMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {
        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {
                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",
            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Requests",
        "key": "/repair"
    },
    {
        "icon": "PrinterOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "UserOutlined",
        "label": "Profile",
        "key": "/personal",
    }
]

const managerMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {
        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {
                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",
            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Requests",
        "key": "/repair"
    },
    {
        "icon": "AuditOutlined",
        "label": "Leasing Management",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "Operations Management",
        "key": "/operation",
        "children": [
            {
                "icon": "FundViewOutlined",
                "label": "Overview",
                "key": "/operation/all",
            },
            {
                "icon": "ReadOutlined",
                "label": "Article Publishing",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "Comments",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "PrinterOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "System Settings",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "Profile",
        "key": "/personal",
    }
]

//menu
Mock.mock('https://www.demo.com/menu',"get",(options:any) => {
    const token =sessionStorage.getItem("token");
    console.log("token",token)
    if(token == "admin123456"){
        return{
            code:200,
            message:'request success',
            data:adminMenuList
        }
    }else if(token == "user123456"){
        return{
            code:200,
            message:'requset success',
            data:userMenuList
        }
    }else if(token == "manager123456"){
        return{
            code:200,
            message:'request success',
            data:managerMenuList
        }
    }else{
        return{
            code:200,
            message:'requset failed',
            data:[]
        }
    }
})