export default function FilmCard({
  title,
  original_title,
  language,
  rating,
  img,
}) {
  return (
    <div className="col">
      <div className="card text-bg-dark">
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{original_title}</h5>
          <p className="card-text">
            <span className="fw-bold">Voto: </span>
            {(rating * 0.5).toFixed(1)}
          </p>
        </div>
      </div>
      {/* <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
      </div>
    </div> */}
    </div>
    // <>
    //   <li className="list-group-item">
    //     <span className="fw-bold">Titolo: </span>
    //     {title}
    //   </li>
    //   {img && (
    //     <li>
    //       <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={title} />
    //     </li>
    //   )}
    //   <li className="list-group-item">
    //     <span className="fw-bold">Titolo Originale: </span>
    //     {original_title}
    //   </li>
    //   <li className="list-group-item">
    //     {language === "en" ? (
    //       <img src="src\assets\img\regno-unito.jpg" className="country-img" />
    //     ) : language === "it" ? (
    //       <img
    //         src="src\assets\img\Flag_of_Italy.svg.webp"
    //         className="country-img"
    //       />
    //     ) : (
    //       <>
    //         <span className="fw-bold">Lingua: </span>
    //         {language}
    //       </>
    //     )}
    //   </li>
    //   <li className="list-group-item">
    //     <span className="fw-bold">Voto: </span>
    //     {(rating * 0.5).toFixed(1)}
    //   </li>
    //   <hr />
    // </>
  );
}
