import "../styles/App.css";
import { useState } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";
import SelectionModal from "./SelectionModal";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [difficultyContext, setDifficultyContext] = useState(null);

  return (
    <DifficultyContext.Provider
      value={[difficultyContext, setDifficultyContext]}
    >
      <div className="app">
        <SelectionModal />
        <Header />
        <Main />
        <footer></footer>
      </div>
    </DifficultyContext.Provider>
  );
}

export default App;
