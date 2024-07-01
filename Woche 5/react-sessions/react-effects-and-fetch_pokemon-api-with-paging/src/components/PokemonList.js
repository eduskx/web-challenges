import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  let [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(offset);
    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => (offset > 0 ? setOffset((offset -= 20)) : null)}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffset((offset += 20))}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
