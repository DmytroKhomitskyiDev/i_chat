import React from "react";
import {SAutContainer, SAutForm, SAuthBlock, SButton, SForm} from "./style";
import {Form, Input} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types"

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        const sendedCode = await registerUser(values.email)
        if (sendedCode) {
            dispatch({
                type: types.SET_REGISTER_USER,
                payload: values
            })
            navigate('/registration-secret')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <SAutContainer>
            <SAutForm>
                <SAuthBlock>
                    <Link to='/login'><h2 className="titleSlash">Sign In</h2></Link>
                    <Link to='/registration'><h2>Sign Up</h2></Link>
                </SAuthBlock>
                <SForm
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your Firs Name' }]}
                    >
                        <Input  placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your Last Name' }]}
                    >
                        <Input  placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail' }]}
                    >
                        <Input  placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 25 }}>
                        <SButton  htmlType="submit">
                            Sign In
                        </SButton>
                    </Form.Item>
                </SForm>
            </SAutForm>
        </SAutContainer>
    )
}

export default Register