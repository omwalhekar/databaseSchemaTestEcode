const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
