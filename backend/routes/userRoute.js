const express = require("express");
const { registerUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/create-account",registerUser);

module.exports = userRouter;
