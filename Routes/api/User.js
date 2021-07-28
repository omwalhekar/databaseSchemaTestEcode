const express = require("express");
const router = express.Router();
const User = require("../../Models/User");

// POST ROUTE
// ADD USER TO DATABAE
router.post("/", async (req, res) => {
  try {
    const { username, role, tests } = req.body;
    const newUser = new User({ username, role, tests });
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

// GET ROUTE
// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

// GET A USER BY USERNAME
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ msg: "No User Found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

// DELETE ROUTE
// DELETE A USER/REMOVE ADMIN
router.delete("/:id", async (req, res) => {
  try {
    const response = await User.findByIdAndDelete({ _id: req.params.id });
    if (!response) {
      return res.status(404).json({ msg: "No user found" });
    }
    res.json({ msg: "User Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
