import React, {useState} from "react";
import {Alert, Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import classes from "../css/styles.module.css";
import {registerNewUser} from "../Utils/utils.js";

const SignUp = ({toggleModal}) => {

    const [warn, setShowWarn] = useState(false)
    const [message, setMessage] = useState("")


    const onFinish = values => {

        registerNewUser(values).then(_ => {
            toggleModal(false)
        }).catch(error => {
            setShowWarn(true)
            setMessage(error)
        })
    };

    return (
        <>
            <Form
                name="sign-up-form"
                className={classes.login}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Confirme Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
            {warn && <Alert message={message} type="warning" closable onClose={() => setShowWarn(false)}/>}
        </>
    );
};

export default SignUp;
