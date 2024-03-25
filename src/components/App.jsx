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
          <Main />
          <footer></footer>
        </div>
      </ContinueStatusContext.Provider>
    </DifficultyContext.Provider>
  );
}

export default App;
