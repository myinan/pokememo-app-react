import "../styles/Modal.css";
import { useRef, useEffect, useState, useContext } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";

export default function SelectionModal() {
  const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [currentDifficulty, setCurrentDifficulty] = useState("easy");
  const [, setDifficultyContext] = useContext(DifficultyContext);

  function onClick(e) {
    setCurrentDifficulty(e.target.value);
  }

  useEffect(() => {
    const dialogNode = ref.current;
    dialogNode.showModal();
    return () => dialogNode.close();
  }, []);

  return !show ? null : (
    <dialog ref={ref}>
      <p>Choose difficulty</p>
      <div className="difficulty-btn-container">
        <button
          type="button"
          value="easy"
          onClick={onClick}
          className={currentDifficulty === "easy" ? "selected" : ""}
        >
          Easy
        </button>
        <button
          type="button"
          value="medium"
          onClick={onClick}
          className={currentDifficulty === "medium" ? "selected" : ""}
        >
          Medium
        </button>
        <button
          type="button"
          value="hard"
          onClick={onClick}
          className={currentDifficulty === "hard" ? "selected" : ""}
        >
          Hard
        </button>
      </div>
      <button
        className="start-btn"
        onClick={() => {
          setDifficultyContext(currentDifficulty);
          setShow(false);
        }}
      >
        Start the game
      </button>
    </dialog>
  );
}
