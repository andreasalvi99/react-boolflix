import axios from "axios";
import { useState } from "react";
import FilmCard from "./components/FilmCard";
import DramaCard from "./components/DramaCard";
import { SearchBarProvider, useSearch } from "./contexts/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const {
    handleSubmitAndFetchFilms,
    searchInput,
    handleSerachInput,
    searchedFilms,
    searchedDramas,
  } = useSearch();

  return (
    <SearchBarProvider>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />

          <section>
            <div className="container text-center">
              <form
                className="form-control"
                onSubmit={handleSubmitAndFetchFilms}
              >
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
              <div className="row row-cols-6 g-3">
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
              <h2>TV</h2>
              <div className="row row-cols-6 g-3">
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
            </div>
          </section>
        </Routes>
      </BrowserRouter>
    </SearchBarProvider>
  );
}
