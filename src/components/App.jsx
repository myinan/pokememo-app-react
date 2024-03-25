import "../styles/App.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";
import { ContinueStatusContext } from "./contexts/ContinueStatusContext";
import SelectionModal from "./SelectionModal";
import EndGameModal from "./EndGameModal";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [difficultyContext, setDifficultyContext] = useState(null);
  const [continueStatusContext, setContinueStatusContext] = useState(true);
  const [restart, setRestart] = useState(false);
  const [round, setRound] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, saveHighestScore] = useLocalStorage("highestScore", 0);

  function updateRestartAndRound() {
    setRestart(false);
    setRound((prev) => prev + 1);
  }

  useEffect(() => {
    if (currentScore > highestScore) saveHighestScore(currentScore);
  }, [saveHighestScore, currentScore, highestScore]);

  return (
    <DifficultyContext.Provider
      value={[difficultyContext, setDifficultyContext]}
    >
      <ContinueStatusContext.Provider
        value={[continueStatusContext, setContinueStatusContext]}
      >
        <div className="app">
          <SelectionModal />
          <EndGameModal />
          <Header currentScore={currentScore} highestScore={highestScore} />
          {restart ? (
            updateRestartAndRound()
          ) : (
            <Main
              key={round}
              setRestart={setRestart}
              setCurrentScore={setCurrentScore}
            />
          )}
          <footer></footer>
        </div>
      </ContinueStatusContext.Provider>
    </DifficultyContext.Provider>
  );
}

export default App;
