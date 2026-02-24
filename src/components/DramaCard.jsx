export default function DramaCard({
  name,
  original_name,
  language,
  rating,
  img,
}) {
  return (
    <>
      <div className="col">
        <div className="card text-bg-dark">
          {img && (
            <img
              src={`https://image.tmdb.org/t/p/w342/${img}`}
              className="card-img"
              alt={name}
            />
          )}
          <div className="card-img-overlay">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{original_name}</h5>
            <p className="card-text">
              <span className="fw-bold">Voto: </span>
              {(rating * 0.5).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      {/* <>
      <li className="list-group-item">
        {language === "en" ? (
          <img src="src\assets\img\regno-unito.jpg" className="country-img" />
        ) : language === "it" ? (
          <img
            src="src\assets\img\Flag_of_Italy.svg.webp"
            className="country-img"
          />
        ) : (
          <>
            <span className="fw-bold">Lingua: </span>
            {language}
          </>
        )}
      </li>
    </> */}
    </>
  );
}
