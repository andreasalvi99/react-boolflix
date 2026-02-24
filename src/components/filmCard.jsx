export default function FilmCard({
  id,
  title,
  original_title,
  language,
  rating,
}) {
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
        <span className="fw-bold">Lingua: </span>
        {language}
      </li>
      <li className="list-group-item">
        <span className="fw-bold">Voto: </span>
        {rating}
      </li>
      <hr />
    </>
  );
}
