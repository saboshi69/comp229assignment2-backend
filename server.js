require("./db");
const express = require("express");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// parse JSON request body
app.use(bodyParser.json());

// use student routes
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} OK`);
});
