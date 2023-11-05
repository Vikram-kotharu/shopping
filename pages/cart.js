import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = (props) => {
  const [checker, getcheck] = useState();
  const { removeCart, removeitem, addCart, total, cart } = props;
  let newone = cart
  const notify = () => toast("Cart Cleared");

  
  console.log(newone)
  console.log(Object.keys(newone))

  return (
    <>
      <br />
      <ToastContainer/>
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
                  <button className="btn btn-dark ms-2 " onClick={()=>{removeCart(),notify()}}>
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
                      <div className="d-flex flex-row mb-5" key={i}>
                        <img
                          src={cart[i].img}
                          height="180px"
                          alt=""
                        />
                        <div className="ms-4">
                          <h6>Product Name:{cart[i].name}</h6>
                          <p>Price:{cart[i].price}</p>
                          <p>Quantity:{cart[i].quantity}</p>
                          <p>sizes that you have selected:</p>
                          {Object.keys(cart[i].sizes).map((j)=>{
                            return(<>
                              <div className="d-flex flex-row">
                                <p>{j} sizes {cart[i].sizes[j]}</p>
                              </div>
                            </>)
                          })}
                          

                          <button
                            className="btn btn-danger mt-3"
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
                      <hr />
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
