import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [name, getname] = useState("");
  const [email, getemail] = useState("");
  const [password, getpassword] = useState("");
  const notify = () => toast("User Created");
  const notify1 = () => toast("Some Problem Occurred");
  const router = useRouter()

  const send = async (e) => {
    e.preventDefault();

    let data = {name,email,password}

    const resp = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const data1 = await resp.json()

    if (data1.error) {
      console.log("yess");
      notify1();
    } else {
      notify();
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
    

    
    getname("")
    getemail("")
    getpassword("")
  };

  return (
    <>
    <ToastContainer/>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-6">
              <h4>Signup</h4>
              <hr />
              <form onSubmit={send}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      getemail(e.target.value);
                    }}
                    value={email}
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
                    id="exampleInputPassword11"
                    onChange={(e) => {
                      getname(e.target.value);
                    }}
                    value={name}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      getpassword(e.target.value);
                    }}
                    value={password}
                  />

                  <Link href={"/login"}>Existing User? Login now</Link>
                </div>

                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
