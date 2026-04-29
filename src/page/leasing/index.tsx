import { Carousel, Card, Row, Col, List, Avatar,Statistic } from "antd"
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import p1 from "../../assets/1.jpg"
import p2 from "../../assets/2.jpg"
import p3 from "../../assets/3.jpg"

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

function LeasingManagement() {
    return <div>
        <Card>
            <div style={{ width: "1000px", margin: "auto" }}>
                <Carousel autoplay arrows>
                    <div>
                        <img src={p1} />
                    </div>
                    <div>
                        <img src={p2} />
                    </div>
                    <div>
                        <img src={p3} />
                    </div>
                </Carousel>
            </div>
        </Card>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Card>

            </Col>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="New Customers"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />

                    <Statistic
                        title="Renewals"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />

                    <Statistic
                        title="Churned Customers"
                        value={5.16}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />

                    <Statistic
                        title="Prospective Customers"
                        value={13.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    </div>
}

export default LeasingManagement