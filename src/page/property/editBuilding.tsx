import { Form, Input, Modal, Row, Col, Radio, message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { editBuilding } from "../../api/buildingList";

interface FormProps {
    visible: boolean;
    handleHide: () => void
    loadData:()=> void
}

function EditBuilding(props: FormProps) {
    const { visible ,handleHide, loadData} = props;
    const [form] = Form.useForm();
    const { buildingData } = useSelector((state: any) => state.buildingSlice)

    useEffect(() => {
        form.setFieldsValue(buildingData);
    })

    const handleOk = ()=>{
        form.validateFields().then(async (res)=>{
            const{data:{data}} = await editBuilding(res);
            message.success(data);
            handleHide();
            loadData();
        }).catch((err)=>{
            console.log(err)
        })
    }

    return <Modal
        title="Edit Building"
        open={visible}
        onCancel={handleHide}
        onOk={handleOk}
        width={900}
    >
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Building Name"
                        name="buildingName"
                        rules={[{ required: true, message: "Building Name is required" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: "Status is required" }]}
                    >
                        <Radio.Group>
                            <Radio value="1">Under Construction</Radio>
                            <Radio value="2">Completed</Radio>
                            <Radio value="3">Occupied</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Manager Name"
                        name="manager"
                        rules={[{ required: true, message: "Manager Name is required" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: "Email is required" }, { pattern: /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/ }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Property Fee"
                        name="propertyFee"
                        rules={[{ required: true, message: "Manager Name is required" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Modal>
}

export default EditBuilding;