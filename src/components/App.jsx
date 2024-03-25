import "../styles/App.css";
import { useState } from "react";
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

  function updateRestartAndRound() {
    setRestart(false);
    setRound((prev) => prev + 1);
  }

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
          <Header />
          {restart ? (
            updateRestartAndRound()
          ) : (
            <Main key={round} setRestart={setRestart} />
          )}
          <footer></footer>
        </div>
      </ContinueStatusContext.Provider>
    </DifficultyContext.Provider>
  );
}

export default App;
