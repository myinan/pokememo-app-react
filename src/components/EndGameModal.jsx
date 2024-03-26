import "../styles/EndGameModal.css";
import pikachuGif from "../assets/pikachu.gif";
import { useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ContinueStatusContext } from "./contexts/ContinueStatusContext";

export default function EndGameModal({ currentScore }) {
  const ref = useRef(null);
  const [continueStatusContext] = useContext(ContinueStatusContext);

  function refresh() {
    window.location.reload();
  }

  useEffect(() => {
    const dialogNode = ref.current;
    if (dialogNode) {
      dialogNode.showModal();
      return () => dialogNode.close();
    }
  }, [continueStatusContext]);

  return continueStatusContext ? null : (
    <dialog key={"endgame-dialog"} ref={ref} className="modal endgame-modal">
      <h1>Game over.</h1>
      <img src={pikachuGif} alt="Pikachu"></img>
      <h2>Final Score: {currentScore}</h2>
      <button type="button" onClick={refresh}>
        Play again ?
      </button>
    </dialog>
  );
}

// Define prop-types for the Main component
EndGameModal.propTypes = {
  currentScore: PropTypes.number.isRequired,
};
