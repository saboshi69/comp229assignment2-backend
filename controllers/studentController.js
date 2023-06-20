let students = require("../models/studentModel");
const moment = require("moment");

// Define your controller methods
exports.createStudent = (req, res) => {
  const studentId = Math.floor(Math.random() * 10000); // Generate random ID
  const student = {
    id: studentId,
    ...req.body,
    createdDate: moment().format(),
    updatedDate: moment().format(),
  };
  students[studentId] = student;
  res.status(201).send(student);
};

exports.getStudent = (req, res) => {
  const studentId = req.params.id;
  if (!students[studentId]) return res.status(404).send("Student not found");
  res.send(students[studentId]);
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  if (!students[studentId]) return res.status(404).send("Student not found");
  students[studentId] = {
    id: studentId,
    ...students[studentId],
    ...req.body,
    updatedDate: moment().format(),
  };
  res.send(students[studentId]);
};

exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;
  if (!students[studentId]) return res.status(404).send("Student not found");
  delete students[studentId];
  res.status(204).send();
};

exports.getAllStudents = (req, res) => {
  res.send(Object.values(students)); // send array of students
};
