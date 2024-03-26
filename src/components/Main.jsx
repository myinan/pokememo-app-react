import "../styles/Main.css";
import pokeball from "../assets/pokeball.svg";
import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import usePokeData from "./customHooks/usePokeData";
import { ContinueStatusContext } from "./contexts/ContinueStatusContext";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function PokeCard({
  pokeData,
  setPokeData,
  pokemon,
  chosenCards,
  setChosenCards,
  setCurrentScore,
}) {
  const [continueStatusContext, setContinueStatusContext] = useContext(
    ContinueStatusContext
  );

  function setAndShuffle() {
    setChosenCards([...chosenCards, pokemon.name]);
    setCurrentScore((prev) => prev + 1);
    setPokeData(shuffleArray(pokeData));
  }

  return (
    <div
      className="card"
      onClick={() => {
        chosenCards.includes(pokemon.name)
          ? setContinueStatusContext(false)
          : continueStatusContext
            ? setAndShuffle()
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
  pokeData: PropTypes.array.isRequired,
  setPokeData: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
  chosenCards: PropTypes.array.isRequired,
  setChosenCards: PropTypes.func.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
};

export default function Main({ setRestart, setCurrentScore }) {
  const [pokeData, setPokeData] = useState(null);
  const [chosenCards, setChosenCards] = useState([]);

  usePokeData(setPokeData);

  useEffect(() => {
    setRestart(pokeData !== null && pokeData.length === chosenCards.length);
  }, [chosenCards, pokeData, setRestart]);

  return (
    <main>
      {!pokeData ? (
        <img src={pokeball} alt="Pokeball" className="pokeball"></img>
      ) : (
        <>
          <p>
            {chosenCards.length}/{pokeData.length}
          </p>
          <div className="cards-container">
            {pokeData.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                pokeData={pokeData}
                setPokeData={setPokeData}
                pokemon={pokemon}
                chosenCards={chosenCards}
                setChosenCards={setChosenCards}
                setCurrentScore={setCurrentScore}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

// Define prop-types for the Main component
Main.propTypes = {
  setRestart: PropTypes.func.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
};
