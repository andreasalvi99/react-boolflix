export default function DramaCard({
  name,
  original_name,
  language,
  rating,
  img,
}) {
  return (
    <>
      <li>
        <span className="fw-bold">Titolo: </span>
        {name}
      </li>
      {img && (
        <li>
          <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={name} />
        </li>
      )}
      <li>
        <span className="fw-bold">Titolo Originale: </span>
        {original_name}
      </li>
      <li>
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
      <li>
        <span className="fw-bold">Voto: </span>
        {rating.toFixed(1)}
      </li>
      <hr />
    </>
  );
}
