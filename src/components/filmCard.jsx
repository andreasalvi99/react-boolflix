export default function FilmCard({ title, original_title, language, rating }) {
  return (
    <>
      <li className="list-group-item">
        <span className="fw-bold">Titolo: </span>
        {title}
      </li>
      <li className="list-group-item">
        <span className="fw-bold">Titolo Originale: </span>
        {original_title}
      </li>
      <li className="list-group-item">
        {language === "en" ? (
          <img src="src\assets\img\regno-unito.jpg" />
        ) : language === "it" ? (
          <img src="src\assets\img\Flag_of_Italy.svg.webp" />
        ) : (
          <>
            <span className="fw-bold">Lingua: </span>
            {language}
          </>
        )}
      </li>
      <li className="list-group-item">
        <span className="fw-bold">Voto: </span>
        {rating.toFixed(1)}
      </li>
      <hr />
    </>
  );
}
