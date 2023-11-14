const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: { type: String, required: true},
    products: {type: Object, required: true},
    address:{type:String, required:true},
    amount:{type:Number, required:true},
    status:{type:String, default:'pending', required:true},

},{timestamps:true})
mongoose.models = {}
export default mongoose.model('Order',OrderSchema)