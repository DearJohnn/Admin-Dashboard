import "./index.scss"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login(){

    const [form]=Form.useForm();

    function checkValidLogin(){
        form.validateFields().then((res)=>{

        }).catch((err)=>{

        })
    }

    return <div className="login" style={{backgroundImage:`url(${bg})`}}>
            <div className="loginBg" style={{backgroundImage:`url(${lgbg})`}}>
                <div className="part">
                    <div className="title">
                        <div className="logo">
                            <img src={logo} width={100} alt="" />
                        </div>
                        <h1>ABC Dashboard</h1>
                    </div>
                    <Form
                        form={form}
                    >
                        <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                        <Input placeholder="Enter your username" prefix={<UserOutlined />}/>
                        </Form.Item>

                        <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                        <Input.Password placeholder="Enter your password" prefix={ <LockOutlined />}/>
                        </Form.Item>

                        <Form.Item label={null}>
                        <Button type="primary" style={{width:"100%"}} onClick={checkValidLogin}>
                            Login
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
}

export default Login