import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CardCard(props) {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/game/${props.id}`, { state: { game: props } })}
      style={{
        width: "300px",
        height: "425px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: "15px",
        cursor: "pointer"
      }}
    >
      <Card.Img 
        src={`/p4/images/${props.img}`} 
        alt={props.name} 
        style={{ width: "250px", height: "250px", objectFit: "cover" }} 
      />
      <h5>{props.name}</h5>
      <p style={{ margin: "2px 0", lineHeight: 1.2 }}>Number of Players: {props.num_players}</p>
      <p style={{ margin: "2px 0", lineHeight: 1.2 }}>Estimated Playtime: {props.playtime}</p>
      <p style={{ marginTop: "2px", marginBottom: "8px", lineHeight: 1.2 }}>Difficulty: {props.difficulty}</p>
    </Card>
  );
}