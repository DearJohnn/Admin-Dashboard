import { message } from "antd";
import Mock from "mockjs"
import { data } from "react-router-dom";

Mock.setup({
    timeout: "200-600"
})
//login
Mock.mock("https://www.demo.com/login", "post", (options: any) => {
    const { username, password } = JSON.parse(options.body);

    if (username === "admin2026" && password === "admin123456") {
        return {
            code: 200,
            message: "login success",
            data: {
                username: "admin2026",
                token: "admin123456",
                btnAuth:["add","edit","delete"]
            }
        }
    } else if (username === "manager2026" && password === "manager123456") {
        return {
            code: 200,
            message: "login success",
            data: {
                username: "manager2026",
                token: "manager123456",
                btnAuth:["add","edit"]
            }
        }
    } else if (username == "user2026" && password === "user123456") {
        return {
            code: 200,
            message: "login success",
            data: {
                username: "user2026",
                token: "user123456",
                btnAuth:["add"]
            }
        }
    } else {
        return {
            code: 401,
            message: "Incorrect username or password",
            data: {}
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

const customizeMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "工作台",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "租户管理",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "租户列表",
                "key": "/users/list",
            },
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "物业管理",
        "key": "/estate",
        "children": [
            {
                "icon": "InsertRowLeftOutlined",
                "label": "楼宇管理",
                "key": "/estate/tenement",
            },

        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "报修管理",
        "key": "/repair"
    },
    {
        "icon": "ToolOutlined",
        "label": "设备管理",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "能源消耗",
        "key": "/energy",
    },
    {
        "icon": "UserOutlined",
        "label": "个人中心",
        "key": "/personal",
    }
]

//menu
Mock.mock('https://www.demo.com/menu', "get", (options: any) => {
    const token = sessionStorage.getItem("token");
    console.log("token", token)
    if (token == "admin123456") {
        return {
            code: 200,
            message: 'request success',
            data: adminMenuList
        }
    } else if (token == "user123456") {
        return {
            code: 200,
            message: 'requset success',
            data: userMenuList
        }
    } else if (token == "manager123456") {
        return {
            code: 200,
            message: 'request success',
            data: managerMenuList
        }
    } else {
        return {
            code: 200,
            message: 'requset failed',
            data: []
        }
    }
})

//Energy Usage Data
Mock.mock('https://www.demo.com/energyData', "get", () => {
    return {
        code: 200,
        message: "success",
        data: [
            {
                name: "Cooling",
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: "Heating",
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: "Water",
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: "Gas",
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: "Electricity",
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
})

Mock.mock('https://www.demo.com/parkingData', "get", () => {
    return {
        code: 200,
        message: "success",
        data: [
            {
                tag: "Enter",
                content: "08:24 AM MA G364YW"
            },
            {
                tag: "Out",
                content: "08:20 AM MA HA3G25"
            },
            {
                tag: "Enter",
                content: "07:15 AM MA HA3G25"
            },
            {
                tag: "Out",
                content: "06:59 AM NH IB7SD9"
            },
            {
                tag: "Out",
                content: "06:45 AM MA 2YVF72"
            },
            {
                tag: "Enter",
                content: "06:35 AM MA 2YVF72"
            },
            {
                tag: "Enter",
                content: "05:52 AM NH IB7SD9"
            }
        ]
    }
})

Mock.mock('https://www.demo.com/tenantList', "post", (options: any) => {
    const { pageSize } = JSON.parse(options.body)

    return {
        code: 200,
        message: "success",
        data: Mock.mock({
            [`list|${pageSize}`]: [
                {
                    "id": "@string('number',6)", //generate a random 6 number id
                    "name": "@name",
                    "status|1": ["1", "2", "3"],
                    "tel": () => {
                        return `(${Mock.Random.integer(200, 999)}) ${Mock.Random.integer(200, 999)
                            }-${Mock.Random.integer(1000, 9999)}`;
                    },
                    "industry|1": ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Food & Beverage', 'Media & Entertainment'],
                    "email": "@email",
                    "industryNum": "@string('number',6)",
                    "organizationCode": "@string('upper',9)"
                }

            ],
            total: 78
        })
    }
})

Mock.mock('https://www.demo.com/deleteTenant', 'post', (options: any) => {

    return {
        code: 200,
        message: "success",
        data: "Delete tenant success."
    }
})

Mock.mock('https://www.demo.com/batchDeleteTenants', 'post', (options: any) => {
    return {
        code: 200,
        message: "success",
        data: "Delete selected tenants success"
    }
})

Mock.mock('https://www.demo.com/editTenant', 'post', (options: any) => {
    return {
        code: 200,
        message: "success",
        data: "Opretion Success"
    }
})

Mock.mock('https://www.demo.com/buildingList', 'post', (options: any) => {
    return {
        code: 200,
        message: "success",
        data: Mock.mock({
            [`list|8`]: [
                {
                    "key": "@string('number',6)",
                    "buildingName": () => {
                        const names = ['Liberty', 'Madison', 'Broadway', 'Lexington', 'Hudson']
                        const suffix = ['Tower', 'Plaza', 'Center', 'Building']
                        const number = Mock.Random.integer(1, 999)

                        return `${number} ${Mock.Random.pick(names)} ${Mock.Random.pick(suffix)}`
                    },
                    "manager": "@name",
                    "phone": () => {
                        return `(${Mock.Random.integer(200, 999)}) ${Mock.Random.integer(200, 999)
                            }-${Mock.Random.integer(1000, 9999)}`;
                    },
                    "status|1": ["1", "2", "3"],
                    "vacancyRate": '@integer(0, 100)',
                    "propertyFee": '@float(3, 5, 1, 1)%'
                }
            ],
            total: 8
        })
    }
})

Mock.mock('https://www.demo.com/deleteBuilding', 'post', (options: any) => {
    return {
        code: 200,
        message: "success",
        data: "Delete Building Success"
    }
})

Mock.mock('https://www.demo.com/editBuilding', 'post', (options: any) => {
    return {
        code: 200,
        message: "success",
        data: "Opretion Success"
    }
})

function generateRooms() {
    const rooms = [];
    for (let i = 0; i < 50; i++) {
        const floor = 1 + Math.floor(i / 6);
        const roomNumber = floor * 100 + (101 + (i % 6));
        rooms.push({
            roomNumber,
            decorationType: Mock.Random.pick(['Shell', 'Fully Furnished']),
            area: Mock.Random.integer(70, 300),
            unitPrice: Mock.Random.integer(1, 3),
            src: "https://yuchens.neocities.org/roomPic.jpg"
        })
    }
    return rooms
}

Mock.mock('https://www.demo.com/room', 'post', (options: any) => {
    return {
        code: 200,
        message: 'success',
        data: {
            rooms: generateRooms()
        }
    }
})

Mock.mock('https://www.demo.com/contractList', 'post', (options: any) => {
    const { page, pageSize } = JSON.parse(options.body);

    console.log("Contract API received params:", JSON.parse(options.body));

    return {
        code: 200,
        message: "Success",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                contractId: '@string("number", 8)',

                contractType: '@pick(["Lease Agreement", "Custom Agreement", "Purchase Agreement"])',

                contractName: '@pick(["Standard Residential Lease Agreement", "Parking Space Lease Agreement", "Commercial Property Purchase Agreement"])',

                startDate: '@date("MM/dd/yyyy")',
                endDate: '@date("MM/dd/yyyy")',

                client: '@pick(["Evergreen Tech Inc.", "Blue Ocean LLC", "SixSix Media Inc."])',

                serviceProvider: 'NexSpace LLC',

                status: '@pick(["1", "2", "3"])',
            }],
            total: 54
        })
    }
});

Mock.mock('https://www.demo.com/billList', 'post', (options: any) => {
    const { page = 1, pageSize = 10 } = JSON.parse(options.body || "{}");

    console.log("Bill management API received params:", JSON.parse(options.body));

    return {
        code: 200,
        message: "Success",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                // Invoice ID
                invoiceId: '@string("number", 8)',

                // Payment Status: 1 = Paid, 2 = Outstanding
                'status|1': ['1', '2'],

                // US-style building + unit
                roomNo: function () {
                    return `${Mock.Random.integer(1, 999)} ${Mock.Random.pick(['Liberty', 'Madison', 'Broadway', 'Lexington', 'Hudson'])} ${Mock.Random.pick(['Tower', 'Plaza', 'Center', 'Building'])}, Unit ${Mock.Random.integer(100, 2000)}`
                },

                // Parking Space
                'parkingNo|1': ['P-109', 'P-227', 'P-106', 'P-158'],

                // US phone
                phone: '(617) 555-0123',

                // Property Management Fee (Annual)
                'managementFee|1': [1278.0, 2633.0, 3698.0],

                // Parking Fee (Monthly)
                'parkingFee|1': ["$200", "$250", "$300"],

                // Rent (Yearly)
                'rent|1': ["$25,800", "$19,800"],

                // Dates (US format)
                startDate: '@date("MM/dd/yyyy")',
                endDate: '@date("MM/dd/yyyy")',

                // Discount
                discount: 0.0,

                // Total Amount
                totalDue: '@float(1000, 50000, 2, 2)',

                // Payment Method (US standard)
                'method|1': [
                    "Credit Card",
                    "ACH",
                    "Wire Transfer",
                    "Check"
                ]
            }],
            total: 54
        })
    }
});

Mock.mock('https://www.demo.com/equipmentList', 'post', (options: any) => {
    const { page = 1, pageSize = 10 } = JSON.parse(options.body || "{}");

    console.log("Equipment API received params:", JSON.parse(options.body));

    return {
        code: 200,
        message: "Success",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                "id|+1": 1001,

                // Equipment Name（美式）
                equipmentName: function () {
                    return Mock.Random.pick([
                        "Water Supply System",
                        "HVAC Unit",
                        "Security Gate System",
                        "Surveillance Camera",
                        "Central Air Conditioning",
                        "EV Charging Station",
                        "Elevator System",
                        "Lighting Equipment"
                    ])
                },

                // Equipment ID
                no: function () {
                    return `EQ-${Mock.Random.string('upper', 2)}-${Mock.Random.integer(1000, 9999)}`
                },

                // Assigned Person
                "manager": '@name',

                // Phone（正确写法）
                tel: function () {
                    return `(617) 555-${Mock.Random.integer(1000, 9999)}`
                },

                // Expected Lifespan（years）
                time: function () {
                    return `${Mock.Random.pick([10, 15, 20, 25])} years`
                },

                // Remaining Lifespan
                rest: function () {
                    return `${Mock.Random.integer(1, 10)} years`
                },

                // Status
                "status|1": [1, 2, 3], // 1 Active, 2 Maintenance, 3 Out of Service

                // Last Maintenance Date（美式）
                last: '@date("MM/dd/yyyy")',

                // Model
                type: function () {
                    return `Model-${Mock.Random.integer(100, 999)}`
                },

                // Manufacturer（美式公司名）
                from: function () {
                    return Mock.Random.pick([
                        "General Electric",
                        "Honeywell",
                        "Siemens",
                        "Johnson Controls",
                        "Schneider Electric"
                    ])
                }
            }],
            total: 66
        })
    }
});

Mock.mock('https://www.demo.com/accountList', 'post', (options: any) => {
    return {
        code: 200,
        message: "Success",
        data: {
            list: [

                {
                    id: 1001,
                    accountName: "admin01",
                    fullName: "John Doe",
                    phone: "(617) 555-1298",
                    department: "Engineering",
                    auth: "admin",
                    menu: adminMenuList
                },
                {
                    id: 1002,
                    accountName: "user01",
                    fullName: "Maria Rodriguez",
                    phone: "(508) 555-7743",
                    department: "Marketing",
                    auth: "user",
                    menu: userMenuList
                },
                {
                    id: 1003,
                    accountName: "manager01",
                    fullName: "Thomas Nguyen",
                    phone: "(781) 555-3321",
                    department: "Finance",
                    auth: "manager",
                    menu: managerMenuList
                },
                {
                    id: 1004,
                    accountName: "user02",
                    fullName: "Ashley Smith",
                    phone: "(857) 555-9087",
                    department: "Human Resources",
                    auth: "customize",
                    menu: customizeMenuList
                },
                {
                    id: 1005,
                    accountName: "manager02",
                    fullName: "David Johnson",
                    phone: "(978) 555-6654",
                    department: "Operations",
                    auth: "manager",
                    menu: managerMenuList
                }

            ],
            total: 5
        }
    }
})

const statusMap = [
  { type: "Pending", progress: () => 1 },
  { type: "Processing", progress: () => Mock.Random.integer(2, 99) },
  { type: "Completed", progress: () => 100 }
];

interface TaskType{
    id:number;
    role:string;
    description:string;
    creator:string;
    date:string;
    type:string;
    progress:number;
}

const generateByStatus = (type:string, getProgress:()=>{}, count:number) => {
  return Mock.mock({
    [`list|${count}`]: [
      {
        id: "@integer(1000, 9999)",
        role: "@pick(['admin','manager','user'])",
        description: "Create @pick(['admin','manager','user']) permission account",
        creator: "@pick(['IT','HR','Finance','Marketing','Operations']) - @name",
        date: "@date('yyyy-MM-dd')",
        type: type,
        progress: "@integer(1,100)" 
      }
    ]
  }).list.map((item:TaskType) => ({
    ...item,
    progress: getProgress() 
  }));
};

// 3 + 3 + 3
let list = [
  ...generateByStatus("Pending", () => 1, 3),
  ...generateByStatus("Processing", () => Mock.Random.integer(2, 99), 3),
  ...generateByStatus("Completed", () => 100, 3)
];

for (let i = list.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [list[i], list[j]] = [list[j], list[i]];
}


Mock.mock('https://www.demo.com/profileTask','post',(options:any)=>{
    return{
        code:200,
        message:"Success",
        data:{
            list
        }
    }
})