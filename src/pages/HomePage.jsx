import cardGames from "../data/cardGames";
import CardCard from "./CardCard";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="text-center my-4">
        <h1>Card Collector's Collective</h1>
      </div>
      <Container>
        <Row id="cardGames">
          {cardGames.map(card => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4} xl={3}>
              <CardCard {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}