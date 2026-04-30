import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FunCard(props) {
  return (
    <Card
      as={Link}
      to={props.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="fun-card text-decoration-none text-dark"
      aria-label={`View ${props.name}`}
    >
      <Card.Img
        className="fun-card-img"
        src={`/p4/images/${props.img}`}
        alt={`Cover image for playing cards with the theme of ${props.name}`}
      />

      <Card.Body className="fun-card-body">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </Card.Body>
    </Card>
  );
}
