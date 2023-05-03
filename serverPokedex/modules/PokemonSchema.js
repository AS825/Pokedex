const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  number: { type: Number },
  name: {
    english: { type: String },
    japanese: { type: String },
    chinese: { type: String },
    french: { type: String },
  },
  types: [{ type: String }],
  stats: {
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    spAttack: { type: Number },
    spDefense: { type: Number },
    speed: { type: Number },
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);

