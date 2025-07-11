const { default: mongoose } = require("mongoose");

const connectToMongoDB = () => {
  const MONGO_URL = process.env.MONGO_URL;

  mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDB connected");
  });
};

module.exports = connectToMongoDB;
