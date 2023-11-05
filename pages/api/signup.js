import user from "@/Models/user";
import connect from "@/db/connet";
const bcrypt = require("bcrypt");

connect();

const signup = async (req, res) => {
  const data = req.body;

  if (req.method === "POST") {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const resp = await user.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    console.log(resp)

    if (resp) {
      res.send({ success: "user created" });
    } else {
      res.send({ error: "encountered error creating user" });
    }
  }
};

export default signup;
