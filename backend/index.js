require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("MongoDB connected successfully!"))



const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.use("/",userRouter);
app.use("/",noteRouter);

app.listen(8000);

app.get("/", (req,res) => {
    res.send("API working");
})

module.exports = app;