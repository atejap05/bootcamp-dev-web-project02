import { Alert, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import classes from "../css/styles.module.css";
import { validateHash } from "../Utils/utils.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [error, setShowError] = useState(false);

  const onFinish = values => {
    console.log("Received values of form: ", values);
    validateHash(values)
      .then(res => {
        if (res['success']) {
          login(res['data']);
          navigate("/allbooks");
        }
      })
      .catch(error => {
        setShowError(true);
      });
  };

  return (
    <>
      <Form
        name="login-form"
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
            prefix={<UserOutlined className="site-form-item-icon" />}
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      {error && (
        <Alert
          message="Usuário/senha incorreto"
          type="error"
          closable
          onClose={() => setShowError(false)}
        />
      )}
    </>
  );
};

export default Login;
