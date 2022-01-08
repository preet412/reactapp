import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { addItem } = useCart();
  //console.log(addItem);
  return (
    <div className="col=11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <h5 className="card-title">${props.price}</h5>
          <Link
            to="/Cart"
            className="btn btn-success"
            onClick={() => {
              console.log(props.item);
              addItem(props.item);
            }}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
