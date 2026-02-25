import { useSearch } from "../contexts/SearchContext";
import FilmCard from "../components/FilmCard";
import DramaCard from "../components/DramaCard";
import Header from "../components/Header";

export default function HomePage() {
  const { searchedFilms, searchedDramas, isLoading } = useSearch();

  return (
    <>
      <Header />
      {isLoading === true ? (
        <section className="d-flex justify-content-center align-items-center">
          <div className="spinner-grow mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      ) : searchedFilms.length > 0 || searchedDramas.length > 0 ? (
        <>
          <section>
            <div className="container text-center my-5">
              {searchedFilms && (
                <>
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
                </>
              )}

              {searchedDramas && (
                <>
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
                </>
              )}
            </div>
          </section>
        </>
      ) : (
        <section id="empty-state">
          <div className="container d-flex justify-content-center align-items-center">
            <span className="text-white fs-1">
              Centinaia di migliaia di Film e Serie TV a tua disposizione...
            </span>
          </div>
        </section>
      )}
    </>
  );
}
