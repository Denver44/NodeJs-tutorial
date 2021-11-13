const express = require("express");
const router = new express.Router();

const Student = require("../models/students.js");

// Create router
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get router
router.get("/students", async (req, res) => {
  try {
    const StudentData = await Student.find();
    res.status(200).send(StudentData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get an Individual student data
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const studentData = await Student.findById(_id); // we get the data by findById method.
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.status(200).send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update router
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const UpdateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // we get the data by findById method.
    res.status(200).send(UpdateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
});

// Delete router
router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudentData = await Student.findByIdAndDelete(req.params.id); // we get the data by findById method.
    console.log(deleteStudentData);
    if (!deleteStudentData) {
      return res.status(404).send();
    }
    res.status(200).send(deleteStudentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
