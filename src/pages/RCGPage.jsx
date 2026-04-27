import cardGames from "../data/cardGames";
import CardCard from "./CardCard";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";

export default function RCGPage() {
    const [randomCard, setRandomCard] = useState(null);
    const [animate, setAnimate] = useState(false);
    const [phase, setPhase] = useState("ready"); 

    const handleClick = () => {
        if (phase === "show") {
            setAnimate(false);
            setPhase("resetting");

            setTimeout(() => {
                setPhase("ready");
            }, 300);

            return;
        }

        const randomIndex = Math.floor(Math.random() * cardGames.length);
        setRandomCard(cardGames[randomIndex]);

        setAnimate(true);
        setPhase("show");
    };

    const getButtonText = () => {
        if (phase === "show") return "Reshuffle";
        return "Draw Card";
    };

    return (
        <Container className="mt-5 text-center">
            <h1 className="mb-1">Random Card Generator</h1>

            <p className="text-muted mb-3">
                Want to find a fun game for everyone to play?
            </p>
            <Button
                variant={phase === "show" ? "light" : "dark"}
                size="lg"
                onClick={handleClick}
                className="mb-4 px-4 py-2"
            >
                {getButtonText()}
            </Button>

            <div className="flip-scene">
                <div className={`flip-card ${animate ? "flipped" : ""}`}>

                    <div className="flip-face flip-front">
                        <div className="card-back-design">
                            <div className="card-back-title">CARD DECK</div>
                            <div className="card-back-pattern"></div>
                        </div>
                    </div>

                    <div className="flip-face flip-back">
                        {randomCard && <CardCard {...randomCard} />}
                    </div>

                </div>
            </div>
        </Container>
    );
}