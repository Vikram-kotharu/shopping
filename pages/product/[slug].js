import React, { useState } from "react";
import { useRouter } from "next/router";
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, getpin] = useState()
  const [status, getstatus] = useState(false)
  const submitted = async() =>{
    
    const response = await fetch('http://localhost:3000/api/pincode')
    const data = await response.json()
    if(data.includes(pin)){
      getstatus(true)
      console.log('true')
    }
    else{
      getstatus(false)
    }
    console.log(pin)
    console.log(data)
  }
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
                  src="https://m.media-amazon.com/images/I/618ULEergYL._AC_UL480_FMwebp_QL65_.jpg"
                  height="380"
                  alt=""
                />
                <div className="ms-3">
                  <h5>Allen Solly</h5>
                  <p>4.5</p>
                  <br />
                  <p>
                    lorem asdna sd ahasd jas ajksdh jajkshdajkd haksjdhajkshda
                    jhd akjhd ajkhdajkjhd ajkshdakjshd akjsdh akjsdhajksdh
                    kajsdhkajs
                  </p>
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
                  <div className="col-lg-5" >
                    <div className="d-flex flex-row">
                      <input
                        className="form-control "
                        type="number"
                        placeholder="Enter pincode!"
                        onChange={(e)=>{getpin(e.target.value)}}
                        value={pin}
                      />
                      <button className="btn btn-dark ms-3" onClick={submitted} >check</button>
                      
                    </div>
                    <br />
                    {status===true?<p>Product will be delivered</p>:<p>No availability in your region</p>}
                  </div>

                  <button className="btn btn-dark mt-3">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
