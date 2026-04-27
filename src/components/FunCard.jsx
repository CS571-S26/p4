import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function FunCard(props) {

    return (
        <Card
            // onClick={() => navigate(`/game/${props.id}`, { state: { game: props } })}
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

            <Card.Img
                src={new URL(`../assets/${props.img}`, import.meta.url).href}
                alt={props.name}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />

            <h5>{props.name}</h5>
            <p style={{ margin: "2px 0", lineHeight: 1.2 }}>
                {props.description}
            </p>
        </Card>
    );
}
