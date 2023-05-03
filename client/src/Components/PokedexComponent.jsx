import React from "react";
import "../styles/dex.css";

export default function PokedexComponent({ selectedPokemon, lang }) {
  return (
    <div className="gameboy" id="GameBoy">
      <div className="screen-area">
        <div className="power">
          <div className="indicator">
            <div className="led"></div>
            <span className="arc" style={{ zindex: "2" }}></span>
            <span className="arc" style={{ zindex: "1" }}></span>
            <span className="arc" style={{ zindex: "0" }}></span>
          </div>
          POWER
        </div>

        <div className="display">
          {selectedPokemon.name ? (
            <div className="pokedex-stats">
             
                <div>
                  <h5 className="poke-header">
                  <a
                rel="noreferrer"
                target="_blank"
            
                href={`https://google.com/search?q=${encodeURIComponent(
                  selectedPokemon.name[lang].toLowerCase()
                )}`}
              >
                    #{selectedPokemon.number} {selectedPokemon.name[lang]}
                    </a>
                  </h5>
                  <p className="poke-text">
                    Type: {selectedPokemon.types.join(", ")} <br />
                    HP: {selectedPokemon.stats.hp},<br />
                    Defense: {selectedPokemon.stats.defense} <br />
                    Attack: {selectedPokemon.stats.attack}
                    <br />
                    Sp. Defense: {selectedPokemon.stats.spDefense} <br />
                    Sp. Attack: {selectedPokemon.stats.spAttack}
                    <br />
                    Speed: {selectedPokemon.stats.speed}
                  </p>
                </div>
                <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  selectedPokemon.name[lang].toLowerCase()
                )}`}
              >
                <div>
                  <img
                    src={`https://github.com/PokeAPI/sprites/raw/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/${selectedPokemon.number}.png`}
                    alt={selectedPokemon.name.english}
                    className="img-pokedex"
                  />
                </div>
              </a>
            </div>
          ) : (
            <div className="pokedex-stats">
              <h3 className="poke-welcome">Select a Pokemon</h3>
            </div>
          )}
        </div>

        <div className="label">
          <div className="titleG">GAME BOY</div>
          <div className="subtitle">
            <span className="c">C</span>
            <span className="o1">O</span>
            <span className="l">L</span>
            <span className="o2">O</span>
            <span className="r">R</span>
          </div>
        </div>
      </div>

      <div className="nintendo">Nintendo</div>

      <div className="controls">
        <div className="dpad">
          <div className="up">
            <i className="fa fa-caret-up"></i>
          </div>
          <div className="right">
            <i className="fa fa-caret-right"></i>
          </div>
          <div className="down">
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="left">
            <i className="fa fa-caret-left"></i>
          </div>
          <div className="middle"></div>
        </div>
        <div className="a-b">
          <div className="b">B</div>
          <div className="a">A</div>
        </div>
      </div>

      <div className="start-select">
        <div className="select">SELECT</div>
        <div className="start">START</div>
      </div>

      <div className="speaker">
        <div className="dot placeholder"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot placeholder"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot placeholder"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot placeholder"></div>
      </div>
    </div>
  );
}
