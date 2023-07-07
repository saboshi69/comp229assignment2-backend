require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(
    !!process.env.MONGODB_URI
      ? process.env.MONGODB_URI
      : process.env.DB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected OK"))
  .catch((err) => console.log("fuck " + err));
