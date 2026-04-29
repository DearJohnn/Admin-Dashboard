import { Card, Row, Col, Table, Input, Button, Tag, Pagination } from "antd"
import React, { useEffect, useState } from "react";
import type { PaginationProps, TableProps } from "antd";
import { getContractList } from "../../api/contract";
import { setData, setTotal,setSearchData,setCurrentPage,setCurrentPageSize } from "../../store/financial/contractSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

interface FormData {
    contractId: string;
    person: string;
    phone: string;
}

interface DataType {
    key: string;
    contractId: string;
    contractType: string;
    contractName: string;
    startDate: string;
    endDate: string;
    client: string;
    serviceProvider: string;
    status: string;
}


function ContractManagement() {

    const [formData, setFormData] = useState<FormData>({
        contractId: "",
        person: "",
        phone: ""
    });
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const { data, total, searchData, currentPage, currentPageSize } = useSelector((state: any) => state.contractSlice);
    const navigate = useNavigate();
    const [searchParmas] = useSearchParams();
    const isReturn = searchParmas.get("return")
    


    const columns: TableProps<DataType>['columns'] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
                return index + 1;
            }
        },
        {
            title: "Contract ID",
            dataIndex: "contractId",
            key: "contractId"

        },
        {
            title: "Type",
            dataIndex: "contractType",
            key: "contractType"
        },
        {
            title: "Name",
            dataIndex: "contractName",
            key: "contractName"
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate"
        },
        {
            title: "End Date",
            dataIndex: "endDate",
            key: "endDate"
        },
        {
            title: "Client",
            dataIndex: "client",
            key: "client"
        },
        {
            title: "Service Provider",
            dataIndex: "serviceProvider",
            key: "serviceProvider"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render(value) {
                if (value == 1) {
                    return <Tag>Pending</Tag>
                } else if (value == 2) {
                    return <Tag color="green">Approved</Tag>
                } else {
                    return <Tag color="red">Rejected</Tag>
                }
            }
        },
        {
            title: "Opretion",
            key: "opretion",
            render(value, record) {
                return <Button type="primary" onClick={()=>detail(record.contractId)}>Contract Details</Button>
            }
        }
    ]

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

        dispatch(setSearchData({
            ...formData,
            [name]:value
        }))
    }

    const onChangePage: PaginationProps["onChange"] = (page,pageSize) => {
        setPage(page);
        dispatch(setCurrentPage(page));
        setPageSize(pageSize);
        dispatch(setCurrentPageSize(pageSize))
        loadData(page,pageSize);
    }

    const loadData = async (page:number,pageSize:number) => {
        setLoading(true);
        const { data: { data: { list, total } } } = await getContractList({ ...formData, page, pageSize });
        setLoading(false);
        dispatch(setData(list));
        dispatch(setTotal(total));
    }

    useEffect(() => {

        if(!isReturn||!data.length){
            loadData(page,pageSize);
        }

        if(isReturn){
            setFormData(searchData);
            setPage(currentPage);
            setPageSize(currentPageSize);
        }
        
    }, [])

    const detail=(contractId:string)=>{
        navigate("/finance/surrender?contractId=" + contractId)
    }

    const reset = ()=>{
        setFormData({
            contractId:"",
            person:"",
            phone:""
        })
        setPage(1);
        setPageSize(10);
        loadData(1,10);
    }

    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={8}>
                    <p>Contract No.</p>
                    <Input name="contractId" value={formData.contractId} onChange={handleChange} />
                </Col>
                <Col span={6}>
                    <p>Contact Person</p>
                    <Input name="person" value={formData.person} onChange={handleChange}/>
                </Col>
                <Col span={6}>
                    <p>Contact Number</p>
                    <Input name="phone" value={formData.phone} onChange={handleChange}/>
                </Col>
                <Col span={4}>
                    <Button type="primary" className="mr" onClick={()=>loadData(page,pageSize)}>Search</Button>
                    <Button onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                pagination={false}
                loading={loading}
                dataSource={data}
                rowKey={(record)=>record.contractId}
            />
            <Pagination
                className="mt"
                showQuickJumper
                defaultCurrent={1}
                style={{ justifyContent: "flex-end" }}
                total={total}
                onChange={onChangePage}
                current={page}
                pageSize={pageSize}
            />
        </Card>
    </div>
}
export default ContractManagement