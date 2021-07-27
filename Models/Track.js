const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TrackSchema = new Schema({
  trackName: {
    type: String,
    unique: true,
  },
  // skillsets: [Schema.Types.ObjectId],
});

module.exports = Track = mongoose.model("Track", TrackSchema);
