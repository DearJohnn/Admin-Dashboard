import { lazy } from "react"
const Dashboard = lazy(()=>import("../page/dashboard"));
const Energy = lazy(()=>import("../page/energy"));
const Equipment = lazy(()=>import("../page/equipment"));
const ContractManagement = lazy(()=>import("../page/financial"));
const ContractDetails = lazy(()=>import("../page/financial/contractDetails"));
const Billing = lazy(()=>import("../page/financial/billingManagement"));
const Leasing = lazy(()=>import("../page/leasing"));
const Maintenance = lazy(()=>import("../page/maintenance"));
const Overview = lazy(()=>import("../page/operation"));
const Article = lazy(()=>import("../page/operation/articlePublishing"));
const Comments = lazy(()=>import("../page/operation/comments"));
const TenantList = lazy(()=>import("../page/tenant/index"));
const AddTenant = lazy(()=>import("../page/tenant/addTenant"));
const Building = lazy(()=>import("../page/property"));
const Room = lazy(()=>import("../page/property/roomManagement"));
const Vehicle = lazy(()=>import("../page/property/vehicleManagement"));
const System = lazy(()=>import("../page/system"));
const Profile = lazy(()=>import("../page/profile"))


export const routerMap:any={
    "/dashboard":<Dashboard/>,
    "/users/list":<TenantList/>,
    "/users/add":<AddTenant/>,
    "/estate/tenement":<Building/>,
    "/estate/room":<Room/>,
    "/estate/car":<Vehicle/>,
    "/repair":<Maintenance/>,
    "/finance/contract":<ContractManagement/>,
    "/finance/surrender":<ContractDetails/>,
    "/finance/bill":<Billing/>,
    "/merchants":<Leasing/>,
    "/operation/all":<Overview/>,
    "/operation/article":<Article/>,
    "/operation/comments":<Comments/>,
    "/equipment":<Equipment/>,
    "/energy":<Energy/>,
    "/settings":<System/>,
    "/personal":<Profile/>
}