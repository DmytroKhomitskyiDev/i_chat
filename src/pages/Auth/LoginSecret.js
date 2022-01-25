import React, {useState} from "react";
import {SAutContainer, SAutForm, SButton, SForm} from "./style";
import {Form, Input} from "antd";
import {findUser, loginUserSecret, registerUserSecret} from "../../api/api";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {types} from "../../redux/types";

const INPUTS = Array.from({ length: 6 })

const LoginSecret = () => {
    const [activeInput, setActiveInput] = useState(0)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const res = await loginUserSecret(Object.values(values).join(''))
        if (res) {
            await findUser()
            navigate('/chat')
        }
    };

    const onChange = (e) => {
        if (activeInput === 5) {
            form.submit()
        }

        setActiveInput(prev => prev + 1)
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

export default LoginSecret