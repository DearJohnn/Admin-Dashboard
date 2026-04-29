import { Card, Row, Col, Input, Table, Pagination, Statistic, DatePicker, Select, Button, Tag } from 'antd'
import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons'
import type { TableProps, DatePickerProps } from 'antd'
import React, { useEffect, useMemo, useState } from 'react';
import { getBillList } from '../../api/contract';
import { exportToExcel } from '../../utils/exportToExcel';

interface DataType {
    key: string;
    invoiceId: string;
    status: string;
    roomNo: string;
    parkingNo: string;
    phone: string;
    managementFee: string;
    parkingFee: string;
    rent: string;
    startData: string;
    endData: string;
    discount: number;
    totalDue: number;
    method: string;
}

interface SearchType {
    date: string[];
    no: string;
    status: string;
    page: number;
    pageSize: number;
}

const { RangePicker } = DatePicker

function BillingManagement() {
    const [dataList, setDataList] = useState<DataType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0)
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [selectedRows, setSelectedRows] = useState<DataType[]>([])
    const [formData, setFormData] = useState<SearchType>(
        {
            date: [],
            no: "",
            status: "",
            page: 1,
            pageSize: 10
        }
    )

    const onSelectedChange = (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRowKeys(selectedRowKeys);
        setSelectedRows(selectedRows);
    }

    const header: string[] = [
        "invoiceId",
        "status",
        "roomNo",
        "parkingNo",
        "phone",
        "managementFee",
        "parkingFee",
        "rent",
        "startDate",
        "endData",
        "discount",
        "totalDue",
        "method"
    ]


    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectedChange,
        preserveSelectedRowKeys:true
    }

    const disabled = useMemo(() => {
        return selectedRowKeys.length ? false : true
    }, [selectedRowKeys])

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
                return index + 1
            },
            width: 80,
            fixed: "left"
        },
        {
            title: "Invoice ID",
            dataIndex: "invoiceId",
            key: "invoiceId",
            width: 150,
        },
        {
            title: "Payment Status",
            dataIndex: "status",
            key: "status",
            width: 130,
            render(value) {
                return value == 1
                    ? <Tag color="green">Paid</Tag>
                    : <Tag color="red">Outstanding</Tag>
            }
        },
        {
            title: "Unit No.",
            dataIndex: "roomNo",
            key: "roomNo",
            width: 120,
        },
        {
            title: "Parking Space",
            dataIndex: "parkingNo",
            key: "parkingNo",
            width: 140,
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
            width: 150,
        },
        {
            title: "Property Management Fee (Annual)",
            dataIndex: "managementFee",
            key: "managementFee",
            width: 200,
        },
        {
            title: "Parking Fee",
            dataIndex: "parkingFee",
            key: "parkingFee",
            width: 150,
        },
        {
            title: "Rent",
            dataIndex: "rent",
            key: "rent",
            width: 120,
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
            width: 140,
        },
        {
            title: "End Date",
            dataIndex: "endDate",
            key: "endDate",
            width: 140,
        },
        {
            title: "Discount Amount",
            dataIndex: "discount",
            key: "discount",
            width: 150,
        },
        {
            title: "Total Amount Due",
            dataIndex: "totalDue",
            key: "totalDue",
            width: 170,
        },
        {
            title: "Payment Method",
            dataIndex: "method",
            key: "method",
            width: 140,
        },
        {
            title: "Opretion",
            width: 260,
            key: "operate",
            fixed: "right",
            render() {
                return (
                    <>
                        <Button type="primary" size="small">Print</Button>
                        <Button type="primary" size="small" danger className="ml mr">Void</Button>
                        <Button type="primary" size="small">Refund</Button>
                    </>
                )
            }
        }
    ];
    const handleDateChange = (value: any, date: any) => {
        setFormData(prevState => ({
            ...prevState,
            date
        }))
    }

    const onPageChange = (page: number, pageSize: number) => {
        setPage(page);
        setPageSize(pageSize);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            no: value
        }))
    }

    const handleSelectChange = (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            status: value
        }))
    }

    const loadData = async () => {
        setLoading(true);
        const { data: { data: { list, total } } } = await getBillList({ page, pageSize, startData: formData.date[0], endData: formData.date[1], no: formData.no, status: formData.status });
        setLoading(false);
        setDataList(list);
        setTotal(total);
    }

    useEffect(() => {
        loadData();
    }, [page, pageSize])

    return <div>
        <Card>
            <Row>
                <Col span={6}>
                    <Statistic title="Total Amount Due ($)" value={164876.38} />
                </Col>
                <Col span={6}>
                    <Statistic title="Total Amount Paid ($)" value={65952.15} />
                </Col>
                <Col span={6}>
                    <Statistic title="Total Amount Refound ($)" value={27355.78} />
                </Col>
                <Col span={6}>
                    <Statistic title="Outstanding Amount ($)" value={99628.23} />
                </Col>
            </Row>
        </Card>
        <Card className='mt search'>
            <Row gutter={16}>
                <Col span={6}>
                    <p>Billing Date</p>
                    <RangePicker style={{ width: "100%" }} onChange={handleDateChange} />
                </Col>
                <Col span={6}>
                    <p>Unit / Parking Space</p>
                    <Input placeholder='Search by unit or parking space' value={formData.no} onChange={handleInputChange} />
                </Col>
                <Col span={6}>
                    <p>Payment Status</p>
                    <Select
                        onChange={handleSelectChange}
                        style={{ width: "100%" }}
                        options={[
                            { value: "1", label: "All" },
                            { value: "2", label: "Paid" },
                            { value: "3", label: "Outstanding" }
                        ]}

                    />
                </Col>
                <Col span={6}>
                    <Button type='primary' className='mr'>Search</Button>
                    <Button>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className='mt'>
            <Button type='primary' icon={<DownloadOutlined />} disabled={disabled} onClick={() => exportToExcel(selectedRows,header)}>Dwonload Excel</Button>
            <Button type='primary' icon={<DeleteOutlined />} className='ml' danger disabled={disabled}>Delete Selected</Button>
        </Card>
        <Card>
            <Table
                dataSource={dataList}
                columns={columns}
                pagination={false}
                scroll={{ x: 1200 }}
                rowKey={(record) => record.invoiceId}
                rowSelection={rowSelection}
                loading={loading}
            />
            <Pagination
                className='mt'
                style={{ justifyContent: "flex-end" }}
                showQuickJumper
                current={page}
                pageSize={pageSize}
                total={total}
                onChange={onPageChange}
            />
        </Card>
    </div>
}

export default BillingManagement