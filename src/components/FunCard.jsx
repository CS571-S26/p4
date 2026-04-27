import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FunCard(props) {
  return (
    <Card
      as={Link}
      to={props.link || "#"}
      className="fun-card text-decoration-none text-dark"
      aria-label={`View ${props.name}`}
    >
      <Card.Img
        className="fun-card-img"
        src={new URL(`../assets/${props.img}`, import.meta.url).href}
        alt={`Cover image for the card game ${props.name}`}
      />

      <Card.Body className="fun-card-body">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </Card.Body>
    </Card>
  );
}