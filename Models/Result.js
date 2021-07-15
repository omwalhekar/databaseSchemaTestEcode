const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema([
  {
    testId: { type: String, required: true },
    scoreboard: [Schema.Types.ObjectId],
  },
]);

module.exports = Result = mongoose.model("Result", ResultSchema);
