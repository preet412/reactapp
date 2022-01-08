import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homepage text-center">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/signup" className="btn btn-primary ms-2">
            Signup
          </Link>
          <Link to="/login" className="btn btn-primary ms-2">
            Login
          </Link>
        </nav>
        <h2>hello</h2>
        <div className="btn btn-primary ms-2">logout</div>
      </div>
    </>
  );
};

export default Home;
