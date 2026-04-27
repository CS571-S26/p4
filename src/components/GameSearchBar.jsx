import { Form } from "react-bootstrap";
import { useState } from "react";

export default function GameSearchBar({ filters, onChange, onClear, resultCount }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="mb-4">
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setShowSearch((curr) => !curr)}
      >
        {showSearch ? "Hide Search" : "Search"}
      </button>

      {showSearch && (
        <>
          <div className="search-input-row mt-2">

            {/* Name */}
            <Form.Group className="mb-2">
              <Form.Label htmlFor="game-search-name">Game Name</Form.Label>
              <Form.Control
                id="game-search-name"
                type="text"
                value={filters.name}
                onChange={(event) =>
                  onChange({ ...filters, name: event.target.value })
                }
              />
            </Form.Group>

            {/* Players */}
            <Form.Group className="mb-2">
              <Form.Label htmlFor="game-search-players">
                Number of Players
              </Form.Label>
              <Form.Control
                id="game-search-players"
                type="text"
                value={filters.players}
                onChange={(event) =>
                  onChange({ ...filters, players: event.target.value })
                }
              />
            </Form.Group>

            {/* Time */}
            <Form.Group className="mb-2">
              <Form.Label htmlFor="game-search-time">
                Max Play Time
              </Form.Label>
              <Form.Control
                id="game-search-time"
                type="text"
                value={filters.time}
                onChange={(event) =>
                  onChange({ ...filters, time: event.target.value })
                }
              />
            </Form.Group>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={onClear}
            >
              Clear
            </button>
          </div>

          <p className="text-muted mt-2 mb-0">
            {resultCount} result{resultCount === 1 ? "" : "s"}
          </p>
        </>
      )}
    </div>
  );
}