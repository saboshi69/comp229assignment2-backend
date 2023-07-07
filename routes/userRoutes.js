const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/", userController.userLogin); // Get auth

module.exports = router;
