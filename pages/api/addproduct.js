import Product from "@/Models/product";
import connect from "@/db/connet";

const mongoose = require('mongoose');

connect()
const addproducts = async(req,res)=>{
    
    if (req.method === 'POST'){
        for(let i=0; i<req.body.length; i++){
            const res = await Product.create({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                size: req.body[i].size,
                price: req.body[i].price,
                category: req.body[i].category,
                color: req.body[i].color,
                img: req.body[i].img,
                quantity: req.body[i].quantity
            })
            
        }  
    }

    res.send("content has been added!")

    

}


export default addproducts