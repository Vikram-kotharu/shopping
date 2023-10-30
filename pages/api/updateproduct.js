import Product from "@/Models/product";
import connect from "@/db/connet";

const mongoose = require('mongoose');

connect()
const updateproduct = async(req,res)=>{
    
    if (req.method === 'POST'){
        for(let i=0; i<req.body.length; i++){
            const res = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
        }  
    }

    res.send("content has been updated!")

    

}


export default updateproduct