import { Card,Row,Col,Table,Button,Tag,Input } from "antd"

function MaintenanceRequests(){
    return <div>
        <Card>
            <Row gutter={16}>
                <Col span={12}>
                    <Input></Input>
                </Col>
                <Col span={6}>
                    <Button></Button>
                </Col>
            </Row>
        </Card>
    </div>
}

export default MaintenanceRequests