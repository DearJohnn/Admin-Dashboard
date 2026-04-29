import { Card, Col,Row,Input,Button,Table,Pagination,Tag, Tree } from "antd"
import type { TableProps } from "antd"
import useDataList from "../../hooks/useDataList"
import { getEquipmentList } from "../../api/equipment"

interface SearchType{
    equipmentName:string;
    manager:string;
}

interface DataType {
    id:number
    no: string,
    equipmentName: string;
    manager: string;
    tel: number;
    time: string;
    rest: string;
    status: string;
    last: string;
    type: string;
    from: string
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "No.",
        key: "index",
        width:80,
        fixed:"left",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Equipment Name',
        dataIndex: 'equipmentName',
        key: 'equipmentName',
        width:150
    },
    {
        title: 'Equipment ID',
        dataIndex: 'no',
        key: 'no',
        width:120
    },
    {
        title: 'Equipment Manager',
        dataIndex: 'manager',
        key: 'manager',
        width:120
    },
    {
        title: 'Phone Number',
        dataIndex: 'tel',
        key: 'tel',
        width:120
    },
    {
        title: 'Expected Lifespan',
        dataIndex: 'time',
        key: 'time',
        width:120
    },
    {
        title: 'Remaining Lifespan',
        dataIndex: 'rest',
        key: 'rest',
        width:120
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width:150,
        render: (text) => {
            if (text == 1) {
                return <Tag color="green">Active</Tag>
            } else if (text == 2) {
                return <Tag color="gold">Under Maintenance</Tag>
            } else {
                return <Tag color="red">Out of Service</Tag>
            }
        }
    },
    {
        title: 'Last Maintenance Date',
        dataIndex: 'last',
        key: 'last',
        width:120
    },
    {
        title: 'Model / Specification',
        dataIndex: 'type',
        key: 'type',
        width:140
    },
    {
        title: 'Manufacturer',
        dataIndex: 'from',
        key: 'from',
        width:120
    },
    {
        title: 'Actions',
        key: 'operate',
        width:120,
        fixed:"right",
        render: () => {
            return <Button type="primary" size="small">View Details</Button>
        }
    },
];

function EquipmentManagement(){
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
    } = useDataList<SearchType,DataType>({equipmentName:"",manager:""},getEquipmentList);
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={10}>
                    <p>Equipment Name</p>
                    <Input name="equipmentName" value={formData.equipmentName} placeholder="Please enter equipment name or id" onChange={handleFormChange}/>
                </Col>
                <Col span={10}>
                    <p>Equipment Manager</p>
                    <Input name="manager" value={formData.manager} placeholder="Please enter equipment manager name" onChange={handleFormChange}/>
                </Col>
                <Col span={4}>
                    <Button type="primary" className="mr" onClick={loadData}>Search</Button>
                    <Button onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={dataList}
                loading={loading}
                rowKey={(record)=>record.id}
                pagination={false}
                scroll={{x:1200}}
            />
            <Pagination 
                className="mt"
                style={{justifyContent:"flex-end"}}
                showQuickJumper
                defaultCurrent={1}
                total={total}
                onChange={onPaginationChange}
                current={page}
                pageSize={pageSize}
            />
        </Card>
    </div>
}

export default EquipmentManagement