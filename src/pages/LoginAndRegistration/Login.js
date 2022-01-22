import React from "react";
import {SAutContainer, SAutForm, SAuthBlock, SButton, SForm} from "./style";
import {Form, Input} from "antd";

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <SAutContainer>
            <SAutForm>
                <SAuthBlock>
                    <h2 className="titleSlash">Sign In</h2>
                    <h2>Sign Up</h2>
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
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
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
export default Login