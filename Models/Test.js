const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tracks: [
    {
      trackName: { type: String, required: true },
      skillSets: [Schema.Types.ObjectId],
    },
  ], //add name and skillsets
  participants: [
    {
      username: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
  duration: Number, //duration unit is not yet decided (HRS/MINS)
});

module.exports = Test = mongoose.model("Test", TestSchema);
