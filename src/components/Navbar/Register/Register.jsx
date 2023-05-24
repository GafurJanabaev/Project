import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {

  

  return (
    <div className="RegBody">
      <div className="Register">
        <h1>Register</h1>
        <Form className="Register__box">
          <label>
            Your Name
            <Input type="text" />
          </label>
          <label>
            Your Number
            <Input type="number" />
          </label>
          <label>
            Your Password
            <Input.Password className="inpPas" />
          </label>
        </Form>
        <div className="Reg-btn">
          <Button>Submit</Button>
        </div>

        <div className="Link">
          Have already an account? <Link to="/login">Login Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
