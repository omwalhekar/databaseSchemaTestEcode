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

module.exports = router;
