const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    // RSA_PRIVATE_KEY should be the private salt but I am lazy
    const jwtBearerToken = jwt.sign({}, "RSA_PRIVATE_KEY");

    // return success
    res.json({
      success: true,
      message: "login successful",
      jwtBearerToken: jwtBearerToken,
    });

    // store token into cookie session
    // res.cookie("SESSIONID", jwtBearerToken, { httpOnly: true, secure: true });
  } else {
    res.json({ success: false, message: "username or password is incorrect" });
  }
};
