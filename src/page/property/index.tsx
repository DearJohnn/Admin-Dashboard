import { Card, Row, Col, Table, Input, Button, Tag, Progress, Badge, Pagination, Popconfirm, message } from "antd"
import type { TableProps, PaginationProps } from "antd"
import React, { useCallback, useEffect, useState } from "react";
import type { BuildingType } from "./interface";
import { getBuildingList, deleteBuilding } from "../../api/buildingList";
import EditBuilding from "./editBuilding";
import { useDispatch } from "react-redux";
import { setBuildingData } from "../../store/building/buildingSlice";

interface searchType {
    buildingName: string;
    buildingManager: string;
}




function BuildingManagement() {

    const columns: TableProps<BuildingType>['columns'] = [
        {
            title: "No.",
            key: "index",
            render: (value, record, index) => index + 1
        },
        {
            title: "Building Name",
            dataIndex: "buildingName",
            key: "buildingnNme"
        },
        {
            title: "Building Manager",
            dataIndex: "manager",
            key: "manager"
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (value) => {
                if (value == 1) {
                    return <Tag color="#f50">Under Construction</Tag>
                } else if (value == 2) {
                    return <Tag color="#2db7f5">Completed</Tag>
                } else if (value == 3) {
                    return <Tag color="#87d068">Occupied</Tag>
                }
            }
        },
        {
            title: "Vacancy Rate",
            dataIndex: "vacancyRate",
            key: "vacancyRaye",
            render(value) {
                return <Progress percent={value} status="active" />
            }
        },
        {
            title: "Property Fee",
            dataIndex: "propertyFee",
            key: "propertyFee",
            render(value) {
                return <Badge color="green" text={value}></Badge>
            }
        },
        {
            title: "Operation",
            key: "operation",
            render(record) {
                return <div className="flex">
                    <Button type="primary" onClick={() => editBuilding(record)}>Edit</Button>
                    <Popconfirm
                        title="Delete Confirmation"
                        description="Are you sure you want to delete this building?"
                        okText="Confirm"
                        cancelText="Cancel"
                        onConfirm={() => confirm(record.key)}
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>

                </div>
            }
        }
    ]

    const [buildingList, setBuildingList] = useState<BuildingType[]>([])
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<searchType>({
        buildingName: "",
        buildingManager: ""
    });
    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
    }

    const loadData = useCallback(async () => {
        setLoading(true)
        const { data: { data: { list, total } } } = await getBuildingList({ ...formData, page, pageSize });
        setLoading(false)
        setBuildingList(list);
        setTotal(total);
    }, [])



    useEffect(() => {
        loadData();
    }, [page, pageSize])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const reset = () => {
        setFormData({ buildingName: "", buildingManager: "" });
        setPage(1);
        setPageSize(10);
        loadData();
    }

    const confirm = async (id: React.Key) => {
        const { data: { data: deleteRes } } = await deleteBuilding(id);
        message.success(deleteRes);
        loadData();
    }


    const editBuilding = (record: BuildingType) => {
        setIsModalOpen(true);
        dispatch(setBuildingData(record));
    }

    const handleHide = useCallback(() => {
        setIsModalOpen(false);
    }, [])


    return <div>
        <EditBuilding visible={isModalOpen} handleHide={handleHide} loadData={loadData} />
        <Card className="search">
            <Row gutter={16}>
                <Col span={10}>
                    <p>Building Name :</p>
                    <Input name="buildingName" value={formData.buildingName} onChange={handleChange}></Input>
                </Col>
                <Col span={10}>
                    <p>Manager Name :</p>
                    <Input name="buildingManager" value={formData.buildingManager} onChange={handleChange}></Input>
                </Col>
                <Col span={4}>
                    <Button type="primary" onClick={loadData}>Search</Button>
                    <Button className="ml" onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={buildingList}
                rowKey={(record) => record.key}
                loading={loading}
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

export default BuildingManagement