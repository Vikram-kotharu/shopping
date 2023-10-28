import Link from "next/link";
import React from "react";

const Cups = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 shirt mt-5">
            <Link href="/product/9090">
              <img
                src="https://m.media-amazon.com/images/I/51Ro9qlNvcL._AC_UL480_FMwebp_QL65_.jpg"
                height="280px"
                className="object-fit-cover border rounded"
                alt="tshirt"
              />
            </Link>

            <h6>Allen Solly</h6>
            <p className="">
              Pure Cotton Oversized Fit Multicolor Official Marvel
            </p>
            <h6>₹499</h6>
          </div>
          <div className="col-lg-3 shirt mt-5">
            <img
              src="https://m.media-amazon.com/images/I/51Ro9qlNvcL._AC_UL480_FMwebp_QL65_.jpg"
              height="280px"
              className="object-fit-cover border rounded"
              alt="tshirt"
            />

            <h6>Allen Solly</h6>
            <p className="">
              Pure Cotton Oversized Fit Multicolor Official Marvel
            </p>
            <h6>₹499</h6>
          </div>
          <div className="col-lg-3 shirt mt-5">
            <img
              src="https://m.media-amazon.com/images/I/51Ro9qlNvcL._AC_UL480_FMwebp_QL65_.jpg"
              height="280px"
              className="object-fit-cover border rounded"
              alt="tshirt"
            />

            <h6>Allen Solly</h6>
            <p className="">
              Pure Cotton Oversized Fit Multicolor Official Marvel
            </p>
            <h6>₹499</h6>
          </div>
          <div className="col-lg-3 shirt mt-5">
            <img
              src="https://m.media-amazon.com/images/I/51Ro9qlNvcL._AC_UL480_FMwebp_QL65_.jpg"
              height="280px"
              className="object-fit-cover border rounded"
              alt="tshirt"
            />

            <h6>Allen Solly</h6>
            <p className="">
              Pure Cotton Oversized Fit Multicolor Official Marvel
            </p>
            <h6>₹499</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cups;
