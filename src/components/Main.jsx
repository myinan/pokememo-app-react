import { useEffect, useContext } from "react";
import { DifficultyContext } from "./contexts/DifficultyContext";

export default function Main() {
  const [difficultyContext] = useContext(DifficultyContext);
  useEffect(() => {
    console.log(difficultyContext);
  });
  return <p>Main Component</p>;
}
