import { useState } from "react";

export default function App() {
  const [searchInput, setSearchInput] = useState();

  return (
    <>
      <section>
        <div className="container text-center">
          <h1>CIAOOO</h1>
          <div className="input-group mb-3">
            <input
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              // ^
              type="text"
              className="form-control"
              placeholder="Recipient’s username"
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
