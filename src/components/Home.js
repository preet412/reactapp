import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Products from "./Products";
import Data from "./Data";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="d-flex">
          <NavLink
            to=""
            isActive={(match, location) => {
              if (!match) {
                return false;
              }

              // only consider an event active if its event id is an odd number
              const eventID = parseInt(match.params.eventID);
              return !isNaN(eventID) && eventID % 2 === 1;
            }}
            className="btn btn-primary ms-2"
          >
            Login
          </NavLink>

          <Link to="/Login" className="btn btn-primary ms-2">
            Signup
          </Link>
        </div>
      </nav>
      <h2 className="text-center">All Products</h2>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.productData.map((item, index) => {
            return (
              <Products
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
      {/*<div className="homepage text-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/signup" className="btn btn-primary ms-2">
            Signup
          </Link>
          <Link to="/login" className="btn btn-primary ms-2">
            Login
          </Link>
        </nav>
        <h2>hello</h2>
        <div className="btn btn-primary ms-2">logout</div>
        </div>*/}
    </>
  );
};

export default Home;
