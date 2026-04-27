import cardGames from "../data/cardGames";
import CardCard from "./CardCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function FunCardsPage() {
  
  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="text-center my-4">
        <h1>Fun Cards</h1>
      </div>
      <Container>
        <Row id="cardGames">
          <p>Here are some of our favorite card decks and accessories to consider for your next fun card purchase!</p>
        </Row>
      </Container>
    </div>
  );
}