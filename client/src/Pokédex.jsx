import "./styles/pokedexStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";

import PokemonCard from "./Components/PokemonCard";
import PokedexComponent from "./Components/PokedexComponent";
export default function Pokédex() {
  const LINK = "http://localhost:3070/";
  const [pokemon, setPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [lang, setLang] = useState("english");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPokemon, setSelectedPokemon] = useState({});

  // ----------------------axios
  useEffect(() => {
    axios
      .get(LINK)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    if (pokemon.length) {
      setSelectedPokemon(pokemon[0]);
    }
  }, []);


  const allLanguages = pokemon
    .map((p) => Object.keys(p.name))
    .reduce((acc, val) => acc.concat(val), []);
  const uniqueLanguages = [...new Set(allLanguages)];

  const allTypes = pokemon
    .map((obj) => obj.types)
    .reduce((acc, val) => acc.concat(val), []);
  const uniqueTypes = [...new Set(allTypes)];

  const pokemonTypes =
    selectedType === "All"
      ? pokemon
      : pokemon.filter((pokemon) => pokemon.types.includes(selectedType));

  const filteredPokemon =
    searchValue === ""
      ? pokemonTypes
      : pokemonTypes.filter((pokemon) =>
          pokemon.name[lang].toLowerCase().includes(searchValue.toLowerCase())
        );

  return (
    <div>
      <div>
        <h1 className="title">Pokédex</h1>
      </div>
      <main>
        <div className="filter-poke-ctn">
          <PokedexComponent selectedPokemon={selectedPokemon} lang={lang} />

          <div className="right-container">
            <div className="Filters-ctn">
              <div className="select-filter">
                <div className="input-field">
                  <label >
                    Search:
                    <input
                      type="text"
                      placeholder="pokemon"
                      value={searchValue}
                      onChange={(event) => {
                        setSearchValue(event.target.value);
                      }}
                    />
                  </label>
                </div>

                <label className="searchFilter">
                  Language:
                  <select
                    value={lang}
                    onChange={(event) => {
                      setLang(event.target.value);
                    }}
                  >
                    {uniqueLanguages.map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </label>

                <div>
                  <label className="searchFilter">
                    Type:
                    <select
                      value={selectedType}
                      onChange={(event) => {
                        setSelectedType(event.target.value);
                      }}
                    >
                      <option>All</option>
                      {uniqueTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <button
                className="res-btn"
                onClick={() => {
                  setSearchValue("");
                  setLang("english");
                  setSelectedType("All");
                  setSelectedPokemon("");
                }}
              >
                RESET
              </button>
            </div>
            <div className="pokemon-grid">
              {filteredPokemon.map((pokemon) => (
                <li key={pokemon.number}>
                  <PokemonCard
                    pokemon={pokemon}
                    lang={lang}
                    selectPokemon={(pokemon) => setSelectedPokemon(pokemon)}
                  />
                </li>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
