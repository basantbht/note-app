const express = require("express");
const noteRouter = require("./routes/noteRouter");
const userRouter = require("./routes/userRouter");
const { default: mongoose } = require("mongoose");
// const connectToMongoDB = require("../config/dbConnect");

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(noteRouter);
app.use(userRouter);

mongoose.connect("mongodb://localhost:27017/note-app").then(()=> {
    console.log("MongoDB connected");
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})