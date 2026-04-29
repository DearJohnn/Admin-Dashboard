import { Card,Row,Col,Table,Button,Tag,Input } from "antd"
import type { TableProps } from "antd";

interface DataType {
    key:string;
    orderNo:string;
    name:string;
    tel:string;
    address:string;
    description:string;
    status:string;
    time:string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Work Order No.',
        dataIndex: 'orderNo',
        key: 'orderNo',
    },
    {
        title: 'Requested By',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Contact Number',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Service Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Issue Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => {
            if (text == "1") {
                return <Tag color="#f50">Pending</Tag>
            } else if (text == "2") {
                return <Tag color="#2db7f5">In Progress</Tag>
            } else {
                return <Tag color="green">Completed</Tag>
            }
        }
    },
    {
        title: 'Request Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Actions',
        key: 'operate',
        render: (text, record) => {
            if (record.status == "1") {
                return (
                    <>
                        <Button type="primary" className="maintenance-button">Assign</Button>
                    </>
                )
            } else if (record.status == "2") {
                return (
                    <>
                        <a>In Progress</a>
                    </>
                )
            } else {
                return <Button type="primary" className="maintenance-button">Complete</Button>
            }
        }
    },
];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "1",
        time: "05/30/2024 1:37 PM",
    },
    {
        key: '2',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "2",
        time: "05/30/2024 1:37 PM",
    },
    {
        key: '3',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "3",
        time: "05/30/2024 1:37 PM",
    },
    {
        key: '4',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "1",
        time: "05/30/2024 1:37 PM",
    },
    {
        key: '5',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "3",
        time: "05/30/2024 1:37 PM",
    },
    {
        key: '6',
        orderNo: 'WO-1236984',
        name: "Kevin Liu",
        tel: '(617) 555-4321',
        address: "Suite 502, Building A2",
        description: "Air conditioning issue with intermittent cooling and poor performance.",
        status: "2",
        time: "05/30/2024 1:37 PM",
    },
];

function MaintenanceRequests(){
    return <div>
        <Card className="mb">
            <Row gutter={16}>
                <Col span={12}>
                    <Input placeholder="Please Enter Maintenance Number"></Input>
                </Col>
                <Col span={6}>
                    <Button type="primary" className="ml">Search</Button>
                </Col>
            </Row>
        </Card>
        <Card>
            <Table columns={columns} dataSource={data}/>
        </Card>
    </div>
}

export default MaintenanceRequests