const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;