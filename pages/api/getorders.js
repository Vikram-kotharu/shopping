import connect from "@/db/connet"
import Order from "@/Models/order"
connect()
const getorders = async(req,res) => {
    const resp = await Order.find()
    res.json(resp)

  
}

export default getorders