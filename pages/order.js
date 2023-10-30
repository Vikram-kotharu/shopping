import React from "react";

const Order = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 yoyo shadow p-5">
              <h4>Orders</h4>
              <hr />
              <div className="mb-4">
                <div className="d-flex flex-row">
                  <h5 className="text-secondary">#81456 </h5>
                  <p> - </p>
                  <h5> Allen Solly T-shirt...</h5>
                  <button className="btn btn-dark ms-auto">Track</button>
                </div>
                <span className="badge text-bg-warning">In - Progress</span>
              </div>
              <div>
                <div className="d-flex flex-row">
                  <h5 className="text-secondary">#81456 </h5>
                  <p> - </p>
                  <h5> Allen Solly T-shirt...</h5>
                  <button className="btn btn-dark ms-auto">Track</button>
                </div>
                <span className="badge text-bg-warning">In - Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
