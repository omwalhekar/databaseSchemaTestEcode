const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    default: "Participant",
    required: true,
  },
  tests: [Schema.Types.ObjectId],
});

module.exports = User = mongoose.model("User", UserSchema);
