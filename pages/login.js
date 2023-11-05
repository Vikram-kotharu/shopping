import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();

  const [email, getemail] = useState("");
  const [password, getpassword] = useState("");

  const notify = () => toast("Invalid Credentials");
  const notify1 = () => toast("Good to go!!");

  const send = async (e) => {
    e.preventDefault();

    let data = { email, password };

    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const data1 = await resp.json();

    console.log(data1);

    if (data1.error) {
      console.log("yess");
      notify();
    } else {
      notify1();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }

    getemail("");
    getpassword("");
  };
  return (
    <>
      <ToastContainer />
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-6">
              <h4>Login</h4>
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
                    Password
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
                  <Link href={"/forget"}>
                    <p>Forget Password?</p>
                  </Link>
                  <Link href={"/signup"}>
                    <p>Signup?</p>
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary">
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

export default Login;
