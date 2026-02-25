import axios from "axios";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchBarProvider({ children }) {
  const [searchInput, setSearchInput] = useState(""); //^ Controllo valore di ricerca per nome
  const [searchedFilms, setSearchedFilms] = useState([]); //^ Stato dell'array dei film cercati, all'inizio è vuoto
  const [searchedDramas, setSearchedDramas] = useState([]); //^ tato dell'array delle serieTv cercate, all'inizio è vuoto
  const [isLoading, setIsLoading] = useState(false);

  function handleSerachInput(e) {
    return setSearchInput(e.target.value); //^ Funzione per settare lo stato sul valore inserito dall'utente
  }

  function handleSubmitAndFetchFilms(e) {
    return (
      e.preventDefault(), //^ Funzione per prevenire il refresh ed effettuare chiamata all'invio del form
      setIsLoading(true),
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`, //^Chiamata per film
        )
        .then((response) => {
          setSearchedFilms(response.data.results);
          setIsLoading(false);
        }),
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=a23cfdf36a93b9f03e4cca29c2df220a&query=${searchInput}&language=it-IT`, //^Chiamata per serieTv
        )
        .then((response) => {
          setSearchedDramas(response.data.results);
          setIsLoading(false);
        })
    );
  }

  return (
    <SearchContext.Provider
      value={{
        searchedFilms,
        searchedDramas,
        handleSerachInput,
        handleSubmitAndFetchFilms,
        searchInput,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { useSearch, SearchBarProvider };
