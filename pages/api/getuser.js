import user from "@/Models/user"
import connect from "@/db/connet"

connect()

const allusers = async(req,res) =>{
    const resp = await user.find()
    res.json({resp})
}

export default allusers