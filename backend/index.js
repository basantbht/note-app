require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);


const express = require("express");
const cors = require("cors");
const app = express();

const {authentication} = require("./utilities");
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.use("/",userRouter);
app.listen(8000);

module.exports = app;