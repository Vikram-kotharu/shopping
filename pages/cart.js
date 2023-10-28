import Link from "next/link";
import React, { useState } from "react";

const Cart = (props) => {
  const [checker, getcheck] = useState();
  const { removeCart, removeitem, addCart, total, cart } = props;
  let newone = cart

  
  console.log(newone)
  console.log(Object.keys(newone))

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 shadow p-5 tryout">
              <div className="d-flex flex-row">
                <h4>Your Cart</h4>
                <div className="ms-auto">
                  <Link href={"/checkout"}>
                    <button className="btn btn-dark ">Checkout!</button>
                  </Link>
                  <button className="btn btn-dark ms-2 " onClick={removeCart}>
                    Clear Cart
                  </button>
                  <p>TOTAL:{total}</p>
                </div>
              </div>

              <hr />
              {Object.keys(cart).length == 0 ? (
                <p>please Add Items in your cart</p>
              ) : (
                Object.keys(cart).map((i) => {
                  return (
                    <>
                      <div className="d-flex flex-row" key={i}>
                        <img
                          src="https://m.media-amazon.com/images/I/61Piw8KGZ0L._AC_UL480_FMwebp_QL65_.jpg"
                          height="180px"
                          alt=""
                        />
                        <div className="ms-4">
                          <h6>Product Name:{cart[i].name}</h6>
                          <p>Price:{cart[i].price}</p>
                          <p>Quantity:{cart[i].quantity}</p>
                          <p>size:{cart[i].size}</p>
                          <p>{i}</p>
                          <button
                            className="btn btn-secondary"
                            onClick={() => {
                              addCart(
                                i,
                                cart[i].name,
                                cart[i].size,
                                cart[i].price,
                                1,
                                "white"
                              );
                            }}
                          >
                            Add more
                          </button>

                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              removeitem(
                                i,
                                cart[i].name,
                                cart[i].size,
                                cart[i].price,
                                1,
                                "white"
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
              {console.log(Object.keys(cart))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
