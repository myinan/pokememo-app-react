import { useEffect, useContext } from "react";
import { DifficultyContext } from "../contexts/DifficultyContext";

export default function usePokeData(setPokeData) {
  const TOTAL = 1000;
  const [difficultyContext] = useContext(DifficultyContext);
  const deckLength =
    difficultyContext === "easy" ? 5 : difficultyContext === "medium" ? 10 : 15;

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

        setPokeData(randomPokemonData);
      } catch (error) {
        throw new Error(error);
      }
    }

    if (!ignore && difficultyContext) {
      getRandomPokemon();
    }

    return () => {
      ignore = true;
    };
  }, [difficultyContext, deckLength, setPokeData]);
}
