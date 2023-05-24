import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div className="LogBody">
      <div className="Login">
        <h1>Login</h1>
        <Form className="Login__box">
          <label>
            Your Number
            <Input type="number" />
          </label>
          <label>
            Your Password
            <Input.Password className="inpPas" />
          </label>
        </Form>
        <div className="Log-btn">
          <Button>Submit</Button>
        </div>

        <div className="Link">
          Don't have an account? <Link to="/register">Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
