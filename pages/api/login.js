import user from "@/Models/user";
import connect from "@/db/connet";
const bcrypt = require("bcrypt");

var jwt = require('jsonwebtoken');

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

        //console.log(check)

        const checking = await bcrypt.compare(data.password,check.password)
        console.log(checking)

        if(checking ){
            var token = jwt.sign({ email:data.email, password:check.password }, 'The-E-store',{expiresIn: "1d"});
            res.send({"success":"User is present","token":token,"id":check._id})
        }
        else{
            res.send({"error":"User is not present"})
        }

        res.send(check)
    }
    
}

export default login

