import { Button, Card } from "react-bootstrap";
import "../components/Button.css";

export default function CardCard(props) {
    return (
        <Card style={{
            width: "300px",
            height: "425px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            margin: "15px"
        }}>
            <Card.Img 
                src={`/p4/images/${props.img}`}
                alt={props.name}
                style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover"
                }}
            />
            <h5>{props.name}</h5>
            <p style={{ margin: "2px 0", lineHeight: 1.2 }}>Number of Players: {props.num_players}</p>
            <p style={{ margin: "2px 0", lineHeight: 1.2 }}>Estimated Playtime: {props.playtime}</p>
            <p style={{ marginTop: "2px", marginBottom: "8px", lineHeight: 1.2 }}>Difficulty: {props.difficulty}</p>
            <Button className="dark-red-button">Show More</Button>
        </Card>
    )
}