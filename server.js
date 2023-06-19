const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

// parse JSON request body
app.use(bodyParser.json());

// use user routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
