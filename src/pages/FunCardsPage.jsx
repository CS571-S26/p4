import funCards from "../data/funCards";
import FunCard from "../components/FunCard";
import { Container, Row, Col } from "react-bootstrap";

export default function FunCardsPage() {

    return (
        <div className="w-100 h-100 d-flex flex-column align-items-center">
            <div className="text-center my-4">
                <h1 className="p-3">Fun Cards</h1>
                <p>Here are some of our favorite playing cards and accessories to consider for your next fun card purchase! Click on a card to learn more.</p>
            </div>
            <Container>
                <Row id="cardGames" className="justify-content-center">
                    {funCards.map(card => (
                        <Col key={card.id} xs="auto">
                            <FunCard {...card} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
