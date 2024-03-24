import "../styles/Main.css";
import { useState } from "react";
import PropTypes from "prop-types";
import usePokeData from "./customHooks/usePokeData";

function PokeCard({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p className="card-name">{pokemon.name}</p>
    </div>
  );
}

// Define prop-types for the PokeCard component
PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Main() {
  const [pokeData, setPokeData] = useState(null);
  usePokeData(setPokeData);

  return (
    <main>
      {!pokeData ? (
        <p>Fetching...</p>
      ) : (
        <>
          <p>A/{pokeData.length}</p>
          <div className="cards-container">
            {pokeData.map((pokemon) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
