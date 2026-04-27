import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import '../App.css'

export default function AddGamePage() {
    const [instructions, setInstructions] = useState('')
    const [name, setName] = useState('')
    const [players, setPlayers] = useState('')
    const [time, setTime] = useState('')

    const preventNegativeNumberInput = (event) => {
        if (['-', '+', 'e', 'E', '.'].includes(event.key)) {
            event.preventDefault()
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await fetch("https://script.google.com/macros/s/AKfycbwoF6cnOvwR-9MddRE4R2ZfmEnDjnMlGe2Juu9BI0H_E60_OEy69dWPxoMriLI9XFVV/exec", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    name: name,
                    num_players: players,
                    avg_time: time,
                    rules: instructions
                })
            })

            alert("Game submitted!")

            // clear input boxes
            setName('')
            setPlayers('')
            setTime('')
            setInstructions('')
        } catch (error) {
            console.error("Fetch error:", error)
            alert("Error submitting game. Please try again.")
        }
    }

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Card className="m-4 p-2 add-game-card">
                <Card.Body>
                    <h2 className="text-center">Suggest a Game</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Card Game Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the name of the game"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Number of Players</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="2-6"
                                value={players}
                                onChange={(e) => setPlayers(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Average Time</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                onKeyDown={preventNegativeNumberInput}
                                placeholder="minutes"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>How to Play</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}