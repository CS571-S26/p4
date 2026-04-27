import cardGames from "../data/cardGames";
import CardCard from "../components/CardCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import GameSearchBar from "../components/GameSearchBar";
import { filterGames } from "../data/gameFilters";

export default function HomePage() {
  const [filters, setFilters] = useState({
    name: "",
    players: "",
    time: ""
  });
  const visibleGames = filterGames(cardGames, filters);

  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="text-center my-4">
        <h1>Card Collector's Collective</h1>
      </div>
      <Container>
        <GameSearchBar
          filters={filters}
          onChange={setFilters}
          onClear={() => setFilters({ name: "", players: "", time: "" })}
          resultCount={visibleGames.length}
        />

        {visibleGames.length === 0 && (
          <p className="text-center text-muted mb-4">No games match your current filters.</p>
        )}

        <Row id="cardGames">
          {visibleGames.map(card => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4} xl={3}>
              <CardCard {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}