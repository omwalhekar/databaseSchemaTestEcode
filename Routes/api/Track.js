const express = require("express");
const router = express.Router();
const Track = require("../../Models/Track");

//POST ROUTE
//ADD TRACK
router.post("/", async (req, res) => {
  try {
    const { trackName } = req.body;
    const newTrack = new Track({
      trackName,
    });
    const track = await newTrack.save();
    res.json(track);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//GET ROUTE
//GET ALL TRACKS
router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find();
    if (!tracks) {
      return res.status(404).json({ msg: "No Track Found" });
    }
    res.json(tracks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

//DELETE ROUTE
//DELETE TRACK
router.delete("/:id", async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.json({ msg: "Track deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
