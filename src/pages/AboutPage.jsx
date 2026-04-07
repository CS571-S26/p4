import '../App.css'
import { useState, useRef } from "react";
import { Card } from 'react-bootstrap'

import lindy_img from "../assets/lindy_sk_1.png";
import yanna_img from "../assets/yanna_sk.png";
import arya_img from "../assets/arya-1.png";

const CARDS = [
  { title: "lindy", sub: "[bio]", img: lindy_img },
  { title: "yanna", sub: "[bio]", img: yanna_img },
  { title: "arya", sub: "[bio]", img: arya_img },
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
    setTimeout(() => setCards((prev) => prev.slice(1)), 380);
  };

  const onMouseDown = (e) => {
    dragState.current = { startX: e.clientX, curX: 0, dragging: true };
    topRef.current.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!dragState.current.dragging) return;
    const dx = e.clientX - dragState.current.startX;
    dragState.current.curX = dx;
    const rot = dx * 0.06;
    topRef.current.style.transform = `translate(${dx}px, 0) rotate(${rot}deg)`;
  };

  const onMouseUp = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    const dx = dragState.current.curX;
    if (Math.abs(dx) > 90) {
      dismiss(dx > 0 ? "right" : "left");
    } else {
      topRef.current.style.transition = "transform 0.4s cubic-bezier(.175,.885,.32,1.275)";
      topRef.current.style.transform = "translate(0,0) rotate(0deg)";
    }
  };
  // return (
  //   <div className="w-100 h-100 d-flex justify-content-center align-items-center">
  //     <Card className='m-4 p-2'>
  //       <Card.Body className='text-center'>
  //         <h2>About</h2>
  //         <p>Whether you want to learn Go Fish or just need a
  //           refresher on what exactly the trump suit in Euchre does, Card Collector's Collective has a resource.
  //           This web application hosts all the descriptions, how-to-plays, and resources needed to play a wide variety of card games. Save your favorites and request a new one to be added!</p>

  //         <h2>Meet the Team</h2>
  //         <p>We are three card-loving college students who became frustrated by the lack of one, central card game learning resource.
  //           We hope C<sup>3</sup> will provide a convenient place for newcomers and veterans alike to learn and save their favorites!</p>
  //       </Card.Body>
  //     </Card>
  //   </div>
  // )
  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Card className='m-4 p-2'>
          <Card.Body className='text-center'>
            <h2>About</h2>
            <p>Whether you want to learn Go Fish or just need a
              refresher on what exactly the trump suit in Euchre does, Card Collector's Collective has a resource.
              This web application hosts all the descriptions, how-to-plays, and resources needed to play a wide variety of card games. Save your favorites and request a new one to be added!</p>

            <h2>Meet the Team</h2>
            <p>We are three card-loving college students who became frustrated by the lack of one, central card game learning resource.
              We hope C<sup>3</sup> will provide a convenient place for newcomers and veterans alike to learn and save their favorites!</p>
          </Card.Body>
        </Card>
      </div>
      <Card
        style={{ position: "relative", width: 280, height: 360, margin: "0 auto" }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {cards.slice(0, 4).map((card, i) => {
          const isTop = i === 0;
          const scale = 1 - i * 0.04;
          const ty = i * 10;
          return (
            <Card
              key={card.title}
              ref={isTop ? topRef : null}
              onMouseDown={isTop ? onMouseDown : undefined}
              style={{
                position: "absolute",
                overflow: "hidden",
                height: "100%",
                width: "100%",
                inset: 0,
                transform: `translateY(${ty}px) scale(${scale})`,
                transition: isTop ? "none" : "transform 0.3s ease",
                zIndex: isTop ? 10 : 4 - i,
                cursor: isTop ? "grab" : "default",
                userSelect: "none",
              }}
            >
              <Card.Img variant="top" src={card.img} style={{ height: 500, objectFit: "cover" }} />
              <Card.Body>
                <Card.Title style={{ fontSize: 15 }}>{card.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: 13 }}>{card.sub}</Card.Text>
              </Card.Body>
              {/* <img
                src={card.img}
                alt={card.title}
                draggable="false"
                style={{ width: "100%", height: "80%", objectFit: "cover", display: "block" }}
              /> */}
            </Card>

          );
        })}
      </Card>
    </>
  );
}
