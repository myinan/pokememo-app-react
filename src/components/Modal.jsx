import { useRef, useEffect, useState, useContext } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";
import "../styles/Modal.css";

export default function SelectionModal() {
  const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [, setDifficultyContext] = useContext(DifficultyContext);

  function onClick(e) {
    setDifficultyContext(e.target.value);
  }

  useEffect(() => {
    ref.current.showModal();
  }, []);

  return !show ? null : (
    <dialog ref={ref}>
      <p>Choose difficulty</p>
      <div className="difficulty-btn-container">
        <button type="button" value="easy" onClick={onClick}>
          Easy
        </button>
        <button type="button" value="medium" onClick={onClick}>
          Medium
        </button>
        <button type="button" value="hard" onClick={onClick}>
          Hard
        </button>
      </div>
      <button
        className="start-btn"
        onClick={() => {
          setShow(false);
        }}
      >
        Start the game
      </button>
    </dialog>
  );
}
