const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  email: {
    type: email,
    unique: true,
    required: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
