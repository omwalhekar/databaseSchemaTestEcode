const mongoose = require("mongoose");

const skillsetSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  assignments: [Schema.Types.ObjectId],
});

module.exports = Skillset = mongoose.model("Skillset", skillsetSchema);
