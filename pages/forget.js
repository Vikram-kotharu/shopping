import React from 'react'

const Forget = () => {
  return (
    <>
    <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-6">
              <h4>Password Reset</h4>
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
                  
                </div>
                
                
                <button type="submit" className="btn btn-primary">
                  Send Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forget