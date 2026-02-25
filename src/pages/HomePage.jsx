import { useSearch } from "../contexts/SearchContext";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Results from "../components/Results";
import NoResults from "../components/NoResults";

export default function HomePage() {
  const { searchedFilms, searchedDramas, isLoading, isSearching, searchInput } =
    useSearch();

  if (
    isSearching &&
    searchedFilms.length === 0 &&
    searchedDramas.length === 0 &&
    searchInput !== ""
  ) {
    return <NoResults />; //^ Se non ci sono risultati
  }

  if (isLoading) {
    return <Loading />; //^ Se sta caricando i risultati mostro Loading
  }

  if (searchedFilms.length === 0 || searchedDramas.length === 0) {
    return <Welcome />; //^ Se non è stata ancora effettuata una chiamata mostro la pagina base
  }

  return <Results />; //^ Dopo la chiamata mostro Results
}
