
export default function PokemonCard({ pokemon, lang, selectPokemon}) {
    
  return (
    <div onClick={() => selectPokemon(pokemon)}>
      <div className="poke-card">
        <img
          src={`https://github.com/PokeAPI/sprites/raw/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/${pokemon.number}.png`}
          alt={pokemon.name.english}
        />
        <p>{pokemon.name[lang]}</p>
      </div>
    </div>
  );
}
