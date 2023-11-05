import user from "@/Models/user";
import connect from "@/db/connet";
const bcrypt = require("bcrypt");

connect()


const login = async(req,res) =>{
    const data = req.body
    if(req.method === "POST"){
        
        let check = await user.findOne({
            email:data.email
        })

        if(!check){
            res.send({"error":"User is not present"})
        }

        const checking = await bcrypt.compare(data.password,check.password)
        console.log(checking)

        if(checking ){
            res.send({"success":"User is present"})
        }
        else{
            res.send({"error":"User is not present"})
        }

        res.send(check)
    }
    
}

export default login