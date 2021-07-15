const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tracks: [Schema.Types.ObjectId],
  participants: [
    {
      username: {
        type: String,
        required: true,
      },
      email: {
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
