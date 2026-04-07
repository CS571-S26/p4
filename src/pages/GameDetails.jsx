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
        alt={game.name}
        style={{ width: "300px", height: "300px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p>Number of Players: {game.num_players}</p>
      <p>Estimated Playtime: {game.playtime}</p>
      <p>Difficulty: {game.difficulty}</p>
    </div>
  );
}