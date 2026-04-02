import { Card, Row, Col, Input, Button, Table, Pagination, Tag, Popconfirm,message } from "antd"
import type { TableProps, PaginationProps } from "antd"
import type { DataType } from "./interface";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getTenantsList ,deleteTenant, deleteSelectedTenant} from "../../api/tenantList";
import TenantForm from "./tenantForm";
import { useDispatch } from "react-redux";
import { setTenantData } from "../../store/tenant/tenantSlice";


interface searchType {
    companyName: string;
    contact: string;
    phone: string;
}

function TenantList() {
    const [dataList, setDataList] = useState<DataType[]>([])
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [isModalOpen,setModalOpen] = useState<boolean>(false);
    const [titleName,setTitleName] = useState<string>("");
    const dispatch = useDispatch();
    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        setPage(page)
        setPageSize(pageSize)
    }
    const onSelectChange = (selectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(selectedRowKeys)
    }

    const disable = useMemo(()=>{
        return selectedRowKeys.length?false:true;
    },[selectedRowKeys])

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }

    const [formData, setFormData] = useState<searchType>({
        companyName: "",
        contact: "",
        phone: ""
    });


    const columns: TableProps<DataType>['columns'] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
                return index + 1;
            }
        },
        {
            title: "name",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "status",
            key: "status",
            dataIndex: "status",
            render(value, record, index) {
                if (value == 1) {
                    return <Tag color="green">Active</Tag>
                } else if (value == 2) {
                    return <Tag color="#f50">Suspended</Tag>
                } else if (value == 3) {
                    return <Tag color="red">Inactive</Tag>
                }
            }
        },
        {
            title: "phone",
            key: "tel",
            dataIndex: "tel"
        },
        {
            title: "email",
            key: "email",
            dataIndex: "email"
        },
        {
            title: "industry",
            key: "industry",
            dataIndex: "industry"
        },
        {
            title: "industry number",
            key: "industryNum",
            dataIndex: "industryNum"
        },
        {
            title: "organization code",
            key: "organizationCode",
            dataIndex: "organizationCode"
        },
        {
            title: "operate",
            key: "operate",
            render(value, record, index) {
                return <div className="flex">
                    <Button type="primary" size="small" onClick={()=>editTenant(record)}>Edit</Button>
                    <Popconfirm
                        title="Delete Confirmation"
                        description="Are you sure you want to delete this tenant?"
                        okText="Confirm"
                        cancelText="Cancel"
                        onConfirm={()=>confirm(record.id)}
                    >
                        <Button type="primary" danger size="small">Delete</Button>
                    </Popconfirm>
                </div>
            },
        }
    ];

    const confirm = async function(id:React.Key){
        const {data:{data:deleteTenantMessage}} = await deleteTenant(id);
        message.success(deleteTenantMessage);
        loadData();
    }

    const batchDelete = async function(ids:React.Key[]){
        const {data:{data:batchDeleteTenants}} = await deleteSelectedTenant(ids);
        message.success(batchDeleteTenants);
        loadData();
    }

    useEffect(() => {
        loadData();
    }, [page, pageSize])

    const editTenant = (record:DataType)=>{
        setModalOpen(true);
        setTitleName("Edit Tenant");
        dispatch(setTenantData(record))
    }

    const addNewTenant=()=>{
        setModalOpen(true);
        setTitleName("Add Tenant");
        dispatch(setTenantData({}))
    }

    const loadData = useCallback(async () => {
        setLoading(true);
        const { data: { data: { list, total } } } = await getTenantsList({ ...formData, page, pageSize });
        setLoading(false);
        setDataList(list);
        setTotal(total);
    },[])

    const reset = () => {
        setSelectedRowKeys([])
        setFormData({ companyName: "", contact: "", phone: "" })
        setPage(1)
        setPageSize(10)
        loadData();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const hideModal = useCallback(()=>{
        setModalOpen(false)
    },[])

    return <div className="tenant">
        <MyTenantForm visible={isModalOpen} hideModal={hideModal} title={titleName} loadData={loadData}/>
        <Card className="search">
            <Row gutter={16}>
                <Col span={8}>
                    <p>Company Name:</p>
                    <Input name="companyName" value={formData.companyName} onChange={handleChange} />
                </Col>
                <Col span={6}>
                    <p>Contact Name:</p>
                    <Input name="contact" value={formData.contact} onChange={handleChange} />
                </Col>
                <Col span={6}>
                    <p>Phone:</p>
                    <Input name="phone" value={formData.phone} onChange={handleChange} />
                </Col>
                <Col span={4}>
                    <Button type="primary" onClick={loadData}>Search</Button>
                    <Button className="ml" onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt tr">
            <Button type="primary" onClick={addNewTenant}>Add New Tenant</Button>
            <Button danger type="primary" className="ml" disabled={disable} onClick={()=>batchDelete(selectedRowKeys)}>Delete Selected</Button>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={dataList}
                rowKey={(record) => record.id}
                loading={loading}
                rowSelection={rowSelection}
                pagination={false}
            />
            <Pagination
                total={total}
                showSizeChanger
                showQuickJumper
                current={page}
                pageSize={pageSize}
                showTotal={(total) => `Total ${total} items`}
                className="mt"
                onChange={onChange}
                style={{ justifyContent: "flex-end" }}
            />
        </Card>
    </div>
}
const MyTenantForm = React.memo(TenantForm)
export default TenantList