import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FunCard(props) {
  return (
    <Card
      as={Link}
      to={props.link || "#"}
      className="text-decoration-none text-dark"
      style={{
        width: "300px",
        height: "425px",
      }}
      aria-label={`View ${props.name}`}
    >
      <Card.Img
        src={new URL(`../assets/${props.img}`, import.meta.url).href}
        alt={`Cover image for the card game ${props.name}`}
      />

      <Card.Body>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </Card.Body>
    </Card>
  );
}