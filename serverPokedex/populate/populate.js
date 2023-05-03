require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const POKEMONMODEL = require("../modules/PokemonSchema");

mongoose.set("strictQuery", false);
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const populatePokemon = async () => {
  await POKEMONMODEL.deleteMany({});

  const pokemons = JSON.parse(fs.readFileSync("./pokemon.json", "utf-8"));

  await POKEMONMODEL.create(...pokemons);
  console.log("Pokemon created");
};

const main = async () => {
    await mongoose.connect(mongoUrl);
  
    await populatePokemon();
  
    await mongoose.disconnect();
  };
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  