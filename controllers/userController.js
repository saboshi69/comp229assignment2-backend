const User = require("../models/userModel");

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ success: true, message: "login successful" });
  } else {
    res.json({ success: false, message: "username or password is incorrect" });
  }
};
