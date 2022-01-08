import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="enter your email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="enter your password"
        onChange={handleChange}
      ></input>
      <Link to="/Items" className="btn btn-primary">
        Login
      </Link>
      <div>Or</div>
      <Link to="/signup" className="btn btn-primary">
        Signup
      </Link>
    </div>
  );
};

export default Login;
