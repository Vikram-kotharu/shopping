import React, { useEffect, useState } from "react";
import Cart from "./cart";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
const Checkout = (props) => {
  const [address1, setaddress] = useState("");
  const { cart, total } = props;
  const notify = () => toast("Order Placed");
  const orderfunction = async () => {
    const y = localStorage.getItem("userID");
    console.log(y);
    let data = {
      userId: y,
      products: cart,
      address: address1,
      amount: total,
      status: "pending",
    };
    console.log(data);
    const resp = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await resp.json();
    if(response){
      
      notify()
    }
    console.log(response);
  };
  return (
    <>
    <ToastContainer />
      <br />
      <div className="container">
      
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-7">
              <h4>1. Checkout</h4>
              <hr />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    name=""
                    cols="30"
                    rows="5"
                    placeholder="Enter your House address, Pincode, State, District"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    value={address1}
                  ></textarea>
                </div>
                <div className="d-flex flex-row mb-3">
                  <div className="col-lg-6">
                    <label className="form-lable">Phone Number</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-lg-6 ms-2">
                    <label className="form-lable">Alternate Phone Number</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={orderfunction}
                >
                  Pay ₹{total}
                </button>
              </form>
              <br />
              <h4>2. Products in your cart</h4>
              <h6>Subtotal: {total}</h6>
              <hr />
              <div>
                {Object.keys(cart).map((y) => {
                  return (
                    <>
                      <h6>Product ID: {y}</h6>
                      <h6>Name: {cart[y].name}</h6>

                      <p>Price: {cart[y].price}</p>
                      <p>Quantity: {cart[y].quantity}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
