import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import Products from "./Products";

const Cart = () => {
  const { item } = useCart();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  //console.log(items);
  //if (isEmpty) return <h1 className="text-center">cart is empty</h1>;

  return (
    <>
      <section className="py-4 container">
        <div>
          <h4>Shopping cart</h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              cart ({totalUniqueItems}) total Items:({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                <tr>
                  <td>Image</td>
                  <td>Title</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td> </td>
                </tr>
                {items.map((item, index) => {
                  console.log(items);
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "6rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          RemoveItem
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-auto ms-auto">
          <h2>TotalPrice: {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary ms-2">Buy Now</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
