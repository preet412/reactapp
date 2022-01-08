import React from "react";
import Products from "./Products";
import Data from "./Data";

const Items = () => {
  return (
    <>
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

export default Items;
