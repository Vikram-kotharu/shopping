import React from "react";
import Cart from "./cart";
const Checkout = (props) => {
  const { cart,total } = props;
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-7">
              <h4>1. Checkout</h4>
              <hr />
              <form>
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

                <button type="submit" className="btn btn-primary">
                  Pay ₹{total}
                </button>
              </form>
              <br />
              <h4>2. Products in your cart</h4>
              <h6>Subtotal: {total}</h6>
              <hr />
              <div>
                {Object.keys(cart).map((y)=> { return(
                  <>
                  <h6>Product ID: {y}</h6>
                  <h6>Name: {cart[y].name}</h6>
                  
                  <p>Price: {cart[y].price}</p>
                  <p>Quantity: {cart[y].quantity}</p>
                  </>
                  

                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
