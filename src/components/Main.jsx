import usePokeData from "./customHooks/usePokeData";

export default function Main() {
  usePokeData();

  return <p>Main Component</p>;
}
