const mongoose = require('mongoose')



const connect = async() =>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to mongoose')
}


export default connect
