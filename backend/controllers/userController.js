const User = require("../models/userModel");

const postSignUp = async (req,res,next) => {
    const {username, email,password} = req.body;

    if(!username || !email || !password) {
        return res.json({success: false, message: "All fields are required"});
    }

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    return res.json({success: true, message: "User successfully created!"});

}

const postLogin = async (req,res,next) => {
    const {email,password} = req.body;

    if(!email || !password) {
        res.json({success: false, message: "Email or Password is incorrect"});
    }

    const user = await User.findOne({email, password});

    console.log(user);
    res.json({success: true, message: "Login successful",user});

}

module.exports = {
    postSignUp,
    postLogin
}