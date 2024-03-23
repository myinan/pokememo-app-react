import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <h1>PokeMemo</h1>
      <div className="score-container">
        <h3>Current Score:</h3>
        <h3>Highest Score:</h3>
      </div>
    </header>
  );
}
