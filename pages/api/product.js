import Product from "@/Models/product";
import connect from "@/db/connet";

const mongoose = require('mongoose');

connect()
const getproducts = async(req,res)=>{

    const products = await Product.find()
    res.json({products})

}


export default getproducts