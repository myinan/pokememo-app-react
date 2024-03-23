import { useEffect, useContext } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";

const TOTAL = 1000;

export default function Main() {
  const [difficultyContext] = useContext(DifficultyContext);
  const deckLength =
    difficultyContext === "easy" ? 1 : difficultyContext === "medium" ? 3 : 5;

  useEffect(() => {
    let ignore = false;

    async function getRandomPokemon() {
      try {
        // Generate a list of random Pokemon IDs
        const randomPokemonIds = Array.from(
          { length: deckLength },
          () => Math.floor(Math.random() * TOTAL) + 1
        );

        // Fetch data for each randomly selected Pokemon
        const randomPokemonData = await Promise.all(
          randomPokemonIds.map(async (pokemonId) => {
            const pokemonResponse = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
            );
            const pokemonData = await pokemonResponse.json();
            return {
              name: pokemonData.name,
              sprite: pokemonData.sprites.front_default,
            };
          })
        );

        return randomPokemonData;
      } catch (error) {
        throw new Error(error);
      }
    }

    function log(data) {
      // Display the Pokemon data
      data.forEach((pokemon) => {
        console.log(`Name: ${pokemon.name}, Sprite: ${pokemon.sprite}`);
      });
    }

    if (!ignore && difficultyContext) {
      getRandomPokemon()
        .then(log)
        .catch((error) =>
          console.error("Error fetching random Pokémon data:", error)
        );
    }
  }, [deckLength, difficultyContext]);

  return <p>Main Component</p>;
}
