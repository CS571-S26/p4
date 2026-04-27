import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CardCard(props) {
  const navigate = useNavigate();
  const bubbleTimeoutRef = useRef(null);
  const [bubbleTick, setBubbleTick] = useState(0);
  const [isBubbling, setIsBubbling] = useState(false);
  const [starred, setStarred] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    return favs.includes(props.id);
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      setStarred(favs.includes(props.id));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      if (bubbleTimeoutRef.current) {
        window.clearTimeout(bubbleTimeoutRef.current);
      }
    };
  }, [props.id]);

  const handleStarClick = (e) => {
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let newFavs;
    if (favs.includes(props.id)) {
      newFavs = favs.filter((id) => id !== props.id);
    }
    else {
      newFavs = [...favs, props.id];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setStarred(!starred);
    if (bubbleTimeoutRef.current) {
      window.clearTimeout(bubbleTimeoutRef.current);
    }
    setBubbleTick((tick) => tick + 1);
    setIsBubbling(true);
    bubbleTimeoutRef.current = window.setTimeout(() => {
      setIsBubbling(false);
      bubbleTimeoutRef.current = null;
    }, 500);
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
      <button
        type="button"
        onClick={handleStarClick}
        className={`favorite-star-button ${starred ? "starred" : ""} ${isBubbling ? "bubbling" : ""}`}
        aria-label={starred ? `Remove ${props.name} from favorites` : `Add ${props.name} to favorites`}
        style={{
          background: "transparent",
          boxShadow: "none",
          width: "auto",
          height: "auto",
          padding: 0
        }}>
        <span key={bubbleTick}>
          <span
            className="favorite-star-glyph"
            aria-hidden="true"
            style={{
              fontSize: "2.8rem",
              color:"#ff6b6b",
            }}>
            {starred ? "★" : "☆"}
          </span>
          <span className="favorite-star-bubble" aria-hidden="true"></span>
          <span className="favorite-star-bubble" aria-hidden="true"></span>
          <span className="favorite-star-bubble" aria-hidden="true"></span>
          <span className="favorite-star-bubble" aria-hidden="true"></span>
          <span className="favorite-star-bubble" aria-hidden="true"></span>
        </span>
      </button>

      <Card.Img
        src={`/p4/images/${props.img}`}
        alt={`Cover art/image for the card game ${props.name}`}
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
