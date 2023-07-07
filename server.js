require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");

const businessRoutes = require("./routes/businessRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors(config.corsOptions));

// parse JSON request body
app.use(bodyParser.json());

// use business routes
app.use("/business", businessRoutes);

// use user routes
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} OK`);
});

module.exports = app;
