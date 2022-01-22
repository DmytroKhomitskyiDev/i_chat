import React, {useState} from "react";
import {SAutContainer, SAutForm, SButton, SForm} from "./style";
import {Form, Input} from "antd";
import { registerUserSecret } from "../../api/api";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const INPUTS = Array.from({ length: 6 })

const RegisterSecret = () => {
    const [activeInput, setActiveInput] = useState(0)

    const registerUserData = useSelector(state => state.auth.registerData)
    const navigate = useNavigate()

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const created = await registerUserSecret(registerUserData, Object.values(values).join(''))
        if (created.status === 200) {
            navigate('/login')
        }
    };

    const onChange = (e) => {
        if (activeInput === 5) {
            form.submit()
        }

     
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <SAutContainer>
            <SAutForm>
                <SForm
                    name="register_secret"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    form={form}
                >
                    {INPUTS.map((el, index) => {
                        return (
                            <Form.Item
                                name={`input_${index}`}
                                rules={[{ required: true, message: 'Maximum 1', max: 1 }]}
                                onChange={onChange}
                                key={index}
                            >
                                <Input  placeholder="Secret Code" />
                            </Form.Item>
                        )
                    })}
                </SForm>
            </SAutForm>
        </SAutContainer>
    )
}

export default RegisterSecret