import "../styles/EndGameModal.css";
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
      <p>Game over</p>
      <p>Current Score: {currentScore}</p>
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
