import axios from "axios";
import { useState } from "react";

export default function App() {
  const [searchInput, setSearchInput] = useState(""); //^ Controllo valore di ricerca per nome
  const [searchedFilms, setSearchedFilms] = useState([]); //^ Stato dell'array dei film cercati, all'inizio è vuoto

  function handleSerachInput(e) {
    return setSearchInput(e.target.value); //^ Funzione per settare lo stato sul valore inserito dall'utente
  }

  function handleSubmitAndFetchFilms(e) {
    return (
      e.preventDefault(), //^ Funzione per prevenire il refresh ed effettuare chiamata all'invio del form
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`,
        )
        .then((response) => {
          setSearchedFilms(response.data.results);
        })
    );
  }

  return (
    <>
      <section>
        <form className="form-control" onSubmit={handleSubmitAndFetchFilms}>
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
        <ul className="list-group">
          {searchedFilms.map((searchedFilm) => {
            return (
              <div key={searchedFilm.id}>
                <li className="list-group-item">
                  <span className="fw-bold">Titolo: </span>
                  {searchedFilm.title}
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Titolo Originale: </span>
                  {searchedFilm.original_title}
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Lingua: </span>
                  {searchedFilm.original_language}
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Voto: </span>
                  {searchedFilm.vote_average}
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
}
