require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  corsOptions: isProduction
    ? {
        origin: process.env.FRONTEND_PROD_URL,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
    : {},
  // You can add more configuration values as needed
};
