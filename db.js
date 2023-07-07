require("dotenv").config();

const mongoose = require("mongoose");

const isProduction = process.env.NODE_ENV === "production";

mongoose
  .connect(isProduction ? process.env.MONGODB_URI : process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected OK"))
  .catch((err) => console.log("fuck " + err));
