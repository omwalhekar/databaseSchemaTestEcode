const express = require("express");
const router = express.Router();
const Skillset = require("../../Models/Skillset");

//POST ROUTE
//ADD SKILLSET
router.post("/", async (req, res) => {
  try {
    const { title, assignments } = req.body;
    const newSkillset = new Skillset({
      title,
      assignments,
    });
    const skillset = await newSkillset.save();
    res.json(skillset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//GET ROUTE
//GET ALL SKILLSETS
router.get("/", async (req, res) => {
  try {
    const skillsets = await Skillset.find();
    if (!skillsets) {
      return res.status(404).json({ msg: "No Skillsets Found" });
    }
    res.json(skillsets);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//DELETE ROUTE
//DELETE SKILLSET
router.delete("/:id", async (req, res) => {
  try {
    const response = await Skillset.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).json({ msg: "Skillset not found" });
    }
    res.json({ msg: "Skillset deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
