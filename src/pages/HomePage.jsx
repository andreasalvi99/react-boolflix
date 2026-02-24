import { useSearch } from "../contexts/SearchContext";
import FilmCard from "../components/FilmCard";
import DramaCard from "../components/DramaCard";
import Header from "../components/Header";

export default function HomePage() {
  const { searchedFilms, searchedDramas } = useSearch();

  return (
    <>
      <Header />
      <section>
        <div className="container text-center">
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
                  overview={searchedFilm.overview}
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
