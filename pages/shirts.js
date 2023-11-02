
import Link from "next/link";
import React, { useState } from "react";

const Shirts = (props) => {

  let shirts = props.data.products

  const tshirts = shirts.filter((t)=> t.category === 'shirt' )
  
  

  const [tdata,getdata] = useState(tshirts)
  
  return (
    <>
      <div className="container">
        <div className="row">
        {tdata.map((item)=>{return <>
          <div className="col-lg-3 shirt mt-5" key={item._id} >
            <Link  href={`/product/${item._id}`}>
            <img
              src={item.img}
              height="280px"
              className="object-fit-cover border rounded"
              alt="tshirt"
            />
            </Link>
            
            
              <h6>{item.title}</h6>
              <p className="">{item.desc}</p>
              <h6>₹{item.price}</h6>
            
          </div>

        </>})}

          
          
          
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) { 

  const resp = await fetch('http://localhost:3000/api/product')
  const data = await resp.json();
  
  return{
    props: {data}
  }
  
}

export default Shirts;
