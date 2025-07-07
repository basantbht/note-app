const express = require("express");
const { postSignUp, postLogin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup",postSignUp);
userRouter.post("/login",postLogin);

module.exports = userRouter;