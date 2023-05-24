import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__box">
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="btnLink">
            <Button>
              <Link to="/register">Register</Link>
            </Button>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Home;
