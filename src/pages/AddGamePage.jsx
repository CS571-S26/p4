import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import '../App.css'

export default function AddGamePage() {
    const [instructions, setInstructions] = useState('')
    const preventNegativeNumberInput = (event) => {
        if (['-', '+', 'e', 'E', '.'].includes(event.key)) {
            event.preventDefault()
        }
    }

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Card className="m-4 p-2 add-game-card">
                <Card.Body>
                    <h2 className="text-center">Add a Game</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGameName">
                            <Form.Label>Card Game Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter the name of the game" />
                            <Form.Text className="text-muted">
                                Use a unique name to ensure easy access
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumPlayers">
                            <Form.Label>Number of Players</Form.Label>
                            <Form.Control type="text" placeholder="Enter player range" />
                            <Form.Text className="text-muted">
                                Use format: min-max (e.g. 2-6)
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTime">
                            <Form.Label>Average Time</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                step="1"
                                inputMode="numeric"
                                onKeyDown={preventNegativeNumberInput}
                                placeholder="Enter time per game in minutes"
                            />
                            <Form.Text className="text-muted">
                                Use a positive integer
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInstructions">
                            <Form.Label>How to Play</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                value={instructions}
                                onChange={(event) => setInstructions(event.target.value)}
                                placeholder="Enter instructions to play"
                                className="instructions-input"
                            />
                            <Form.Text className="text-muted">
                                Include set up, how to play each round, number of rounds, etc.
                            </Form.Text>
                        </Form.Group>
                        <div className="mb-3">
                            <h3 className="fs-5">Instructions Preview</h3>
                            <div className="instructions-preview">
                                {instructions || 'Your full instructions will appear here while you type.'}
                            </div>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
