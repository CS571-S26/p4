import cardGames from "../data/cardGames";
import CardCard from "./CardCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="text-center my-4">
        <h1>Favorites</h1>
        {favorites.length === 0 && <p>No favorites yet.</p>}
      </div>
      <Container>
        <Row id="cardGames">
          {cardGames.filter(card => favorites.includes(card.id)).map(card => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4} xl={3}>
              <CardCard {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}