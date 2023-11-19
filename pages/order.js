import React, { useEffect, useState } from "react";

const Order = () => {
  const [order,getorders] = useState([])
  const gets = async() =>{
    const resp = await fetch('http://localhost:3000/api/getorders')
    const data = await resp.json()
    let op = localStorage.getItem('userID')
    console.log(op)
    const data1 = data.filter((i)=>i.userId == op)
    console.log(data1)
    console.log(data)
    getorders(data1)
  }

  useEffect(()=>{
    gets()
  },[])

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 yoyo shadow p-5">
              <h4>Orders</h4>
              <hr />
              {order.map((i)=>{return(<>
                <div className="mb-4">
                <div className="d-flex flex-row">
                  <h5 className="text-secondary">#{i._id} </h5>
                  <p> - </p>
                  {Object.keys(i.products).map((j)=>{return(<><h6>{i.products[j].name}..</h6></>)})}
                  
                  <button className="btn btn-dark ms-auto">Track</button>
                </div>
                <span className="badge text-bg-warning">{i.status}</span>
              </div>
              </>)})}
              
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
