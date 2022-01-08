import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <>
      <div className="signup">
        {console.log("User", user)}
        <h1>Signup</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder=" Name"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder=" Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          placeholder="confirm password"
          onChange={handleChange}
        ></input>

        <Link to="/Items" className="btn btn-primary">
          Login
        </Link>
        <div>Or</div>
        <Link to="/login" className="btn btn-primary">
          Signup
        </Link>
      </div>
    </>
  );
};

export default Signup;
