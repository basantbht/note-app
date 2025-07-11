const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouters");
const connectToMongoDB = require("./config/dbConnect");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
connectToMongoDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))
app.use(express.urlencoded({extended: true}));

// API Endpoints
app.get('/', (req,res) => {
    res.send("API Working");
})

app.use("/api/auth",authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})