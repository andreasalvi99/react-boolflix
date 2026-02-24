import axios from "axios";
import { useState } from "react";
import FilmCard from "./components/filmCard";

export default function App() {
  const [searchInput, setSearchInput] = useState(""); //^ Controllo valore di ricerca per nome
  const [searchedFilms, setSearchedFilms] = useState([]); //^ Stato dell'array dei film cercati, all'inizio è vuoto
  const [searchedDramas, setSearchedDramas] = useState([]); //^ tato dell'array delle serieTv cercate, all'inizio è vuoto

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
        }),
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`,
        )
        .then((response) => {
          setSearchedDramas(response.data.results);
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
        <h2>Films</h2>
        <ul className="list-group">
          {searchedFilms.map((searchedFilm) => {
            return (
              <FilmCard
                key={searchedFilm.id}
                id={searchedFilm.id}
                title={searchedFilm.title}
                original_title={searchedFilm.original_title}
                language={searchedFilm.original_language}
                rating={searchedFilm.vote_average}
              />
            );
          })}
        </ul>
        <h2>TV</h2>
        <ul>
          {searchedDramas.map((searchedDrama) => {
            return (
              <>
                <li key={searchedDrama.id}>
                  <span className="fw-bold">Titolo: </span>
                  {searchedDrama.name}
                </li>
                <li>
                  <span className="fw-bold">Titolo Originale: </span>
                  {searchedDrama.original_name}
                </li>
                <li>
                  {searchedDrama.original_language === "en" ? (
                    <img src="src\assets\img\regno-unito.jpg" />
                  ) : searchedDrama.original_language === "it" ? (
                    <img src="src\assets\img\Flag_of_Italy.svg.webp" />
                  ) : (
                    <>
                      <span className="fw-bold">Lingua: </span>
                      {searchedDrama.original_language}
                    </>
                  )}
                </li>
                <li>
                  <span className="fw-bold">Voto: </span>
                  {searchedDrama.vote_average}
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}
