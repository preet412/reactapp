import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Products from "./Products";
import Data from "./Data";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="wd">Home</div>
        <div className="col-md-2">
          <NavLink to="/Login" className="btn btn-primary ms-2">
            Login
          </NavLink>

          <Link to="/Signup" className="btn btn-primary ms-2">
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
    </>
  );
};

export default Home;
