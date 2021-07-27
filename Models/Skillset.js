const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsetSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  assignments: [Schema.Types.ObjectId],
});

module.exports = Skillset = mongoose.model("Skillset", skillsetSchema);
