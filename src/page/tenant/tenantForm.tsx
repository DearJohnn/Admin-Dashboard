import { Modal, Row, Col, Form, Input, Radio, message } from "antd"
import { useEffect } from "react";
import { useSelector} from "react-redux";
import { editTenant } from "../../api/tenantList";


interface FormProps {
    visible: boolean;
    hideModal: () => void;
    title: string;
    loadData: () => void
}

function TenantForm(props: FormProps) {

    const [form] = Form.useForm();
    const {tenantData}= useSelector((state:any)=>state.tenantSlice)
    const { visible, hideModal, title ,loadData} = props;
    const handleOk = ()=>{
        form.validateFields().then(async (res)=>{
            const {data:{data:data}}=await editTenant(res);
            message.success(data);
            hideModal();
            loadData();
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        title=="Add Tenant"?form.resetFields():form.setFieldsValue(tenantData)
    },[visible])
    return <>
        <Modal
            title={title}
            open={visible}
            onCancel={hideModal}
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
                            label="Tenant Name"
                            name="name"
                            rules={[{ required: true, message: "Tenant Name is required" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Phone Number"
                            name="tel"
                            rules={[{ required: true, message: "Phone Number is required" }, { pattern: /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/ }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Status"
                            name="status"
                            rules={[{ required: true, message: "Status is required" }]}
                        >
                            <Radio.Group>
                                <Radio value="1">Active</Radio>
                                <Radio value="2">Suspended</Radio>
                                <Radio value="3">Inactive</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Email is required" }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Industry"
                            name="industry"
                            rules={[{ required: true, message: "Industry is required" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Industry Number"
                            name="industryNum"
                            rules={[{ required: true, message: "Industry Number is required" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Organization Code"
                            name="organizationCode"
                            rules={[{ required: true, message: "Organization Code is required" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    </>
}

export default TenantForm