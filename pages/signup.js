import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <>
    <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-6">
              <h4>Signup</h4>
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
                  <label for="exampleInputPassword1" className="form-label">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />

                  <Link href={'/login'}>Existing User? Login now</Link>

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
  )
}

export default Signup