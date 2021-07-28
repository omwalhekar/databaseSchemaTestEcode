const express = require("express");
const router = express.Router();
const Test = require("../../Models/Test");

// POST ROUTE
// ADD A TEST
router.post("/", async (req, res) => {
  try {
    const { title, tracks, participants, duration } = req.body;
    const newTest = new Test({
      title,
      tracks,
      participants,
      duration,
    });
    const test = await newTest.save();
    res.json(test);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

// GET ROUTE
// GET ALL TESTS
router.get("/", async (req, res) => {
  try {
    const tests = await Test.find();
    if (tests.length == 0) {
      return res.status(404).json({ msg: "No tests found" });
    }
    res.json(tests);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});
module.exports = router;

// DELETE A TEST
router.delete("/:id", async (req, res) => {
  try {
    const response = await Test.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).json({ msg: "No Test Found" });
    }
    res.json({ msg: "Test deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});
