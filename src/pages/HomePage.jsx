import { useSearch } from "../contexts/SearchContext";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Results from "../components/Results";

export default function HomePage() {
  const { searchedFilms, searchedDramas, isLoading, searchInput } = useSearch();

  // if (
  //   !isLoading &&
  //   searchedFilms.length === 0 &&
  //   searchedDramas.length === 0 &&
  //   searchInput !== ""
  // ) {
  //   return (
  //     <>
  //       <Header />
  //       <section id="empty-state">
  //         <div className="container d-flex justify-content-center align-items-center">
  //           <span className="text-white fs-1">
  //             Nessun risultato trovato per "{searchInput}"
  //           </span>
  //         </div>
  //       </section>
  //     </>
  //   );
  // }

  if (isLoading) {
    return <Loading />; //^ Se sta caricando i risultati mostro Loading
  }

  if (searchedFilms.length === 0 || searchedDramas.length === 0) {
    return <Welcome />; //^ Se non è stata ancora effettuata una chiamata mostro la pagina base
  }

  return <Results />; //^ Dopo la chiamata mostro Results
}
