import { Card, Row, Col, Table, Input, Button, Pagination, Popconfirm, type TableProps, Tree } from 'antd'
import { getAccountList } from '../../api/users';
import useDataList from '../../hooks/useDataList';
import type { TreeDataNode,TreeProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import withPermissions from '../../utils/withPermissions';

interface MenuType{
    lable:string;
    icon:string;
    key:string;
    children?:MenuType[]
}

interface DataType {
    id: number;
    accountName: string;
    auth: string;
    fullName: string;
    phone: string;
    department: string;
}

interface SearchType {
    accountName: string
}

const treeData: TreeDataNode[] = [
    {
        title: 'Dashboard',
        key: '/dashboard',
    },
    {
        title: 'Tenant Management',
        key: '/users',
    },
    {
        title: 'Property Management',
        key: '/estate',
        children: [
            {
                title: "Building Management",
                key: "/estate/tenement"
            },
            {
                title: "Room Management",
                key: "/estate/room"
            },
            {
                title: "Vehicle Information",
                key: "/estate/car"
            }

        ]
    },
    {
        title: 'Maintenance Requests',
        key: '/repair',
    },
    {
        title: 'Finacial Management',
        key: '/finance',
        children: [
            {
                title: "Contract Management",
                key: "/finance/contract"
            },
            {
                title: "Contract Details",
                key: "/finance/surrender"
            },
            {
                title: "Billing Management",
                key: "/finance/bill"
            }
        ]
    },
    {
        title: 'Leasing Management',
        key: '/merchants',
    },
    {
        title: 'Operations Management',
        key: '/operation',
        children: [
            {
                title: "Overview",
                key: "/operation/all"
            },
            {
                title: "Article Publishing",
                key: "/operation/article"
            },
            {
                title: "Comments",
                key: "/operation/comments"
            }
        ]
    },
    {
        title: 'Equipment Management',
        key: '/equipment',
    },
    {
        title: 'Energy Consuption',
        key: '/energy',
    },
    {
        title: 'System Settings',
        key: "/settings",
    },
    {
        title: 'Profile',
        key: "/personal",
    },
];

function extractTreeKeys(data:any){
    let keys:string[] = [];
    data.forEach((item:any)=>{
        if(item.children&&item.children.length>0){
            const childKeys:string[] = extractTreeKeys(item.children);
            keys=keys.concat(childKeys)
        }else{
            keys.push(item.key)
        }
    })
    return keys
}

function SystemSettings() {
    const AuthButton:React.FC<any> = withPermissions(["delete"],JSON.parse(sessionStorage.getItem("btnAuth") as string))(Button)
    const edit=(menu:MenuType[],accountName:string)=>{
        setAccountName(accountName);
        const newCheckedKeys = extractTreeKeys(menu);
        setCheckedKeys(newCheckedKeys)
    }
    const {
        dataList,
        page,
        pageSize,
        loading,
        total,
        formData,
        setDataList,
        setPage,
        setPageSize,
        setTotal,
        setLoading,
        setFormData,
        loadData,
        onPaginationChange,
        handleFormChange,
        reset
    } = useDataList<SearchType, DataType>({ accountName: "" }, getAccountList)
    const columns = [
        {
            title: "No.",
            key: "index",
            render: (text: any, record: any, index: any) => index + 1,
        },
        {
            title: "Account Name",
            dataIndex: "accountName",
            key: "accountName",
        },
        {
            title: "Access Level",
            dataIndex: "auth",
            key: "auth",
        },
        {
            title: "Assigned User",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Department",
            dataIndex: "department",
            key: "department",
        },
        {
            title: "Actions",
            key: "operate",
            render(value: string, record: any) {
                return (
                    <div className='flex'>
                        <Button
                            size="small"
                            type="primary"
                            className="mr"
                            onClick={()=>edit(record.menu,record.accountName)}
                        >
                            Edit Permissions
                        </Button>

                        <Popconfirm
                            title="Confirmation"
                            description="Are you sure you want to delete this account?"
                            okText="Yes"
                            cancelText="No"
                        >
                            <AuthButton size="small" type="primary" danger>
                                Delete Account
                            </AuthButton>
                            {/* <Button size="small" type="primary" danger>
                                Delete Account
                            </Button> */}
                        </Popconfirm>
                    </div>
                )
            }
        }
    ]
    const {menuList} = useSelector((state:any)=>state.authSlice)
    const [checkedKeys,setCheckedKeys] = useState<React.Key[]>([])
    const [accountName,setAccountName] = useState<string>("Current User")

    useEffect(()=>{
        setCheckedKeys(extractTreeKeys(menuList));
    },[])

    const handlePermissionChange = ()=>{
        console.log(checkedKeys,accountName);
    }
    const onCheck:TreeProps['onCheck'] = (checkedKeys)=>{
        setCheckedKeys(checkedKeys as React.Key[])
    }
    return <div>
        <Card className='search'>
            <Row gutter={16}>
                <Col span={18}>
                    <Input name="accountName" value={formData.accountName} placeholder='Please enter account name' onChange={handleFormChange}/>
                </Col>
                <Col span={6}>
                    <Button type='primary'>Search</Button>
                    <Button className='ml' type='primary'>Add Account</Button>
                </Col>
            </Row>
        </Card>
            <Row gutter={16} className='mt'>
                <Col span={8}>
                    <Card title={"Edit Permissions of " + accountName}>
                        <Tree
                            treeData={treeData}
                            checkable
                            checkedKeys={checkedKeys}
                            onCheck={onCheck}
                        />
                    </Card>
                    <Card className='mt'>
                        <Popconfirm
                            title="Change Confirmation"
                            description={`Are you confirm to change ${accountName}'s permissions`}
                            okText="Confirm"
                            cancelText="Cancel"
                            onConfirm={handlePermissionChange}
                        >
                            <Button type='primary'>Save Change</Button>
                        </Popconfirm>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card>


                        <Table
                            loading={loading}
                            columns={columns}
                            dataSource={dataList}
                            rowKey={record => record.id}
                            pagination={false}
                            scroll={{ x: 800 }}
                        />
                        <Pagination
                            className='mt'
                            style={{ justifyContent: "flex-end" }}
                            showQuickJumper
                            total={total}
                            current={page}
                            pageSize={pageSize}
                            onChange={onPaginationChange}
                        />
                    </Card>
                </Col>

            </Row>
    </div>
}

export default SystemSettings