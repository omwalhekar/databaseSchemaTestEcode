const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  testcases: [
    {
      input: String,
      expectedOutput: String,
      testCaseScore: Number,
    },
  ],
  score: {
    type: Number,
    required: true,
  },
});

module.exports = Assignment = mongoose.model("Assignment", AssignmentSchema);
