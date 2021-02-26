const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  profileImage: { type: String, required: true },
  mainCharacter: {type: Schema.Types.ObjectId, ref: "Character"},
  city: { type: String, },
  state: { type: String }
});

const User = mongoose.model("Character", userSchema);

module.exports = User;