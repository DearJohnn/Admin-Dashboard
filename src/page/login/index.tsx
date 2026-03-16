import "./index.scss"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../../api/users";
import { setToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){

    const [form]=Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false)

    function checkValidLogin(){
        form.validateFields().then(async (res)=>{
            setLoading(true);
            const {data:{data:{token}}} = await login(res);
            setLoading(false);
            dispatch(setToken(token));
            console.log(token);
            navigate("/",{replace:true});
        }).catch((err)=>{
            setLoading(false);
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
                        <Button type="primary" style={{width:"100%"}} onClick={checkValidLogin} loading={loading}>
                            Login
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
}

export default Login