import React, { useState, useEffect } from "react";
import connect from "@/db/connet";
import { useRouter } from "next/router";
const Post = (props) => {
  const { removeCart, removeitem, addCart, total, cart, original } = props;
 
  


  const router = useRouter();
  const { slug } = router.query;

  const [pin, getpin] = useState();
  const [status, getstatus] = useState(false);
  const [inshirt, getin] = useState(original);

  const submitted = async () => {
    const response = await fetch("http://localhost:3000/api/pincode");
    const data = await response.json();
    if (data.includes(pin)) {
      getstatus(true);
      console.log("true");
    } else {
      getstatus(false);
    }
  };
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 shadow p-5 tryout">
              <h4>Product ID: {slug}</h4>
              <hr />
              <div className="d-flex flex-row">
                <img
                  className="object-fit-cover border rounded"
                  src={inshirt.img}
                  height="380"
                  alt="dfgdfgdfg"
                />
                <div className="ms-3">
                  <h5>{inshirt.title}</h5>
                  <p>4.5</p>
                  <br />
                  <p>{inshirt.desc}</p>
                  <br />
                  <div className="d-flex flex-row">
                    <h6 className="mt-2">Size: </h6>
                    <div
                      className="btn-group ms-2"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button type="button" className="btn btn-outline-dark">
                        Small
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        Medium
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        Large
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        Xtra-Large
                      </button>
                    </div>
                  </div>
                  <br />
                  <h6>₹499</h6>
                  <div className="col-lg-5">
                    <div className="d-flex flex-row">
                      <input
                        className="form-control "
                        type="number"
                        placeholder="Enter pincode!"
                        onChange={(e) => {
                          getpin(e.target.value);
                        }}
                        value={pin}
                      />
                      <button className="btn btn-dark ms-3" onClick={submitted}>
                        check
                      </button>
                    </div>
                    <br />
                    {status === true ? (
                      <p>Product will be delivered</p>
                    ) : (
                      <p>No availability in your region</p>
                    )}
                  </div>

                  <button
                    className="btn btn-dark mt-3"
                    onClick={() => {
                      addCart(slug, "tshirt", "xl", 499, 1, "white");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const response = await fetch("http://localhost:3000/api/product");
  const data = await response.json();
  let present = data.products.filter((i) => i._id === slug);
  let original = present[0]
  
  return {
    props: {original}
  };
}

export default Post;
