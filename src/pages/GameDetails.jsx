import { useParams, useLocation } from "react-router-dom";
import cards from "../data/cardGames";

export default function GameDetail() {
  const { id } = useParams();
  const location = useLocation();

  const game = location.state?.game || cards.find(g => g.id === Number(id));

  if (!game) return <p>Game not found!</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{game.name}</h1>
      <img
        src={`/p4/images/${game.img}`}
        alt={`Cover art/image for the card game ${game.name}`}
        style={{ width: "300px", height: "300px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p>Number of Players: {game.num_players}</p>
      <p>Estimated Playtime: {game.playtime}</p>
      <p>Difficulty: {game.difficulty}</p>
      <div style={{ whiteSpace: "pre-line", textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
        <h3>Setup </h3>
        <p>{game.setup}</p>
      </div>
      <div style={{ whiteSpace: "pre-line", textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
        <h3>How to Play: </h3>
        <p>{game.description}</p>
      </div>
    </div>
  );
}