const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// Define the routes for Student
router.post("/", studentController.createStudent); // Create a new Student
router.get("/", studentController.getAllStudents); // Get all Students
router.get("/:id", studentController.getStudent); // Get a Student by id
router.put("/:id", studentController.updateStudent); // Update a Student by id
router.delete("/:id", studentController.deleteStudent); // Delete a Student by id

module.exports = router;
