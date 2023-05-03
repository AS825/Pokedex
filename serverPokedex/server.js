require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const POKEDEX = require("./modules/PokemonSchema");
const cors = require("cors");

const PORT = 3070;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Getting all
app.get("/", async (req, res) => {
  let pokemons = await POKEDEX.find().sort({ number: "ASC" });
  return res.json(pokemons);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
