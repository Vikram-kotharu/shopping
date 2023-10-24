import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <>
    <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 shadow p-5 tryout">
              <div className="d-flex flex-row">
              <h4>Your Cart</h4>
              <Link href={'/checkout'} className="ms-auto"><button className="btn btn-dark ">Checkout!</button></Link>
              
              </div>
              
              <hr />
              <div className="d-flex flex-row">
                <img
                  src="https://m.media-amazon.com/images/I/61Piw8KGZ0L._AC_UL480_FMwebp_QL65_.jpg"
                  height="180px"
                  alt=""
                />
                <div className="ms-4">
                  <h6>Product Name:</h6>
                  <p>Price:</p>
                  <p>Quantity:</p>
                  <button className="btn btn-secondary">Add more</button>

                  <button className="btn btn-danger ms-2">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
