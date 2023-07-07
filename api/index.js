// require("./db");
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const config = require("./config");

// const businessRoutes = require("./routes/businessRoutes");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// // enable CORS - Cross Origin Resource Sharing
// // app.use(cors(config.corsOptions));
// app.use(cors());

// // parse JSON request body
// app.use(bodyParser.json());

// // use business routes
// app.use("/business", businessRoutes);

// // use user routes
// app.use("/user", userRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT} OK`);
// });

// module.exports = app;

const app = require("express")();
const { v4 } = require("uuid");

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
