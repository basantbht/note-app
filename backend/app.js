const express = require("express");
const dotenv = require("dotenv");

const noteRouter = require("./routes/noteRouter");
const userRouter = require("./routes/userRouter");
const connectToMongoDB = require("./config/dbConnect");

const app = express();
dotenv.config();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(noteRouter);
app.use(userRouter);

connectToMongoDB();


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})