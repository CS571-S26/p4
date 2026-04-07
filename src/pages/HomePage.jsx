import { useState } from 'react'
import '../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import CardCard from './CardCard'

export default function HomePage() {

  const cards = [
    { id: 1, name: "President", img: "obama.jpg", num_players: "3+", playtime: "5-10 mins", difficulty: "easy"},
    { id: 2, name: "First Lady", img: "michelle_obama.jpg", num_players: "4", playtime: "30 minutes", difficulty: "hard"},
    { id: 3, name: "Vice President", img: "joe_biden.jpg", num_players: "2", playtime: "10 minutes", difficulty: "hard"},
    { id: 4, name: "Secretary", img: "hillary_clinton.jpg", num_players: "2-3", playtime: "15 minutes", difficulty: "moderate" },
    { id: 4, name: "Secrdsfdsfetary", img: "hillary_clinton.jpg", num_players: "2-3", playtime: "15 minutes", difficulty: "moderate" }
  ]

  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
    
      <div className="text-center my-4">
        <h1>Card Collector's Collective</h1>
      </div>
      
      <Container>
        <Row id="cardGames">
          {cards.map(card => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4} xl={3}>
              <CardCard 
                name={card.name} 
                img={card.img} 
                num_players={card.num_players} 
                playtime={card.playtime} 
                difficulty={card.difficulty}/>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}