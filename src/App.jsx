import axios from "axios";
import { useState } from "react";
import FilmCard from "./components/FilmCard";
import DramaCard from "./components/DramaCard";

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
          `https://api.themoviedb.org/3/search/movie?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`, //^Chiamata per film
        )
        .then((response) => {
          setSearchedFilms(response.data.results);
        }),
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`, //^Chiamata per serieTv
        )
        .then((response) => {
          setSearchedDramas(response.data.results);
        })
    );
  }

  return (
    <>
      <section>
        <div className="container text-center">
          <form className="form-control" onSubmit={handleSubmitAndFetchFilms}>
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
          </form>

          <h2>Films</h2>
          <div className="row row-cols-4 g-3">
            {searchedFilms.map((searchedFilm) => {
              return (
                <FilmCard
                  img={searchedFilm.poster_path}
                  key={searchedFilm.id}
                  title={searchedFilm.title}
                  original_title={searchedFilm.original_title}
                  rating={searchedFilm.vote_average}
                />
              );
            })}
          </div>
          {/* <ul className="list-group text-start">
            {searchedFilms.map((searchedFilm) => {
              return (
                <FilmCard
                  key={searchedFilm.id}
                  id={searchedFilm.id}
                  title={searchedFilm.title}
                  original_title={searchedFilm.original_title}
                  language={searchedFilm.original_language}
                  rating={searchedFilm.vote_average}
                  img={searchedFilm.poster_path}
                />
              );
            })}
          </ul> */}
          <h2>TV</h2>
          <div className="row row-cols-4 g-3">
            {searchedDramas.map((searchedDrama) => {
              return (
                <DramaCard
                  img={searchedDrama.poster_path}
                  key={searchedDrama.id}
                  name={searchedDrama.name}
                  original_name={searchedDrama.original_name}
                  rating={searchedDrama.vote_average}
                />
              );
            })}
          </div>
          {/* <ul className="list-group text-start">
            {searchedDramas.map((searchedDrama) => {
              return (
                <DramaCard
                  key={searchedDrama.id}
                  id={searchedDrama.id}
                  name={searchedDrama.name}
                  original_name={searchedDrama.original_name}
                  language={searchedDrama.original_language}
                  rating={searchedDrama.vote_average}
                  img={searchedDrama.poster_path}
                />
              );
            })}
          </ul> */}
        </div>
      </section>
    </>
  );
}
