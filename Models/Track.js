const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  trackName: {
    type: String,
    unique: true,
  },
  skillsets: [Schema.Types.ObjectId],
});

module.exports = Track = mongoose.model("Track", TrackSchema);
