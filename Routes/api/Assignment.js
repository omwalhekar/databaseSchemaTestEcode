const express = require("express");
const router = express.Router();
const Assignment = require("../../Models/Assignment");

//POST ROUTE
//ADD ASSIGNMENTS
router.post("/", async (req, res) => {
  try {
    const { title, description, testcases, score } = req.body;
    const newAssignment = new Assignment({
      title,
      description,
      testcases,
      score,
    });
    const assignment = await newAssignment.save();
    res.json(assignment);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//GET ROUTE
//GET ALL ASSIGNMENTS
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    if (!assignments) {
      return res.status(404).json({ msg: "No Assignments Found" });
    }
    res.json(assignments);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//GET ROUTE
//GET AN ASSIGNMENT
router.get("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findOne({ _id: req.params.id });
    if (assignment) {
      return res.json(assignment);
    }
    res.status(404).json({ msg: "No Dept Found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//DELETE ROUTE
//DELETE ASSIGNMENT
router.delete("/:id", async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ msg: "Assignment deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//PUT ROUTE
//UPDATES A ASSIGNMENT USING ID
router.put("/:id", async (req, res) => {
  const filter = req.params.id;
  const update = req.body;
  try {
    //returns null if no assignment is found
    const assignment = await Assignment.findByIdAndUpdate(filter, update);
    if (!assignment) {
      return res.json({ msg: "No assignment found" });
    }
    return res.json({ msg: "Assignment updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
