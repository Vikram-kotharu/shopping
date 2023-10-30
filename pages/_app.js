import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "@/components/nav";
import { useState,useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [cart,getcart] = useState({})
  const [total,gettotal] = useState(0)

  useEffect(()=>{
    
    if(localStorage.getItem('cart') ){
      getcart(JSON.parse(localStorage.getItem('cart')))
      gettotal(JSON.parse(localStorage.getItem('total')))
      
    }
    else{
      localStorage.clear()
    }

  },[])

  const savecart = (cart,total) =>{
    localStorage.setItem('cart', JSON.stringify(cart))
    
    let sub = 0;
    let r = Object.keys(cart)
    for(let i=0; i<r.length; i++){
      sub = sub + cart[r[i]].price * cart[r[i]].quantity
    }
    
    gettotal(sub)
    localStorage.setItem('total',JSON.stringify(sub))
    
  }
  const addCart = (id,name,size,price,quantity,color) =>{
    let newcart = cart

    let check = Object.keys(cart)
    console.log(check)
    console.log(id)
    
    
    if(check.includes(id)){
      console.log('yes its already there')
      newcart[id].quantity = cart[id].quantity + quantity
    }
    else{
      newcart[id] = {quantity:1,name,size,price,quantity,color}
    }
    console.log(newcart)
 
    getcart(newcart)
    savecart(newcart)

  }

  const removeitem = (id,name,size,price,quantity,color) =>{
    let newone = cart
    if(id in newone){
      newone[id].quantity = cart[id].quantity - quantity
    }
    if (newone[id].quantity<1){
      console.log('yo')
      delete newone[id]
    }



    getcart(newone)
    savecart(newone)
  }

  const removeCart = () =>{
    getcart({})
    savecart({})
  }

  return (
    <>
      <Nav />
      <Component cart={cart} total={total} removeCart={removeCart} removeitem={removeitem} addCart={addCart} {...pageProps} />
      
    </>
  );
}
