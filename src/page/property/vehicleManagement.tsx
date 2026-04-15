import { Card, Row, Col, Table, Input, Button, Tabs, Image } from "antd"
import type { TabsProps, TableProps } from 'antd'
import come from "../../assets/come.jpg"
interface DataType {
    key: string;
    orderNo: string;
    date: string;
    carNo: string;
    type: string;
    startDate: string;
    time: string;
    count: string;
    cost: string;
}

interface DataType2{
    key:string;
    carNo:string;
    name:string;
    tel:string;
    type:string;
    rest:string;
    time:string;
    pic:string;
}


const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Order ID',
        dataIndex: 'orderNo',
        key: 'orderNo',
    },
    {
        title: 'Order Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'License Plate',
        dataIndex: 'carNo',
        key: 'carNo',
    },
    {
        title: 'Vehicle Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Charging Start Time',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'Charging Duration',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Energy Delivered (kWh)',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Charging Cost ($)',
        dataIndex: 'cost',
        key: 'cost',
    },
    {
        title: 'Actions',
        key: 'operate',
        render: () => (
            <Button type="primary" size="small">View</Button>
        )
    },
];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'ORD-9872380',
        date: "02/13/2024",
        carNo: 'MA-8A8888',
        type: "Private Vehicle",
        startDate: "02/13/2024 03:33 PM",
        time: "2h 25m",
        count: "30 kWh",
        cost: "$40.50"
    },
];

const columns2: TableProps<DataType2>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'License Plate',
        dataIndex: 'carNo',
        key: 'carNo',
    },
    {
        title: 'Owner Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone Number',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Lease Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Remaining Lease',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: 'Overdue Days',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Entry Photo',
        dataIndex: 'pic',
        key: 'pic',
        render: (text) => (
            <Image
                src={come}
                width={50}
                placeholder={
                    <Image preview={false} src={come} width={150} />
                }
            />
        )
    },
    {
        title: 'Actions',
        key: 'operate',
        render: () => (
            <>
                <Button type="primary" size="small" className='mr'>Edit</Button>
                <Button type="primary" size="small" danger>Delete</Button>
            </>
        )
    },
];

const data2: DataType2[] = [
    {
        key: '1',
        carNo: 'MA-8A8888',
        name: "Lily Wang",
        tel: "(617) 555-1234",
        type: 'Long-term Lease',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
];

const items: TabsProps['items'] = [
    {
        key: "1",
        label: "Charging Records",
        children: <Table columns={columns} dataSource={data} />
    },
    {
        key: "2",
        label: "Vehicles in Facility",
        children: <Table columns={columns2} dataSource={data2} />
    }
];

function VehicleManangement() {
    return <div>
        <Card className="mb">
            <Row gutter={16}>
                <Col span={16}>
                    <Input placeholder="Please Enter plate, phone number or contact name." />
                </Col>
                <Col span={8}>
                    <Button type="primary" className="ml">Search</Button>
                </Col>
            </Row>
        </Card>
        <Card>
            <Tabs items={items}></Tabs>
        </Card>
    </div>
}

export default VehicleManangement