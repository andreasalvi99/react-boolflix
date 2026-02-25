import { useSearch } from "../contexts/SearchContext";
import FilmCard from "../components/FilmCard";
import DramaCard from "../components/DramaCard";
import Header from "../components/Header";

export default function HomePage() {
  const { searchedFilms, searchedDramas, isLoading, searchInput } = useSearch();

  // if (
  //   !searchedFilms.includes(searchInput) &&
  //   !searchedDramas.includes(searchInput)
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
    return (
      <>
        <Header />
        <section className="d-flex justify-content-center align-items-center">
          <div className="spinner-grow mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      </>
    );
  }

  if (searchedFilms.length === 0 || searchedDramas.length === 0) {
    return (
      <>
        <Header />
        <section id="empty-state">
          <div className="container d-flex justify-content-center align-items-center">
            <span className="text-white fs-1">
              Centinaia di migliaia di Film e Serie TV a tua disposizione...
            </span>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section>
        <div className="container text-center my-5">
          <h2 className="my-5 text-start">
            <span>Films</span>
          </h2>
          <div className="row row-cols-3 g-3">
            {searchedFilms.map((searchedFilm) => {
              return (
                <FilmCard
                  img={searchedFilm.poster_path}
                  key={searchedFilm.id}
                  title={searchedFilm.title}
                  original_title={searchedFilm.original_title}
                  rating={searchedFilm.vote_average}
                  overview={searchedFilm.overview}
                />
              );
            })}
          </div>
          <h2 className="my-5 text-start">
            <span>TV Series</span>
          </h2>
          <div className="row row-cols-3 g-3 my-5">
            {searchedDramas.map((searchedDrama) => {
              return (
                <DramaCard
                  img={searchedDrama.poster_path}
                  key={searchedDrama.id}
                  name={searchedDrama.name}
                  original_name={searchedDrama.original_name}
                  rating={searchedDrama.vote_average}
                  overview={searchedDrama.overview}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
