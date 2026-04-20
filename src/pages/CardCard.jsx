import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CardCard(props) {
  const navigate = useNavigate();
  const [starred, setStarred] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    return favs.includes(props.id);
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      setStarred(favs.includes(props.id));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [props.id]);

  const handleStarClick = (e) => {
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let newFavs;
    if (favs.includes(props.id)) {
      newFavs = favs.filter(id => id !== props.id);
    } else {
      newFavs = [...favs, props.id];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setStarred(!starred);
  };

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
        cursor: "pointer",
        position: "relative"
      }}>
      <div
        onClick={handleStarClick}
        style={{
          position: "absolute",
          bottom: "0px",
          left: "5px",
          fontSize: "45px",
          cursor: "pointer",
          userSelect: "none"
        }}>
        {starred ? "★" : "☆"}
      </div>

      <Card.Img
        src={`/p4/images/${props.img}`}
        alt={props.name}
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
      />

      <h5>{props.name}</h5>
      <p style={{ margin: "2px 0", lineHeight: 1.2 }}>
        Number of Players: {props.num_players}
      </p>
      <p style={{ margin: "2px 0", lineHeight: 1.2 }}>
        Estimated Playtime: {props.playtime}
      </p>
      <p style={{ marginTop: "2px", marginBottom: "8px", lineHeight: 1.2 }}>
        Difficulty: {props.difficulty}
      </p>
    </Card>
  );
}