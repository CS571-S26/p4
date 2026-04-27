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
            <Form.Control
              id="game-search-name"
              type="text"
              placeholder="name"
              value={filters.name}
              onChange={(event) => onChange({ ...filters, name: event.target.value })}
            />

            <Form.Control
              id="game-search-players"
              type="text"
              placeholder="num of players"
              value={filters.players}
              onChange={(event) => onChange({ ...filters, players: event.target.value })}
            />

            <Form.Control
              id="game-search-time"
              type="text"
              placeholder="max time"
              value={filters.time}
              onChange={(event) => onChange({ ...filters, time: event.target.value })}
            />

            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onClear}>
              Clear
            </button>
          </div>

          <p className="text-muted mt-2 mb-0">{resultCount} result{resultCount === 1 ? "" : "s"}</p>
        </>
      )}
    </div>
  );
}
