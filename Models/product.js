const mongoose = require('mongoose')

const {Schema} = mongoose

const productSchema = new Schema({
    title:{type: String, required: true},
    slug:{type: String, required: true, unique: true},
    desc:{type: String, required: true},
    size:{type: String},
    price:{type: Number, required: true},
    category:{type: String, required: true},
    color:{type: String},
    img:{type: String, required:true},
    quantity:{type: Number, required: true},
},{timestamps:true})

mongoose.models = {}
export default mongoose.model('Product', productSchema)