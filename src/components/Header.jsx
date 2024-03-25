import "../styles/Header.css";
import PropTypes from "prop-types";

export default function Header({ currentScore, highestScore }) {
  return (
    <header>
      <h1>PokeMemo</h1>
      <div className="score-container">
        <h3>Current Score: {currentScore}</h3>
        <h3>Highest Score: {highestScore}</h3>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
};
