const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");
const { authenticateToken } = require("../utilities");
const userRouter = express.Router();

userRouter.post("/create-account",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/get-user",authenticateToken,getUser);

module.exports = userRouter;
