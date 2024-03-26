import "../styles/Header.css";
import PropTypes from "prop-types";

export default function Header({ currentScore, highestScore }) {
  return (
    <header>
      <h1>
        <div className="header-text">
          <span className="poke">Poke</span>
          <span className="memo">Memo</span>
        </div>
      </h1>
      <div className="score-container">
        <h3>SCORE: {currentScore}</h3>
        <h3>HIGHEST SCORE: {highestScore}</h3>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
};
