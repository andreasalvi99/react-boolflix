export default function DramaCard({ name, original_name, language, rating }) {
  return (
    <>
      <li>
        <span className="fw-bold">Titolo: </span>
        {name}
      </li>
      <li>
        <span className="fw-bold">Titolo Originale: </span>
        {original_name}
      </li>
      <li>
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
      <li>
        <span className="fw-bold">Voto: </span>
        {rating}
      </li>
      <hr />
    </>
  );
}
