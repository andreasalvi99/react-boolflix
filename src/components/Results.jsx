import Header from "./Header";

export default function Results() {
  const { searchedFilms, searchedDramas } = useSearch();

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
