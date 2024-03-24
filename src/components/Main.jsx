import "../styles/Main.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import usePokeData from "./customHooks/usePokeData";

function PokeCard({
  pokemon,
  chosenCards,
  setChosenCards,
  continueStatus,
  setContinueStatus,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        chosenCards.includes(pokemon.name)
          ? setContinueStatus(false)
          : continueStatus
            ? setChosenCards([...chosenCards, pokemon.name])
            : null;
      }}
    >
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
  chosenCards: PropTypes.array.isRequired,
  setChosenCards: PropTypes.func.isRequired,
  continueStatus: PropTypes.bool.isRequired,
  setContinueStatus: PropTypes.func.isRequired,
};

export default function Main() {
  const [pokeData, setPokeData] = useState(null);
  usePokeData(setPokeData);

  const [chosenCards, setChosenCards] = useState([]);
  const [continueStatus, setContinueStatus] = useState(true);

  useEffect(() => {
    console.log(chosenCards);
    console.log(continueStatus);
  }, [chosenCards, continueStatus]);

  return (
    <main>
      {!pokeData ? (
        <p>Fetching...</p>
      ) : (
        <>
          <p>
            {chosenCards.length}/{pokeData.length}
          </p>
          <div className="cards-container">
            {pokeData.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                pokemon={pokemon}
                chosenCards={chosenCards}
                setChosenCards={setChosenCards}
                continueStatus={continueStatus}
                setContinueStatus={setContinueStatus}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
