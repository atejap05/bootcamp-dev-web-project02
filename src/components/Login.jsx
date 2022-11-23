import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import classes from "../css/styles.module.css";
import { validateHash } from "../Utils/utils.js";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const onFinish = values => {
    console.log("Received values of form: ", values);
    validateHash(values).then(res => {
      if (res){
        navigate('/allbooks')
      }
    });
  };

  return (
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
