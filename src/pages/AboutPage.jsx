import '../App.css'
import { useState, useRef } from "react";
import { Card } from 'react-bootstrap';

const CARDS = [
  { title: "arya", img: `${import.meta.env.BASE_URL}images/arya_card.png` },
  { title: "lindy", img: `${import.meta.env.BASE_URL}images/lindy_card.png` },
  { title: "yanna", img: `${import.meta.env.BASE_URL}images/yanna_card.png` },
];

export default function AboutPage() {
  const [cards, setCards] = useState(CARDS);
  const dragState = useRef({ startX: 0, curX: 0, dragging: false });
  const topRef = useRef(null);

  const dismiss = (dir) => {
    const el = topRef.current;
    if (!el) return;

    const tx = dir === "right" ? 600 : -600;

    el.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    el.style.transform = `translate(${tx}px, 0) rotate(${dir === "right" ? 20 : -20}deg)`;
    el.style.opacity = "0";

    setTimeout(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
      if (topRef.current) {
        topRef.current.style.transition = "none";
        topRef.current.style.opacity = "1";
      }
    }, 380);
  };

  const onPointerDown = (e) => {
    dragState.current = { startX: e.clientX, curX: 0, dragging: true };
    if (topRef.current) topRef.current.style.transition = "none";
  };

  const onPointerMove = (e) => {
    if (!dragState.current.dragging || !topRef.current) return;

    const dx = e.clientX - dragState.current.startX;
    dragState.current.curX = dx;

    const rot = dx * 0.06;
    topRef.current.style.transform = `translate(${dx}px, 0) rotate(${rot}deg)`;
  };

  const onPointerUp = () => {
    if (!dragState.current.dragging) return;

    dragState.current.dragging = false;
    const dx = dragState.current.curX;

    if (Math.abs(dx) > 90) {
      dismiss(dx > 0 ? "right" : "left");
    } else {
      topRef.current.style.transition =
        "transform 0.4s cubic-bezier(.175,.885,.32,1.275)";
      topRef.current.style.transform = "translate(0,0) rotate(0deg)";
    }
  };

  return (
    <>
      {/* ABOUT TEXT SECTION */}
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Card className="m-4 p-2">
          <Card.Body className="text-center">
            <h1>About</h1>

            <p>
              Whether you want to learn Go Fish or just need a refresher on what
              exactly the trump suit in Euchre does, Card Collector's Collective
              has a resource. This web application hosts all the descriptions,
              how-to-plays, and resources needed to play a wide variety of card games.
              Save your favorites and request a new one to be added!
            </p>

            <h2>Meet the Team</h2>

            <p>
              We are three card-loving college students who became frustrated by
              the lack of one, central card game learning resource. We hope C<sup>3</sup> will provide a convenient place for newcomers and veterans alike to learn
              and save their favorites!
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* SWIPE IMAGES SECTION */}
      <div
        role="region"
        aria-label="Team profile images"
        className="d-flex justify-content-center"
      >
        <div
          style={{ position: "relative", width: 280, height: 360, margin: "0 auto" }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {cards.slice(0, 3).map((card, i) => {
            const isTop = i === 0;
            const scale = 1 - i * 0.04;
            const ty = i * 10;

            return (
              <img
                key={card.title}
                ref={isTop ? topRef : null}
                src={card.img}
                alt={`${card.title}'s profile image in a cute cartoon illustration style.`}
                draggable={false}
                tabIndex={isTop ? 0 : -1}
                role={isTop ? "button" : undefined}
                aria-label={isTop ? `Swipe profile image for ${card.title}` : undefined}

                onKeyDown={
                  isTop
                    ? (e) => {
                      if (e.key === "ArrowLeft") dismiss("left");
                      if (e.key === "ArrowRight") dismiss("right");
                    }
                    : undefined
                }

                onPointerDown={isTop ? onPointerDown : undefined}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "contain",
                  objectPosition: "center",
                  transform: `translateY(${ty}px) scale(${scale})`,
                  transition: isTop ? "none" : "transform 0.3s ease",
                  zIndex: isTop ? 10 : 4 - i,
                  cursor: isTop ? "grab" : "default",
                  userSelect: "none",
                  touchAction: "none",
                  pointerEvents: isTop ? "auto" : "none",
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
