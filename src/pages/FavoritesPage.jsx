import cardGames from "../data/cardGames";
import CardCard from "../components/CardCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import GameSearchBar from "../components/GameSearchBar";
import { filterGames } from "../data/gameFilters";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [filters, setFilters] = useState({
    name: "",
    players: "",
    time: ""
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const favoriteGames = cardGames.filter((card) => favorites.includes(card.id));
  const visibleFavorites = filterGames(favoriteGames, filters);

  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="text-center my-4">
        <h1>Favorites</h1>
        {favorites.length === 0 && <p>No favorites yet.</p>}
      </div>
      <Container>
        {favorites.length > 0 && (
          <GameSearchBar
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters({ name: "", players: "", time: "" })}
            resultCount={visibleFavorites.length}
          />
        )}

        {favorites.length > 0 && visibleFavorites.length === 0 && (
          <p className="text-center text-muted mb-4">No favorite games match your current filters.</p>
        )}

        <Row id="cardGames">
          {visibleFavorites.map(card => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4} xl={3}>
              <CardCard {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}