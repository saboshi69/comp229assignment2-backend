const express = require("express");
const router = express.Router();

const businessController = require("../controllers/businessController");

// Define the routes for Student
router.post("/", businessController.createBusiness); // Create a new Business
router.get("/", businessController.getAllBusinesses); // Get all Businesss
router.get("/:id", businessController.getBusiness); // Get a Business by id
router.put("/:id", businessController.updateBusiness); // Update a Business by id
router.delete("/:id", businessController.deleteBusiness); // Delete a Student by id

module.exports = router;
