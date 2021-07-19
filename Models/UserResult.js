const mongoose = require("mongoose");

const UserResultSchema = new mongoose.Schema([
  {
    userID: { type: String, required: true },
    assignments: [
      {
        assignmentID: [Schema.Types.ObjectId],
        score: [Number],
        casesPass: Number,
        timestamp: new Date(),
      },
    ],
  },
]);

module.exports = UserResult = mongoose.model("UserResult", UserResultSchema);
