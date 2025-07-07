const { default: mongoose } = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
// MONGO_URL = "mongodb://localhost:27017/note-app"

const connectToMongoDB = async () => {
    await mongoose.connect(MONGO_URL);
}

module.exports = connectToMongoDB;