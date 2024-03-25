import "../styles/EndGameModal.css";
import { useRef, useContext, useEffect } from "react";
import { ContinueStatusContext } from "./contexts/ContinueStatusContext";

export default function EndGameModal() {
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
      <button type="button" onClick={refresh}>
        Play again
      </button>
    </dialog>
  );
}
