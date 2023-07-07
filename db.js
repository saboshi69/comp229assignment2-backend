require("dotenv").config();

const mongoose = require("mongoose");

const uri = isProduction ? process.env.MONGODB_URI : process.env.DB_CONNECT;

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected OK"))
  .catch((err) => console.log("fuck " + err));
