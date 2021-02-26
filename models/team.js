const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: { type: String, required: true },
  users: {type: Schema.Types.ObjectId, ref: "User"},
  photo: {type: String},
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;