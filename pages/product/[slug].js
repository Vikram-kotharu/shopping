import React, { useState, useEffect } from "react";
import connect from "@/db/connet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Post = (props) => {
  const { removeCart, removeitem, addCart, total, cart, original } = props;
  const router = useRouter();
  const { slug } = router.query;

  const [pin, getpin] = useState();
  const [status, getstatus] = useState(false);
  const [inshirt, getin] = useState(original);
  const [size, getsize] = useState("");
  const notify = () => toast("item added to the cart");
  const notify1 = () => toast("Small size selected");
  const notify2 = () => toast("Medium size selected");
  const notify3 = () => toast("Large size selected");
  const notify4 = () => toast("XLarge size selected");
  const notify5 = () => toast("XXLarge size selected");  
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
                  
                  <br />
                  <p>{inshirt.desc}</p>
                  <br />
                  <div className="d-flex flex-row">
                    <h6 className="mt-2">Size: </h6>
                    
                    <button type="button" className="btn btn-dark ms-2" onClick={()=>{getsize('S'),notify1()}}>
                      S{" "}
                      <span className="badge text-bg-secondary">{inshirt.size[0].s}</span>
                    </button>
                    <button type="button" className="btn btn-dark ms-2" onClick={()=>{getsize('M'),notify2()}}>
                      M{" "}
                      <span className="badge text-bg-secondary">{inshirt.size[0].m}</span>
                    </button>
                    <button type="button" className="btn btn-dark ms-2" onClick={()=>{getsize('L'),notify3()}}>
                      L{" "}
                      <span className="badge text-bg-secondary">{inshirt.size[0].l}</span>
                    </button>
                    <button type="button" className="btn btn-dark ms-2" onClick={()=>{getsize('XL'),notify4()}}>
                      XL{" "}
                      <span className="badge text-bg-secondary">{inshirt.size[0].xl}</span>
                    </button>
                    <button type="button" className="btn btn-dark ms-2" onClick={()=>{getsize('XXL'),notify5()}}>
                      XXL{" "}
                      <span className="badge text-bg-secondary">{inshirt.size[0].xxl}</span>
                    </button>
                  </div>
                  <br />
                  <h6>₹{inshirt.price}</h6>
                  <div className="col-lg-5">
                    <div className="d-flex flex-row">
                      <input
                        className="form-control col-lg-12 "
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
                      addCart(slug, inshirt.title, size, inshirt.price, 1, inshirt.img),notify();
                    }}
                  >
                    Add To Cart
                  </button>
                  <ToastContainer/>
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
  let original = present[0];

  return {
    props: { original },
  };
}

export default Post;
