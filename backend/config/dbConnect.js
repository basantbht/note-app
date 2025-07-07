const { default: mongoose } = require("mongoose");
// MONGO_URL = "mongodb://localhost:27017/note-app"

const connectToMongoDB = () => {
  const MONGO_URL = process.env.MONGO_URL;

  mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDB connected");
  });
};

module.exports = connectToMongoDB;
