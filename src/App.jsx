import { useState } from "react";

export default function App() {
  const [searchInput, setSearchInput] = useState(); //^ Controllo valore di ricerca per nome
  const [searchedFilms, setSearchedFilms] = useState([]); //^ Stato dell'array dei film cercati, all'inizio è vuoto

  function handleSerachInput(e) {
    return setSearchInput(e.target.value); //^ Funzione per settare lo stato sul valore inserito dall'utente
  }

  return (
    <>
      <section>
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ciao");
          }}
        >
          <div className="container text-center">
            <h1>CIAOOO</h1>
            <div className="input-group mb-3">
              <input
                value={searchInput}
                onChange={handleSerachInput}
                //^
                type="text"
                className="form-control"
                placeholder="Recipient’s username"
                aria-label="Recipient’s username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Button
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
