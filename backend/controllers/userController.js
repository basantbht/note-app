const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Create account
const registerUser = async (req, res) => {
    console.log(req.body);
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Full Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  const isUser = await userModel.findOne({email: email});

  if(isUser) {
    return res.json({
        error: true,
        message: "User already exist",
    });
  }

  const user = new userModel({
    fullName,
    email,
    password
  });

  await user.save();

  const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,{
    expiresIn: "36000m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful"
  })
};

const loginUser = async (req,res) => {
    const {email,password} =req.body;

    if(!email){
        return res.status(400).json({error: true, message: "Email is required"});
    }

    if(!password){
        return res.status(400).json({error: true, message: "Password is required"});
    }

    const userInfo = await userModel.findOne({email: email});

    if(!userInfo){
        return res.status(400).json({
            error: true, message: "User not found"
        }) 
    }

    if(userInfo.email == email && userInfo.password == password) {
        const user = {user:userInfo};
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error:false,
            message: "Login Successful",
            email,
            accessToken
        });
    } else {
         return res.status(400).json({error: true, message: "Invalid Credentials"});
    }

}

module.exports = {registerUser,loginUser};
